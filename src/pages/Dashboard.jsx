import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold">Clientes</h2>
                    <p className="text-gray-600 text-sm">Total: 128</p>
                </div>
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold">Atendimentos</h2>
                    <p className="text-gray-600 text-sm">Hoje: 12</p>
                </div>
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold">Pendências</h2>
                    <p className="text-gray-600 text-sm">5 em aberto</p>
                </div>
                <div className="bg-white rounded-2xl shadow p-4">
                    <h2 className="text-xl font-semibold">Receita</h2>
                    <p className="text-gray-600 text-sm">R$ 7.200,00</p>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard