export const findNotesInBin = (bin, id) => {
    if (!Array.isArray(bin) || !id) return false;
    return bin.some(note => note?.id === id);
};
