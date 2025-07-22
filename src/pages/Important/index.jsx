import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"
export const Important = () => {
    const { important } = useNotes();
    return (
        <>
            <Navbar />
            <main className="flex gap-6 p-6 bg-gray-100 min-h-screen items-start">
                <Sidebar />

                <div className="flex-1">
                   {important?.length > 0 ?(
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                            🗂️ Important Notes
                        </h3>
                    ):(
                        <>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                                🗂️ Important Notes
                            </h3>
                            <p className="text-gray-500">Nothing in the Important page.</p>
                        </>
                    )}
                    <div className="flex flex-wrap gap-6">
                        {
                            important?.length > 0 && important.map(note => {
                                if (!note) return null;

                                const { text, title, id, isPinned } = note;

                                return (
                                    <NotesCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        text={text}
                                        isPinned={isPinned}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}