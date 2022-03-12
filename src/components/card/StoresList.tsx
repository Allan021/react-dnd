import { CardContent, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Droppable } from "react-beautiful-dnd";
import { Editor } from "../../data/example";
import { CardItem } from "./CardItem";
import { getSelectedMap } from "../../utils/dragables";
import { useContext } from "react";
import { DragaAndDropContext } from "../../contexts/DragaAndDropContext";

export interface StoreListProps {
  selectedStoresIds: string[];
  draggableStoreId: string | null;
  editor: Editor;
  classes: any;
  column: string;
}

export const StoresList = ({
  editor,
  column,
  classes,
  selectedStoresIds,
  draggableStoreId,
}: StoreListProps) => {
  const { storeHandlers } = useContext(DragaAndDropContext);
  const { onClick, onTouchEnd, onKeyDown, handleDelete } = storeHandlers;

  return (
    <Droppable droppableId={editor.user} type={column}>
      {(provided, snapshot) => (
        <CardContent
          className={clsx("puto", {
            [classes.cardContent]: true,
          })}
          innerRef={provided.innerRef}
          {...provided.droppableProps}
          style={{
            maxHeight: 450,
            overflowY: "scroll",
            backgroundColor: snapshot.isDraggingOver ? "#ddd" : "#eee",
          }}
        >
          {editor.stores.map((store, index) => {
            const isSelected = getSelectedMap(
              selectedStoresIds,
              store.identifier
            );

            const isGhosting: boolean =
              isSelected &&
              Boolean(draggableStoreId) &&
              draggableStoreId !== store.identifier;

            return (
              <CardItem
                store={store}
                index={index}
                key={store.pk}
                isSelected={isSelected}
                isGhosting={isGhosting}
                selectionCount={selectedStoresIds.length}
                onClick={onClick}
                onTouchEnd={onTouchEnd}
                onKeyDown={onKeyDown}
                handleDelete={handleDelete}
                editor={editor}
              />
            );
          })}

          {editor.stores.length === 0 && (
            <Typography variant="subtitle1" color="initial">
              Sin Tiendas Papu
            </Typography>
          )}
          {provided.placeholder}
        </CardContent>
      )}
    </Droppable>
  );
};
