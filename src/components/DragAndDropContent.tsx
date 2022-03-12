import { Container, Grid } from "@material-ui/core";
import { useContext } from "react";
// import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DragaAndDropContext } from "../contexts/DragaAndDropContext";
import { useStyles } from "../styles";
import { EditorCard } from "./card/EditorCard";

export const DragAndDropContent = () => {
  const classes = useStyles();

  const { onDragEnd, editorsData, onBeforeCapture } =
    useContext(DragaAndDropContext);

  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
        <Droppable
          droppableId="all-column"
          direction="horizontal"
          type="column"
        >
          {(provided, snapshot) => (
            <Container className={classes.cardGrid} maxWidth="lg">
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
              </Grid>{" "}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
};
