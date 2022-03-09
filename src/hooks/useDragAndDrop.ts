import { useCallback, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { exampleData } from "../data/example";
import { reorderSingleDrag } from "../utils/dragables";
import { useSelectedItems } from "./useSelectedItems";

export const useDragAndDrop = () => {
  const [editorsData, setEditorsData] = useState(exampleData);
  const { selectedStoresIds, setSelectedStoresIds } = useSelectedItems();
  const [draggableStoreId, setDraggableStoreId] = useState<number | null>(null);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      if (!destination || result.reason === "CANCEL") return;
      reorderSingleDrag({
        entities: editorsData,
        selectedStoresIds,
        source,
        destination,
      });
    },
    [editorsData, selectedStoresIds]
  );

  return {
    onDragEnd,
    editorsData,
  };
};
