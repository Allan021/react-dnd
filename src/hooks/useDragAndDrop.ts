import { useCallback, useEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { exampleData } from "../data/example";

export const useDragAndDrop = () => {
  const [editorsData, setEditorsData] = useState(exampleData);
  const [selectedStoresIds, setSelectedStoresIds] = useState<number[]>([]);
  const onWindowClick = useCallback((e) => {
    if (e.defaultPrevented) {
      return;
    }

    setSelectedStoresIds([]);
  }, []);

  /**
   * On window key down
   */
  const onWindowKeyDown = useCallback((e) => {
    if (e.defaultPrevented) {
      return;
    }

    if (e.key === "Escape") {
      setSelectedStoresIds([]);
    }
  }, []);

  const onWindowTouchEnd = useCallback((e) => {
    if (e.defaultPrevented) {
      return;
    }

    setSelectedStoresIds([]);
  }, []);

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    window.addEventListener("keydown", onWindowKeyDown);
    window.addEventListener("touchend", onWindowTouchEnd);

    return () => {
      window.removeEventListener("click", onWindowClick);
      window.removeEventListener("keydown", onWindowKeyDown);
      window.removeEventListener("touchend", onWindowTouchEnd);
    };
  }, [onWindowClick, onWindowKeyDown, onWindowTouchEnd]);

  const onDragEnd = useCallback((result: DropResult) => {}, []);

  return {
    onDragEnd,
    onWindowClick,
    onWindowKeyDown,
    onWindowTouchEnd,
    editorsData,
  };
};
