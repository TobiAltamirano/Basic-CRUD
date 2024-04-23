<template>
    <div>
      <label for="stock" class="label-form">Stock:</label>
      <input
        v-model.number="stock"
        type="number"
        id="stock"
        class="input-form"
        @input="validateStock"
      />
      <p v-if="errors.stock" class="p-cardInvalid">{{ errors.stock }}</p>
      <p v-else class="p-cardValid">
        El stock ingresado es válido
      </p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            stock: null,
            
            // Se crea un objeto que contenga la propiedad stock previamente creada
            errors: {
                stock: "",
            },
        };
    },

    methods: {
      validateStock() {
        this.errors.stock = ""; // Reseteamos el mensaje de error
  
        if (this.stock === null) {
          this.errors.stock = "El stock es obligatorio.";
        } else if (!Number.isInteger(this.stock)) {
          this.errors.stock = "El stock debe ser un número entero.";
        } else if (this.stock < 0) {
          this.errors.stock = "El stock no puede ser menor a 0.";
        } else {
          // SI la validación es correcta:
          // Emitimos el evento con el valor actualizado
          this.$root.$emit('correct-stock', this.stock);
        }
      },
    },
};
</script>
  
<style>
    
</style>