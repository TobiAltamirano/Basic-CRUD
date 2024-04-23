<template>
    <div>
      <label class="label-form">Contraseña</label>
      <input
        class="input-form"
        v-model="password"
        type="password"
        placeholder="Contraseña"
        @input="autent"
        :class="[validate ? 'input-valid' : 'input-invalid']"
      />
      <p v-if="validate" class="p-cardValid">
        La contraseña es válido
      </p>
  
      <p v-else class="p-cardInvalid">
        La contraseña es inválida. Debe tener entre 5 y 20 caracteres.
      </p>
    </div>
  </template>
  
  <script>
  export default {
      data() {
        return {
          password: "",
      };
    },
    
    computed: {
      validate() {
        const length = this.password.length;
        return length >= 5 && length <= 20;
      },
    },

    methods: {
    autent() {
        this.$root.$emit('password', this.password);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.input-form{
    background-color: #fbfbfb;
    width: 90%; 
    height: 40px; 
    border-radius: 5px;  
    border-style: solid; 
    border-width: 1px; 
    border-color: var(--color1); 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
}

.label-form{
    display: block; 
    float: center;  
}
</style>