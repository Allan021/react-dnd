import { Container, Grid } from "@material-ui/core";
// import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useStyles } from "../styles";
import { EditorCard } from "./card/EditorCard";

export const DragAndDropContext = () => {
  const classes = useStyles();

  // const [selectedStoresIds, setSelectedStoresId] = useState([]);

  const { onDragEnd, editorsData } = useDragAndDrop();
  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Droppable
            droppableId="all-column"
            direction="horizontal"
            type="column"
          >
            {(provided, snapshot) => (
              <Grid
                container
                spacing={2}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {editorsData.columnsIds.map((name, index) => {
                  const editor = editorsData.Editors.find(
                    (editor) => editor.user === name
                  );

                  return (
                    <Grid item key={name} xs={12} sm={6} md={4} lg={3}>
                      <EditorCard index={index} editor={editor} />
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    </main>
  );
};
