import { IconButton, Paper, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import clsx from "clsx";
import { Draggable } from "react-beautiful-dnd";
import { Store } from "../../data/example";
import { useStyles } from "./styles";

interface Props {
  store: Store;
  index: number;
}

export const CardItem = ({ store, index }: Props) => {
  const classes = useStyles();

  return (
    <Draggable
      draggableId={store.identifier}
      index={index}
      key={store.identifier}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper
            elevation={1}
            className={clsx(classes.cardItem, {
              [classes.cardItemActve]: snapshot.isDragging,
            })}
          >
            <img
              src={store.brand_logo}
              alt={"imagen"}
              className={classes.cardMedia}
            />

            <Typography variant="body2" className={classes.text}>
              {store.name}
            </Typography>

            <IconButton color="primary" style={{ padding: 10 }}>
              <Close
                color="primary"
                fontSize="small"
                style={{ fontSize: 12 }}
              />
            </IconButton>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};
