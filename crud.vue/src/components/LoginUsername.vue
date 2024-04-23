<template>
  <div>
    <label class="label-form">Usuario</label>
    <input
      class="input-form"
      v-model="username"
      type="text"
      placeholder="Nombre de usuario"
      @input="autent"
      :class="[validate ? 'input-valid' : 'input-invalid']"
    />
    <p v-if="validate" class="p-cardValid">
      El nombre de usuario es válido
    </p>

    <p v-else class="p-cardInvalid">
      El nombre de usuario es incorrecto. Debe tener entre 5 y 20 caracteres y contener el símbolo "@".
    </p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        username: "",
    };
  },
  
  computed: {
    validate() {
      const validation = /^.{5,20}@.*$/;
      return validation.test(this.username);
    },
  },

  methods: {
    autent() {
      this.$root.$emit('username', this.username);
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