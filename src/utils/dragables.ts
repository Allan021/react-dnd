import { DraggableLocation } from "react-beautiful-dnd";
import { ExampleData, Store } from "../data/example";

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

export const reorderSingleDrag = ({
  entities,
  selectedStoresIds,
  source,
  destination,
}: ReorderProps) => {
  // moving in the same list
  if (source.droppableId === destination.droppableId) {
    const column = entities.columns[source.droppableId];
    const reordered = reorder(source.index, destination.index, column.stores);
    const updated = {
      ...entities,
    };
  }
};
