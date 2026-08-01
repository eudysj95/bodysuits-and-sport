const fakeClients = [
  { nombre: 'María García', email: 'maria@email.com', telefono: '+54 11 1234-5678', pedidos: 3 },
  { nombre: 'Juan López', email: 'juan@email.com', telefono: '+54 11 2345-6789', pedidos: 1 },
  { nombre: 'Ana Martínez', email: 'ana@email.com', telefono: '+54 11 3456-7890', pedidos: 5 },
]

function AdminClientes() {
  return (
    <div>
      <h2 className="admin-title">Clientes</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Pedidos</th>
            </tr>
          </thead>
          <tbody>
            {fakeClients.map((client, i) => (
              <tr key={i}>
                <td>{client.nombre}</td>
                <td>{client.email}</td>
                <td>{client.telefono}</td>
                <td>{client.pedidos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClientes
