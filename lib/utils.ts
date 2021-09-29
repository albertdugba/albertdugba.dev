export const truncateTrack = (str: string, maxlength: number) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
};

export const layoutBgImageVariant = {};
export const layoutBgImageItem = {};
