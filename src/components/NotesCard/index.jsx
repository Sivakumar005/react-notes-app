import React, { useEffect } from "react"
import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInImportant } from "../../utils/findNotesInImportant";
import { findNotesInBin } from "../../utils/findNotesInBin";
export const NotesCard = ({ id, title, text, isPinned }) => {
    const { notesDispatch, archive, important, bin } = useNotes();

    const isNotesInArchive = findNotesInArchive(archive, id);
    const isNotesInImportant = findNotesInImportant(important, id);
    const isNotesInBin = findNotesInBin(bin, id);


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
        !isNotesInArchive ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }
    const onImportantClick = (id) => {
        !isNotesInImportant ?
            notesDispatch({
                type: "ADD_TO_IMPORTANT",
                payload: { id }
            }) : notesDispatch({
                type: "REMOVE_FROM_IMPORTANT",
                payload: { id }
            })
    }
    const onDeleteClick = (id) => {
        !isNotesInBin ?
            notesDispatch({
                type: "DELETE",
                payload: { id }
            }) : notesDispatch({
                type: "BACKUP",
                payload: { id }
            })
    }

    useEffect(() => {
        // console.log("important array", important);
        console.log("archive array", archive);
    }, [archive]);

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
                    <button onClick={() => onImportantClick(id)}>
                        {isNotesInImportant ? (
                            <span className="material-icons">
                                star
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                star
                            </span>)}
                    </button>
                    <button onClick={() => onArchiveClick(id)}>
                        {isNotesInArchive ? (
                            <span className="material-symbols-outlined">
                                unarchive
                            </span>
                        ) : (
                            <span className="material-icons-outlined">
                                archive
                            </span>
                        )}
                    </button>
                    <button onClick={() => onDeleteClick(id)}>
                        {isNotesInBin ? (
                            <span className="material-symbols-outlined">
                                backup
                            </span>
                        ) : (
                            <span className="material-icons-outlined">
                                delete
                            </span>
                        )}
                    </button>

                </div>
            </div>
        </div>
    )
}