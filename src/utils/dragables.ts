import memoizeOne from "memoize-one";
import { DraggableLocation } from "react-beautiful-dnd";
import { Editor, ExampleData, Store } from "../data/example";

export const reorder = (
  startIndex: number,
  endIndex: number,
  list?: Store[]
): Store[] | null => {
  if (!list) return null;

  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const withNewStores = (
  { pk, user }: { pk: number; user: string },
  stores: Store[]
) => ({
  pk,
  user,
  stores,
});

/**
 * Reorder single drag
 */

interface ReorderProps {
  entities: ExampleData;
  selectedStoresIds: string[];
  source: DraggableLocation;
  destination: DraggableLocation;
}

export const getHomeColumn = (entities: ExampleData, storeId: string = "") => {
  const editor = entities.Editors.find((editor) =>
    editor.stores.find((store) => store.identifier === storeId)
  )!;
  return editor;
};

export const reorderSingleDrag = ({
  entities,
  selectedStoresIds,
  source,
  destination,
}: ReorderProps) => {
  // moving in the same list
  if (source.droppableId === destination.droppableId) {
    const editor = entities.Editors.find(
      (editor) => editor.user === source.droppableId
    )!;

    const reordered = reorder(source.index, destination.index, editor.stores);

    if (reordered) {
      editor.stores = reordered;
    }

    const updated = {
      ...entities,
      Editors: [
        ...entities.Editors.map((current) =>
          current.pk !== editor.pk ? current : editor
        ),
      ],
    };

    return updated;
  }
  const EditorFrom = entities.Editors.find(
    (editor) => editor.user === source.droppableId
  )!;

  const EditorTo = entities.Editors.find(
    (editor) => editor.user === destination.droppableId
  )!;

  const storeToAdd = EditorFrom.stores[source.index];
  const newStoresEditorFrom = Array.from(EditorFrom.stores);
  newStoresEditorFrom.splice(source.index, 1);

  const newStoresEditorTo = Array.from(EditorTo.stores);
  newStoresEditorTo.splice(destination.index, 0, storeToAdd);

  EditorFrom.stores = newStoresEditorFrom;
  EditorTo.stores = newStoresEditorTo;

  const fromId = entities.Editors.findIndex(
    (edit) => edit.pk === EditorFrom.pk
  );
  const toId = entities.Editors.findIndex((edit) => edit.pk === EditorTo.pk);

  const newEditors = Array.from(entities.Editors);
  newEditors[fromId] = EditorFrom;
  newEditors[toId] = EditorTo;

  const updated = {
    ...entities,
    Editors: [...newEditors],
  };

  return updated;
};
const reorderMultiDrag = ({
  entities,
  selectedStoresIds,
  source,
  destination,
}: ReorderProps) => {
  const editor = entities.Editors.find(
    (editor) => editor.user === source.droppableId
  )!;

  const arrastrada = getStoresIdentifiers(editor)[source.index];

  const insertAtIndex = (() => {
    const destinationIndexOffset = selectedStoresIds.reduce(
      (previous, current) => {
        if (current === arrastrada) {
          return previous;
        }

        const final = entities.Editors.find(
          (editor) => editor.user === destination.droppableId
        )!;
        const column = getHomeColumn(entities, current);

        if (column !== final) {
          return previous;
        }

        const index = editor.stores
          .map((store) => store.identifier)
          .indexOf(current);

        if (index >= destination.index) {
          return previous;
        }

        // the selected item is before the destination index
        // we need to account for this when inserting into the new location
        return previous + 1;
      },
      0
    );
    const result = destination.index - destinationIndexOffset;
    return result;
  })();

  const orderedSelectedTaskIds = [...selectedStoresIds];

  orderedSelectedTaskIds.sort((a, b) => {
    // moving the dragged item to the top of the list
    if (a === arrastrada) {
      return -1;
    }

    if (b === arrastrada) {
      return 1;
    }

    // sorting by their natural indexes
    const columnForA = getHomeColumn(entities, a);
    const indexOfA = columnForA.stores
      .map((store) => store.identifier)
      .indexOf(a);
    const columnForB = getHomeColumn(entities, b);
    const indexOfB = columnForB.stores
      .map((store) => store.identifier)
      .indexOf(b);

    if (indexOfA !== indexOfB) {
      return indexOfA - indexOfB;
    }

    // sorting by their order in the selectedTaskIds list
    return -1;
  });

  const removedStoresFromEditor = editor.stores.filter(
    (store) => !selectedStoresIds.includes(store.identifier)
  );
  const addedStoresFromEditorTo = editor.stores.filter((store) =>
    selectedStoresIds.includes(store.identifier)
  );

  const Editorfinal = entities.Editors.find(
    (editor) => editor.user === destination.droppableId
  )!;

  const withInserted = (() => {
    const base = Array.from(Editorfinal.stores);

    base.splice(insertAtIndex, 0, ...addedStoresFromEditorTo);
    return base;
  })();
  Editorfinal.stores = withInserted;
  editor.stores = removedStoresFromEditor;

  const fromId = entities.Editors.findIndex((edit) => edit.pk === editor.pk);
  const toId = entities.Editors.findIndex((edit) => edit.pk === Editorfinal.pk);

  const newEditors = Array.from(entities.Editors);
  newEditors[fromId] = Editorfinal;
  newEditors[toId] = editor;

  const updated = {
    ...entities,
    Editors: [...newEditors],
    selectedTaskIds: orderedSelectedTaskIds,
  };

  return updated;
};

export const mutliDragAwareReorder = (args: ReorderProps) => {
  if (args.selectedStoresIds.length > 1) {
    return reorderMultiDrag(args);
  }

  return reorderSingleDrag(args);
};

const getStoresIdentifiers = (editor: Editor) =>
  editor.stores.map((store) => store.identifier);

interface SelectProps {
  entities: ExampleData;
  selectedStoresIds: string[];
  newStoreId: string;
}

export const multiSelect = ({
  entities,
  selectedStoresIds,
  newStoreId,
}: SelectProps): any => {
  // Nothing already selected
  if (!selectedStoresIds.length) {
    return [newStoreId];
  }

  const columnOfNew = getHomeColumn(entities, newStoreId);
  const storeIdentifiers = columnOfNew.stores.map((store) => store.identifier);

  const indexOfNew = storeIdentifiers.indexOf(newStoreId);
  const lastSelected = selectedStoresIds[selectedStoresIds.length - 1];

  const columnOfLast = getHomeColumn(entities, lastSelected);
  const indexOfLast = columnOfLast.stores
    .map((store) => store.identifier)
    .indexOf(lastSelected);

  // multi selecting to another column
  // select everything up to the index of the current item
  if (columnOfNew !== columnOfLast) {
    return columnOfNew.stores.slice(0, indexOfNew + 1);
  }

  // multi selecting in the same column
  // need to select everything between the last index and the current index inclusive

  // nothing to do here
  if (indexOfNew === indexOfLast) {
    return null;
  }

  const isSelectingForwards = indexOfNew > indexOfLast;

  const start: number = isSelectingForwards ? indexOfLast : indexOfNew;
  const end: number = isSelectingForwards ? indexOfNew : indexOfLast;

  const storesBetween: string[] = columnOfNew.stores
    .slice(start, end + 1)
    .map((store) => store.identifier);

  const storesToAdd: string[] = storesBetween.filter((identifier): boolean => {
    // if already selected: then no need to select it again
    if (selectedStoresIds.includes(identifier)) {
      return false;
    }
    return true;
  });

  const sorted: string[] = isSelectingForwards
    ? storesToAdd
    : [...storesToAdd].reverse();
  const combined: string[] = [...selectedStoresIds, ...sorted];

  return combined;
};

export const getSelectedMap = memoizeOne(
  (selectedStoreIds: string[], storeId: string) =>
    selectedStoreIds.some((selectedTaskId) => selectedTaskId === storeId)
);
