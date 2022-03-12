type GetBackgroundColorArgs = {
  isSelected: boolean;
  isDragging: boolean;
  isGhosting: boolean;
};

export const getColor = ({
  isSelected,
  isGhosting,
}: {
  isSelected: boolean;
  isGhosting: boolean;
}): string => {
  if (isGhosting) {
    return "darkgrey";
  }
  if (isSelected) {
    return "#2f292f";
  }
  return "#23292f";
};

export const getBackgroundColor = ({
  isSelected,
  isGhosting,
  isDragging,
}: GetBackgroundColorArgs): string => {
  if (isGhosting) {
    return "#fafafa";
  }

  if (isSelected) {
    return "#dcebfe";
  }

  if (isDragging) {
    return "#dee";
  }

  return "#ffff";
};
