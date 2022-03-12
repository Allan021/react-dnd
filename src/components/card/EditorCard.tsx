import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import { red } from "@material-ui/core/colors";
import { Box, Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { Editor } from "../../data/example";
import { Draggable } from "react-beautiful-dnd";
import "./index.css";

import { useContext, useState } from "react";
import { DragaAndDropContext } from "../../contexts/DragaAndDropContext";
import { StoresList } from "./StoresList";
import { typedMemo } from "../../utils/typedMemo";
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
      padding: "1rem .5rem",
    },
  })
);

interface Props {
  index: number;
  editor?: Editor;
}
const EditorComponent = ({ editor, index }: Props) => {
  const classes = useStyles();
  const { selectedStoresIds, draggableStoreId, handleSelectAll } =
    useContext(DragaAndDropContext);

  const [selected, setSelected] = useState<boolean>(false);
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
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            style={{ padding: "0 .8rem", marginTop: 10, marginBottom: -8 }}
          >
            <FormControlLabel
              onClick={(e) => {
                e.stopPropagation();
              }}
              control={
                <Checkbox
                  checked={selected}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelected(true);
                    } else {
                      setSelected(false);
                    }
                    handleSelectAll(editor, selected);
                  }}
                  name={editor.user}
                />
              }
              label="All"
            />
            <Typography variant="caption" color="initial">
              Tiendas Asignadas: <b>{editor.stores.length}</b>
            </Typography>
          </Box>

          <StoresList
            selectedStoresIds={selectedStoresIds}
            draggableStoreId={draggableStoreId}
            editor={editor}
            classes={classes}
            column={"stores"}
          />
        </Card>
      )}
    </Draggable>
  );
};
export const EditorCard = typedMemo(EditorComponent);
