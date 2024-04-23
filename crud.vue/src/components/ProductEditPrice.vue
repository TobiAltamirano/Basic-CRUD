<template>
    <div>
      <label for="precio" class="label-form">Precio (ARS):</label>
      <input
        v-model.number="precio"
        type="number"
        step="0.01"
        id="precio"
        class="input-form"
        @input="validatePrecio"
      />
      <p v-if="errors.precio" class="p-cardInvalid">{{ errors.precio }}</p>
      <p v-else class="p-cardValid">
        El precio ingresado es válido
      </p>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      precio: "",

      // Se crea un objeto que contenga la propiedad precio previamente creada
      errors: {
        precio: "",
      },
    };
  },
  
  methods: {
    validatePrecio() {
      this.errors.precio = ""; // Reseteamos el mensaje de error
  
      if (this.precio === "") {
        this.errors.precio = "El precio es obligatorio.";
      } else if (isNaN(this.precio)) {
        this.errors.precio = "El precio debe ser un número válido.";
      } else if (this.precio < 0) {
        this.errors.precio = "El precio no puede ser menor a 0.";
      } else {
        // Agregar el decimal y "ARS" al precio cuando el usuario escribe
        this.precio = `${parseFloat(this.precio).toFixed(2)} ARS`;

        // SI la validación es correcta:
        // Emitimos el evento con el valor actualizado
        this.$root.$emit('correct-price', this.precio);
      }
    },
  },
};
</script>
  
<style>

</style> 