import React from "react"
import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../utils/findNotesInArchive";
export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive } = useNotes();

    const isNotesInArchive = findNotesInArchive(archive, id);

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: "PIN",
            payload: { id }
        }) : notesDispatch({
            type: "UNPIN",
            payload: { id }
        })
    }
    const onArchiveClick = (id) => {
        !isNotesInArchive ?
            notesDispatch({
                type: "ADD_TO_ARCHIVE",
                payload: { id }
            }) : notesDispatch({
                type: "REMOVE_FROM_ARCHIVE",
                payload: { id }
            })
    }



    return (
        <div className="border-2 border-neutral-500 w-[300px] p-3 rounded-md" >
            <div className="flex justify-between border-b border-neutral-500">
                <p>{title}</p>
                {
                    !isNotesInArchive ? <button onClick={() => onPinClick(id)}>
                        <span className={isPinned ? "material-icons" : "material-icons-outlined"}>
                            push_pin
                        </span>
                    </button> : <></>
                }

            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto flex gap-3 ">
                    <button onClick={() => onArchiveClick(id)}>
                        <span className={isNotesInArchive ? "material-icons" : "material-icons-outlined"}>
                            archive
                        </span>
                    </button>
                    <button>
                        <span className="material-icons-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}