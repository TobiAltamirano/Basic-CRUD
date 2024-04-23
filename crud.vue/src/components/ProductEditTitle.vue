<template>
    <div>
      <label for="titulo" class="label-form">Modelo:</label>
      <input
        v-model="titulo"
        type="text"
        id="titulo"
        class="input-form"
        @input="validateTitulo"
      />
      <p v-if="errors.titulo" class="p-cardInvalid">{{ errors.titulo }}</p>
      <p v-else class="p-cardValid">
        El titulo ingresado es válido
      </p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            titulo: "",

            // Se crea un objeto que contenga la propiedad titulo previamente creada
            errors: {
                titulo: "",
            },
        };
    },

    methods: {
      validateTitulo() {
        this.errors.titulo = ""; // Reseteamos el mensaje de error
  
        if (!this.titulo) {
          this.errors.titulo = "El título es obligatorio.";
        } else if (this.titulo.length < 10 || this.titulo.length > 100) {
          this.errors.titulo = "El título debe contener entre 10 y 100 caracteres.";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(this.titulo)) {
          this.errors.titulo = "El título solo puede contener letras, espacios y números.";
        } else {
          // SI la validación es correcta:
          // Emitimos el evento con el valor actualizado
          this.$root.$emit('correct-title', this.titulo);
        }
      },
    },
};
</script>
  
<style>

</style>