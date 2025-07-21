export const findNotesInArchive = (archives, note) => {
    if (!Array.isArray(archives) || !note?.id) return false;
    return archives.some(item => item?.id === note.id);
};
