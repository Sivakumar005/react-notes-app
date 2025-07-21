import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"

export const Bin = () => {
    const { bin } = useNotes();
    return (
        <>
            <Navbar />
            <main className="flex gap-6 p-6 bg-gray-100 min-h-screen items-start">
                <Sidebar />

                <div className="flex-1">
                    {bin?.length > 0 ? (
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                            🗂️ Deleted Notes
                        </h3>
                    ) : (
                        <>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                                🗂️ Deleted Notes
                            </h3>
                            <p className="text-gray-500">Nothing in the bin.</p>
                        </>
                    )}

                    <div className="flex flex-wrap gap-6">
                        {Array.isArray(bin) &&
                            bin?.filter(note => note)
                                .map(({ text, title, id, isPinned }) => (
                                    <NotesCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        text={text}
                                        isPinned={isPinned}
                                    />
                                ))
                        }

                    </div>
                </div>
            </main>
        </>
    )
}