<template>
  <div id="products-page">
    <div class="header-container">
      <h1 class="products-h1">Listado de Productos</h1>
      <input v-model="searchText" class="input-products" type="text" placeholder="Buscar por modelo"/>
    </div>
    <div class="products-container">
      <div class="products-card" v-for="producto in filteredProductos" :key="producto.id">
        <router-link :to="`/productos/${producto.id}/editar`" class="router-link-styles">
          <img :src="(producto.foto)" class="card-img-top-products" alt="Foto Producto" />
          <div>
            <div class="info-container">
              <h2 v-html="highlightText(producto.nombre)" class="h2-products"></h2>
              <h2 v-html="highlightText(producto.modelo)" class="h2-products"></h2>
              <h3 class="h3-products">{{ producto.precio }}</h3>
            </div>
            <p :class="stockColor(producto.stock)">Stock: {{ producto.stock }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import productosData from "../resources/productos.json";

export default {
  data() {
    return {
      searchText: "", // Dato para almacenar el texto ingresado en el campo de búsqueda de productos.
      productos: [], // Inicializamos el arreglo productos como uno vacio
    };
  },

  computed: {
    filteredProductos() {
      const searchTextLower = this.searchText.toLowerCase().trim();
      return this.productos.filter(
        (producto) => producto.modelo.toLowerCase().startsWith(searchTextLower)
      );
    },
  },

  methods: {
    // Resaltar las partes coincidentes en otro color.
    highlightText(text) {
      // Si el campo de texto está vacío, no se modifica nada.
      if (!this.searchText) return text;

      // Se crea una expresión regular a partir del texto ingresado en el campo de búsqueda (searchText), y se utiliza 'gi', lo que significa que será global e insensible a mayúsculas y minúsculas.
      const searchTextRegex = new RegExp(this.searchText, "gi");
      // Se utiliza el método .replace, para reemplazar las coincidencias por un <span> con su respectiva clase CSS.
      return text.replace(searchTextRegex, (match) => `<span class="span-text">${match}</span>`);
    },

    // Cambiar el color del texto según el stock del producto
    stockColor(stock) {
      if (stock === 0) {
        return "stock-red";
      } else if (stock < 4) {
        return "stock-yellow";
      } else {
        return "stock-green";
      }
    },

    initializeProductos() {
      const storedProductos = localStorage.getItem("productos");
      if (storedProductos) {
        // Si los productos existen en el localStorage, los parseamos y los asignamos a la propiedad data
        this.productos = JSON.parse(storedProductos);
      } else {
        // Si los productos no existen en el localStorage, los inicializamos con los datos predeterminados del archivo JSON y los almacenamos en el localStorage
        this.productos = productosData.products;
        localStorage.setItem("productos", JSON.stringify(this.productos));
      }
    },

    // Método que se ejecuta cuando se vuelve a la lista de productos desde el componente de edición.
    actualizarProductos() {
      // Actualizar la lista de productos con los datos del localStorage
      const storedProductos = localStorage.getItem("productos");
      if (storedProductos) {
        this.productos = JSON.parse(storedProductos);
      }
    },
  },

  created() {
    // Llamamos al método initializeProductos cuando el componente es creado
    this.initializeProductos();
  },
};
</script>

<style>
.input-products{
  width: 300px;
  height: 35px;
  border-radius: 40px;
  border-color: none !important;
  margin-bottom: 3rem;
}

.products-container {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 2rem;
}
  
.products-card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}

.products-card:hover {
  background-color: var(--color3);
  color: var(--color2);
}

.products-card:hover h2{
  color: var(--color2);
}

.products-card:hover h3{
  color: var(--color2);
}

.info-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.products-h1{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.span-text{
  color: var(--color2);
}

.card-img-top-products{
  margin-top: 1rem;
  height: 190px !important;
  width: 250px !important;
  margin-bottom: 1rem;
  border-radius: none !important;
}

.h2-products{
  color: var(--color3);
}

.h3-products{
  color: var(--color3);
}

/* Estilos para el texto del stock */

.stock-red {
  color: #be0202;
}

.stock-yellow {
  color: yellow;
}

.stock-green {
  color: rgb(4, 226, 4);
}

/* Estilos Router Link */

.router-link-styles{
  text-decoration: none;
}

</style>