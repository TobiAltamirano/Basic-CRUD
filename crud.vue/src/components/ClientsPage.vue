<template>
  <div id="clients-page">
    <div class="header-container">
      <h1 class="clients-h1">Listado de clientes</h1>
      <input v-model="searchText" class="input-clients" type="text" placeholder="Buscar por nombre o apellido" />
    </div>
    <div class="clientes-container">
      <div class="cliente-card" v-for="cliente in filteredClientes" :key="cliente.id">
        <img :src="cliente.foto" class="card-img-top-clients" alt="Foto Cliente"/>
        <div>
          <div class="names-container">
            <h2 v-html="highlightText(cliente.nombre)"></h2>
            <h2 v-html="highlightText(cliente.apellido)"></h2>
          </div>
          <p>Fecha de última compra: <br> {{ cliente.fechaUltimaCompra }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clientesData from "../resources/clientes.json";

export default {
  data() {
    return {
      clientes: clientesData.clients,
      searchText: "", // Dato para almacenar el texto ingresado en el campo de búsqueda
    };
  },

  computed: {
    // Filtrar clientes según el texto ingresado en el campo de búsqueda
    filteredClientes() {
      const searchTextLower = this.searchText.toLowerCase().trim();
      return this.clientes.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().startsWith(searchTextLower) ||
          cliente.apellido.toLowerCase().startsWith(searchTextLower)
      );
    },
  },

  methods: {
    // Resaltar las partes coincidentes en otro color.
    highlightText(text) {
      // Si el campo de texto está vacio, no se modifica nada.
      if (!this.searchText) return text;

      // Se crea una expresion regular a partir del texto ingresado en el campo de busqueda (searchText), y se utiliza 'gi', lo que significa que será global e insensible a mayusculas y minusculas.
      const searchTextRegex = new RegExp(this.searchText, "gi");
      // Se utiliza el metodo .replace, para reemplazar las coincidencias por un <span> con su respectiva clase CSS.
      return text.replace(searchTextRegex, (match) => `<span class="span-text">${match}</span>`);
    },
  },
};
</script>
  
<style>
.input-clients{
  width: 300px;
  height: 35px;
  border-radius: 40px;
  border-color: none !important;
  margin-bottom: 3rem;
}

.clientes-container {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 2rem;
}
  
.cliente-card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.names-container{
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.clients-h1{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.span-text{
  color: var(--color2);
}

.card-img-top-clients{
  margin-top: 1rem;
  border-radius: 50%;
  height: 200px;
  width: 250px;
  margin-bottom: 1rem;
}
</style>