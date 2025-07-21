export const findNotesInImportant = (important, id) => {
    if (!Array.isArray(important) || !id) return false;
    return important.some(note => note?.id === id);
};
