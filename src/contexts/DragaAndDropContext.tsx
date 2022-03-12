import { createContext } from "react";
import { DraggableStateSnapshot, DropResult } from "react-beautiful-dnd";
import { Editor, ExampleData } from "../data/example";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

export type Checkboxes = { [key: string]: boolean };

export interface IDragAndDropState {
  editorsData: ExampleData;
  selectedStoresIds: string[];
  draggableStoreId: string | null;
  checkBoxes: Checkboxes;
  handleCheckoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDragEnd: (result: DropResult) => void;
  onBeforeCapture: (start: { draggableId: string; mode: any }) => void;
  toggleSelection: (storeId: string) => void;
  toggleSelectionInGroup: (storeId: string) => void;
  multiSelectTo: (storeId: string) => void;
  handleSelectAll: (editor: Editor, isSelected: boolean) => void;
  storeHandlers: {
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
  };
}
export const DragaAndDropContext = createContext({} as IDragAndDropState);
export const DragAndDropProvider = ({ children }: any) => {
  const {
    onDragEnd,
    editorsData,
    draggableStoreId,
    selectedStoresIds,
    onBeforeCapture,
    toggleSelection,
    toggleSelectionInGroup,
    multiSelectTo,
    onClick,
    onTouchEnd,
    onKeyDown,
    handleSelectAll,
    handleDelete,
    handleCheckoxChange,
    checkBoxes,
  } = useDragAndDrop();

  return (
    <DragaAndDropContext.Provider
      value={{
        onDragEnd,
        editorsData,
        draggableStoreId,
        selectedStoresIds,
        onBeforeCapture,
        toggleSelection,
        toggleSelectionInGroup,
        multiSelectTo,
        handleSelectAll,
        checkBoxes,
        handleCheckoxChange,
        storeHandlers: {
          onClick,
          onTouchEnd,
          onKeyDown,
          handleDelete,
        },
      }}
    >
      {children}
    </DragaAndDropContext.Provider>
  );
};
