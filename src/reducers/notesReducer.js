import { v4 as uuid } from "uuid";
export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case "TITLE":
            return {
                ...state,
                title: payload
            }
        case "TEXT":
            return {
                ...state,
                text: payload
            }
        case "ADDNOTE":
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false }]
            }
        case "CLEAR_NOTE":
            return {
                ...state,
                title: "",
                text: ""
            }
        case "PIN":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)
            }
        case "UNPIN":
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note)
            }
        case "ADD_TO_ARCHIVE":
            return {
                ...state,
                archive: [...state.archive, state.notes.find(({ id }) => id === payload.id)],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return {
                ...state,
                notes: [...state.notes, state.archive.find(({ id }) => id === payload.id)],
                archive: state.archive.filter(({ id }) => id !== payload.id),

            }

        case "ADD_TO_IMPORTANT":
            return {
                ...state,
                important: [...state.important, state.notes.find(({ id }) => id === payload.id)],
            }
        case "REMOVE_FROM_IMPORTANT": {
            const noteToRemove = state.important.find(({ id }) => id === payload.id);
            if (!noteToRemove) {
                console.warn(`Note with id ${payload.id} not found in important`);
                return state;
            }

            return {
                ...state,
                important: state.important.filter(({ id }) => id !== payload.id)
            };
        }

        case "DELETE":
            return {
                ...state,
                bin: [...state.bin, state.notes.find(({ id }) => id === payload.id)],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            }
        case "BACKUP":
            return {
                ...state,
                notes: [...state.notes, state.bin.find(({ id }) => id === payload.id)],
                bin: state.bin.filter(({ id }) => id != payload.id)
            }
        default:
            return state;
    }
}