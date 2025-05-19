export default function Header({ toggleSidebar }) {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-600" onClick={toggleSidebar}>
                    ☰
                </button>
                <h2 className="text-lg font-semibold">Painel de Controle</h2>
            </div>
            <span className="text-gray-600">Olá, Plínio 👋</span>
        </header>
    );
}
