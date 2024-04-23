<template>
    <div id="editPage">
      <router-link to="/productos" class="back-button"> ← Volver a Productos</router-link>
      <div class="container-login">
        <div>
          <h1 class="h1-form">Editar Producto</h1>
          <h2>Zapatillas Nike</h2>
          <form>
            <ProductEditTitle/>
            <ProductEditPrice/>
            <ProductEditStock/>
            <button @click="guardarCambios()" class="button-form"><p>Guardar Cambios</p></button>
            <p v-if="showErrorMessage" class="error-message">
                {{ ErrorMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
</template>
  
<script>
import ProductEditTitle from './ProductEditTitle.vue';
import ProductEditPrice from './ProductEditPrice.vue';
import ProductEditStock from './ProductEditStock.vue';
  
export default {
    components: {
      ProductEditTitle,
      ProductEditPrice,
      ProductEditStock
    },
  
    data() {
      return {
        modelo: null,
        precio: null,
        stock: null,
        ErrorMessage: '',
      };
    },
  
    mounted() {
      this.$root.$on('correct-title', (data) => {
        this.modelo = data;
      });
      this.$root.$on('correct-price', (data) => {
        this.precio = data;
      });
      this.$root.$on('correct-stock', (data) => {
        this.stock = data;
      })
    },
  
    computed: {
      correctEdit() {
        return this.modelo && this.precio && this.stock;
      },

      showErrorMessage() {
        return this.ErrorMessage === 'Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente.';
      }
    },
  
    methods: {
      guardarCambios() {
        if (this.correctEdit) {
          const productId = this.$route.params.id; // Obtener el ID del producto desde la ruta
          let productos = JSON.parse(localStorage.getItem('productos')) || [];

          // Buscar el índice del producto correspondiente en la lista
          const index = productos.findIndex((producto) => producto.id === productId);

          if (index !== -1) {
            // Actualizar los datos del producto
            productos[index].modelo = this.modelo;
            productos[index].precio = this.precio;
            productos[index].stock = this.stock;

            // Guardar la lista actualizada de productos en el localStorage
            localStorage.setItem('productos', JSON.stringify(productos));
            // Redireccionamos a la ruta "/productos"
            this.$router.push('/productos');
          } else {
            this.ErrorMessage = 'Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente.';
          }
        } else {
          this.ErrorMessage = 'Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente.';
        }
      },
    }
};
</script>
  
<style>

#editPage{
  font-family: 'Alata', sans-serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: auto;
  background-color: var(--color1);
  height: 100vh;
}

.container-login{
    height: 700px !important;
}

.button-form{
    height: 45px; 
    padding-left: 5px;
    padding-right: 5px;   
    margin-top: 20px;
    text-transform: uppercase;
    background-color: var(--color1); 
    border-color: var(--color1);
    border-style: solid;
    border-radius: 10px;
    width: 90%;  
    cursor: pointer;
    font-family: 'Alata', sans-serif;
}

.button-form:hover{
    background-color: var(--color3);
}

.button-form p{
    color: var(--color3) !important;
    font-weight: bold;
    font-size: medium;
    letter-spacing: 0.05rem;
    margin-bottom: 0 !important;
}

.button-form p:hover{
    color: var(--color4) !important;
}

.button-form span{
    color: var(--color1) !important; 
}

.error-message{
    color: #be0202;
    font-size: 14px;
    padding: 5px 0;
}

.back-button{
  color: var(--color3);
  text-decoration: none;
  font-size: x-large;
  position: absolute;
  top: 20px;
  left: 20px;
}

.back-button:hover{
  color: var(--color2);
}
</style>  