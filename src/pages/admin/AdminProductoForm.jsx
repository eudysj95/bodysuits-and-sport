import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../../data/products.js'

const ALL_SIZES = ['S', 'M', 'L', 'XL']

function AdminProductoForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [form, setForm] = useState({
    name: '',
    description: '',
    sizes: [],
    image: '',
    prices: { unidad: 30000, mayor: 20000 },
  })

  useEffect(() => {
    if (isEdit) {
      const product = products.find((p) => p.id === Number(id))
      if (product) {
        setForm({
          name: product.name,
          description: product.description,
          sizes: product.sizes,
          image: product.image,
          prices: product.prices,
        })
      }
    }
  }, [id, isEdit])

  const toggleSize = (size) => {
    setForm((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) {
      alert('El nombre es obligatorio')
      return
    }
    if (form.sizes.length === 0) {
      alert('Seleccioná al menos un talle')
      return
    }
    alert(isEdit ? 'Producto actualizado' : 'Producto guardado')
    navigate('/admin/productos')
  }

  const handleDelete = () => {
    if (window.confirm(`¿Eliminar "${form.name}"?`)) {
      alert(`Producto "${form.name}" eliminado (demo)`)
      navigate('/admin/productos')
    }
  }

  return (
    <div>
      <h2 className="admin-title">{isEdit ? 'Editar Producto' : 'Nuevo Producto'}</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label>Tallas</label>
          <div className="form-checkboxes">
            {ALL_SIZES.map((size) => (
              <label key={size} className="form-checkbox">
                <input
                  type="checkbox"
                  checked={form.sizes.includes(size)}
                  onChange={() => toggleSize(size)}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">URL de Imagen</label>
          <input
            id="image"
            type="url"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="https://..."
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priceunidad">Precio Unidad</label>
            <input
              id="priceunidad"
              type="number"
              value={form.prices.unidad}
              onChange={(e) =>
                setForm({ ...form, prices: { ...form.prices, unidad: Number(e.target.value) } })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="pricemayor">Precio Mayor</label>
            <input
              id="pricemayor"
              type="number"
              value={form.prices.mayor}
              onChange={(e) =>
                setForm({ ...form, prices: { ...form.prices, mayor: Number(e.target.value) } })
              }
            />
          </div>
        </div>
        <div className="admin-form__actions">
          <button type="submit" className="admin-btn admin-btn--primary">
            {isEdit ? 'Actualizar' : 'Guardar'}
          </button>
          <button
            type="button"
            className="admin-btn admin-btn--secondary"
            onClick={() => navigate('/admin/productos')}
          >
            Cancelar
          </button>
          {isEdit && (
            <button
              type="button"
              className="admin-btn admin-btn--delete"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default AdminProductoForm
