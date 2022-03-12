import { useCallback, useEffect, useState } from "react";

export const useSelectedItems = () => {
  const [selectedStoresIds, setSelectedStoresIds] = useState<string[]>([]);

  const onWindowClick = useCallback((e) => {
    if (e.defaultPrevented) {
      return;
    }

    setSelectedStoresIds([]);
  }, []);

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

  return {
    selectedStoresIds,
    setSelectedStoresIds,
  };
};
