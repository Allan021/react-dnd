import { useCallback, useEffect, useState } from "react";
import { DraggableStateSnapshot, DropResult } from "react-beautiful-dnd";
import { keyCodes } from "../constants/generics";
import { Checkboxes } from "../contexts/DragaAndDropContext";
import { Editor, exampleData } from "../data/example";
import { multiSelect, mutliDragAwareReorder } from "../utils/dragables";
import { useSelectedItems } from "./useSelectedItems";

const PRIMARY_BUTTON_NUMBER = 0;
type performTypes =
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.KeyboardEvent<HTMLDivElement>;

export const useDragAndDrop = () => {
  const [editorsData, setEditorsData] = useState(exampleData);
  const { selectedStoresIds, setSelectedStoresIds } = useSelectedItems();
  const [draggableStoreId, setDraggableStoreId] = useState<string | null>(null);
  const [checkBoxes, setCheckBoxes] = useState<Checkboxes>({});
  useEffect(() => {
    const items: Checkboxes = {};

    editorsData.columnsIds.forEach((editor) => {
      items[editor] = false;
    });

    setCheckBoxes({ ...items });
  }, [editorsData.columnsIds]);

  const handleCheckoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  //this is for just one selection and is to start
  const toggleSelection = useCallback(
    (storeId: string) => {
      const wasSelected = selectedStoresIds.includes(storeId);

      const newTaskIds = (() => {
        // Task was not previously selected
        // now will be the only selected item
        if (!wasSelected) {
          return [storeId];
        }

        // Task was part of a selected group
        // will now become the only selected item
        if (selectedStoresIds.length > 1) {
          return [storeId];
        }

        return [];
      })();
      setSelectedStoresIds(newTaskIds);
    },
    [selectedStoresIds, setSelectedStoresIds]
  );

  const toggleSelectionInGroup = useCallback(
    (taskId: string) => {
      const selectedStoresId = selectedStoresIds;
      const index = selectedStoresId.indexOf(taskId);

      // if not selected - add it to the selected items
      if (index === -1) {
        setSelectedStoresIds([...selectedStoresIds, taskId]);

        return;
      }

      // it was previously selected and now needs to be removed from the group
      const shallow = [...selectedStoresIds];
      shallow.splice(index, 1);

      setSelectedStoresIds(shallow);
    },
    [selectedStoresIds, setSelectedStoresIds]
  );

  const handleSelectAll = (editor: Editor, isSelected: boolean) => {
    const storesIds = editor.stores.map((storeId) => storeId.identifier);

    if (!isSelected) {
      setSelectedStoresIds([...selectedStoresIds, ...storesIds]);
      return;
    }
    const removed = Array.from(selectedStoresIds).filter(
      (storeId) => !storesIds.includes(storeId)
    );

    setSelectedStoresIds([...removed]);
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination, type, draggableId } = result;

      if (!destination || result.reason === "CANCEL") return;

      if (type === "column") {
        const columnOrder = Array.from(editorsData.columnsIds);
        columnOrder.splice(source.index, 1);
        columnOrder.splice(destination.index, 0, draggableId);
        setEditorsData({
          ...editorsData,
          columnsIds: columnOrder,
        });
        return;
      }

      const processed = mutliDragAwareReorder({
        entities: editorsData,
        selectedStoresIds,
        source,
        destination,
      });

      if (processed) {
        setEditorsData(processed);
      }
      setDraggableStoreId(null);
    },
    [editorsData, selectedStoresIds]
  );

  const onBeforeCapture = (start: { draggableId: string; mode: any }) => {
    const store_identifier = start.draggableId;
    const selected = selectedStoresIds.find(
      (storeId) => storeId === store_identifier
    );

    if (!selected) {
      setSelectedStoresIds([]);
    }
    setDraggableStoreId(store_identifier);
  };

  const multiSelectTo = useCallback(
    (newStoreId: string) => {
      const updated = multiSelect({
        entities: editorsData,
        selectedStoresIds,
        newStoreId,
      });

      if (updated == null) {
        return;
      }

      setSelectedStoresIds([...updated]);
    },
    [editorsData, selectedStoresIds, setSelectedStoresIds]
  );

  const wasToggleInSelectionGroupKeyUsed = useCallback((e: any) => {
    const isUsingWindows = navigator.userAgent.toLowerCase().includes("win");
    return isUsingWindows ? e.ctrlKey : e.metaKey;
  }, []);

  const wasMultiSelectKeyUsed = useCallback((e: any) => e.shiftKey, []);
  const performAction = useCallback(
    (event: performTypes, storeId) => {
      if (wasToggleInSelectionGroupKeyUsed(event)) {
        toggleSelectionInGroup(storeId);
        return;
      }

      if (wasMultiSelectKeyUsed(event)) {
        multiSelectTo(storeId);
        return;
      }

      toggleSelection(storeId);
    },
    [
      multiSelectTo,
      toggleSelection,
      toggleSelectionInGroup,
      wasMultiSelectKeyUsed,
      wasToggleInSelectionGroupKeyUsed,
    ]
  );

  const onKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLDivElement>,
      snapshot: DraggableStateSnapshot,
      storeId: string
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      if (snapshot.isDragging) {
        return;
      }
      if (event.code !== keyCodes.enter) {
        return;
      }

      event.preventDefault();

      performAction(event, storeId);
    },
    [performAction]
  );

  const handleDelete = (storeId: string, editor: Editor) => {
    setEditorsData({
      ...editorsData,
      Editors: [
        ...editorsData.Editors.map((edi) =>
          edi.user !== editor.user
            ? edi
            : {
                ...edi,
                stores: edi.stores.filter(
                  (store) => store.identifier !== storeId
                ),
              }
        ),
      ],
    });
  };

  const onClick = useCallback(
    (e: any, storeId: string) => {
      if (e.defaultPrevented) {
        return;
      }

      if (e.button !== PRIMARY_BUTTON_NUMBER) {
        return;
      }

      // marking the event as used
      e.preventDefault();

      performAction(e, storeId);
    },
    [performAction]
  );

  const onTouchEnd = useCallback(
    (event: any, storeId: string) => {
      if (event.defaultPrevented) {
        return;
      }

      // marking the event as used
      // we would also need to add some extra logic to prevent the click
      // if this element was an anchor
      event.preventDefault();
      toggleSelectionInGroup(storeId);
    },
    [toggleSelectionInGroup]
  );

  return {
    onDragEnd,
    editorsData,
    toggleSelection,
    toggleSelectionInGroup,
    onBeforeCapture,
    draggableStoreId,
    multiSelectTo,
    selectedStoresIds,
    onKeyDown,
    onClick,
    onTouchEnd,
    handleSelectAll,
    checkBoxes,
    handleDelete,
    handleCheckoxChange,
  };
};
