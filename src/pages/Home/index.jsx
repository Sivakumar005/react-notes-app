import { Navbar } from "../../components/Navbar"
import React from "react"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"

export const Home = () => {
    const { notesDispatch, title, text, notes,archive } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        })
    }
    const onAddClick = () => {
        notesDispatch({
            type: "ADDNOTE"
        })
        notesDispatch({
            type: "CLEAR_NOTE"
        })
    }

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned) || [];
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned) || [];

    console.log(archive);

    return (
        <>
            <Navbar />
            <main className="flex gap-4 p-4 bg-gray-100 min-h-screen items-start">
                <Sidebar />

                <div className="flex flex-col flex-1 items-center">
                    <div className="flex flex-col w-full max-w-md bg-white shadow-md rounded-md p-4 relative">
                        <input
                            className="border border-gray-400 rounded-t-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={title}
                            placeholder="Enter title"
                            onChange={onTitleChange}
                        />
                        <textarea
                            className="border border-t-0 border-gray-400 rounded-b-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            value={text}
                            placeholder="Enter text"
                            onChange={onTextChange}
                        />
                        <button
                            disabled={title.length === 0}
                            onClick={onAddClick}
                            className="absolute bottom-3 right-3 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full disabled:opacity-50"
                        >
                            <span className="material-icons-outlined">add</span>
                        </button>
                    </div>

                    {pinnedNotes.length > 0 && (
                        <div className="mt-10">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">📌 Pinned Notes</h3>
                            <div className="flex flex-wrap gap-4">
                                {pinnedNotes.map(({ text, title, id, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-10">
                        {pinnedNotes.length > 0 && otherNotes.length > 0 && (
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">📝 Other Notes</h3>
                        )}
                        <div className="flex flex-wrap gap-4">
                            {
                                otherNotes.map(({ text, title, id, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
