import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Draggable, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Store, Editor } from "../../data/example";
import { useStyles } from "./styles";
import styled from "@emotion/styled";

import { typedMemo } from "../../utils/typedMemo";
import { grid } from "../../constants/generics";

import { getBackgroundColor, getColor } from "../../utils/styles";

const CardContainer = styled.div`
  background-color: ${(props: {
    isSelected: boolean;
    isDragging: boolean;
    isGhosting: boolean;
  }) => getBackgroundColor(props)};
  color: ${(props) => getColor(props)};
  padding: 0.5rem 0.4rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #e0e0e0;
  transition: ${(props) =>
    props.isSelected ? "none" : "background-color .3s ease-in-out"};
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#ccebfe" : "#eee")};
  }
  position: relative;
  &:focus {
    outline: none;
    border-color: "red";
  }
`;

const size: number = 30;

const SelectionCount = styled.div`
  right: -${grid}px;
  top: -${grid}px;
  color: #fefefe;
  background: #3951b2;
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  line-height: ${size}px;
  position: absolute;
  text-align: center;
  font-size: 0.8rem;
`;

interface Props {
  store: Store;
  index: number;
  editor: Editor;
  isSelected: boolean;
  isGhosting: boolean;
  selectionCount: number;
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    storeId: string
  ) => void;
  onTouchEnd: (e: any, storeId: string) => void;
  onKeyDown: (
    e: React.KeyboardEvent<HTMLDivElement>,
    snapshot: DraggableStateSnapshot,
    storeId: string
  ) => void;
  handleDelete: (storeId: string, editor: Editor) => void;
}

const StoreItem = ({
  store,
  index,
  editor,
  isSelected,
  isGhosting,
  selectionCount,
  onKeyDown,
  onTouchEnd,
  onClick,
  handleDelete,
}: Props) => {
  const classes = useStyles();

  return (
    <Draggable
      draggableId={store.identifier}
      index={index}
      key={store.identifier}
    >
      {(provided, snapshot) => {
        return (
          <CardContainer
            tabIndex={1}
            isDragging={snapshot.isDragging}
            isSelected={isSelected}
            isGhosting={isGhosting}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onKeyDown={(event) => onKeyDown(event, snapshot, store.identifier)}
            onClick={(e) => onClick(e, store.identifier)}
            onTouchEnd={(e) => onTouchEnd(e, store.identifier)}
          >
            <img
              src={store.brand_logo}
              alt={"imagen"}
              className={classes.cardMedia}
            />

            <Typography variant="body2" className={classes.text}>
              {store.name}
            </Typography>

            <IconButton
              color="primary"
              style={{ padding: 10 }}
              onClick={(e) => handleDelete(store.identifier, editor)}
            >
              <Close
                color="primary"
                fontSize="small"
                style={{ fontSize: 12 }}
              />
            </IconButton>
            {snapshot.isDragging && selectionCount > 1 ? (
              <SelectionCount>{selectionCount}</SelectionCount>
            ) : null}
          </CardContainer>
        );
      }}
    </Draggable>
  );
};

export const CardItem = typedMemo(StoreItem);
