import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import { red } from "@material-ui/core/colors";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Editor } from "../../data/example";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { CardItem } from "./CardItem";
import "./index.css";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },

    avatar: {
      backgroundColor: red[500],
    },
    cardContent: {
      maxHeight: "50vh",
      overflowY: "scroll",
      backgroundColor: "#eee",
      marginTop: 10,
    },
  })
);

interface Props {
  index: number;
  editor?: Editor;
}
export const EditorCard = ({ editor, index }: Props) => {
  const classes = useStyles();

  if (!editor) return null;

  return (
    <Draggable draggableId={editor.user} index={index} key={editor.user}>
      {(provided, snapshot) => (
        <Card
          className={classes.root}
          innerRef={provided.innerRef}
          {...provided.draggableProps}
        >
          <CardHeader
            {...provided.dragHandleProps}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {editor.user.slice(0, 2).toUpperCase()}
              </Avatar>
            }
            title={editor.user}
            subheader="Editor"
            style={{ paddingBottom: 0 }}
          />
          <FormControlLabel
            style={{ marginLeft: 3, marginBottom: -10, marginTop: 12 }}
            control={
              <Checkbox onChange={() => console.log("Hola")} name="checkedA" />
            }
            label="All"
          />
          <Droppable droppableId={editor.user} type="stores">
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
                {editor.stores.map((store, index) => (
                  <CardItem store={store} index={index} key={store.pk} />
                ))}

                {provided.placeholder}
              </CardContent>
            )}
          </Droppable>
        </Card>
      )}
    </Draggable>
  );
};
