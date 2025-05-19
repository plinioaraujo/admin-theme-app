export default function Sidebar({ isOpen, setIsOpen }) {
    return (
        <div
            className={`fixed md:static md:h-full top-0 left-0 h-full w-64 bg-white shadow-lg p-4 z-40 transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">MeuAdmin</h1>
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>
            </div>
            <nav className="space-y-2">
                <a href="#" className="block text-gray-700 hover:text-blue-500">Dashboard</a>
                <a href="#" className="block text-gray-700 hover:text-blue-500">Clientes</a>
                <a href="#" className="block text-gray-700 hover:text-blue-500">Configurações</a>
            </nav>
        </div>
    );
}