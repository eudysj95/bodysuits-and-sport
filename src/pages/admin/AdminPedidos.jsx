const fakeOrders = [
  { id: 1, cliente: 'María García', fecha: '2026-07-28', estado: 'Pendiente', total: 60000 },
  { id: 2, cliente: 'Juan López', fecha: '2026-07-27', estado: 'Enviado', total: 90000 },
  { id: 3, cliente: 'Ana Martínez', fecha: '2026-07-25', estado: 'Entregado', total: 45000 },
]

const statusClass = {
  Pendiente: 'badge--pendiente',
  Enviado: 'badge--enviado',
  Entregado: 'badge--entregado',
}

function AdminPedidos() {
  return (
    <div>
      <h2 className="admin-title">Pedidos</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {fakeOrders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.cliente}</td>
                <td>{order.fecha}</td>
                <td>
                  <span className={`badge ${statusClass[order.estado]}`}>
                    {order.estado}
                  </span>
                </td>
                <td>${order.total.toLocaleString('es-AR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPedidos
