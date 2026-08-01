import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Offers from './pages/Offers.jsx'
import Categoria from './pages/Categoria.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminProductos from './pages/admin/AdminProductos.jsx'
import AdminProductoForm from './pages/admin/AdminProductoForm.jsx'
import AdminPedidos from './pages/admin/AdminPedidos.jsx'
import AdminClientes from './pages/admin/AdminClientes.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buscar" element={<Search />} />
      <Route path="/ofertas" element={<Offers />} />
      <Route path="/categoria" element={<Categoria />} />
      <Route path="/categoria/:categoria" element={<Categoria />} />
      <Route path="/producto/:id" element={<ProductDetail />} />

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/productos" element={<AdminProductos />} />
        <Route path="/admin/productos/nuevo" element={<AdminProductoForm />} />
        <Route path="/admin/productos/:id/editar" element={<AdminProductoForm />} />
        <Route path="/admin/pedidos" element={<AdminPedidos />} />
        <Route path="/admin/clientes" element={<AdminClientes />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
