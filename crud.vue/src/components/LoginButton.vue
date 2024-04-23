<template>
    <div>
        <button class="button-form" @click="checkCredentials">
            <p>Ingresar</p>
        </button>
        <p v-if="showErrorMessage" class="error-message">
            {{ ErrorMessage }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            UserValidate: null,
            PasswordValidate: null,
            ErrorMessage: '', 
        };
    },

    mounted() {
        this.$root.$on('username', (data) => {
            this.UserValidate = data;
        });
        this.$root.$on('password', (data) => {
            this.PasswordValidate = data;
        })
    },


    computed: {
        canLogin() {
            return this.UserValidate == "admin@istra.dor" && this.PasswordValidate == 'supersecreta';
        },

        showErrorMessage() {
            return this.ErrorMessage === 'Nombre de usuario y/o contraseña incorrectos';
        }
    },

    methods: {
        checkCredentials() {
            if (this.canLogin) {
            // Redireccionamos a la ruta "/menu"
            this.$router.push('/menu'); 
            // Guardamos la información de la sesión en el localStorage
            localStorage.setItem('isLoggedIn', true);
            } else {
            // Mensaje de error
            this.ErrorMessage = 'Nombre de usuario y/o contraseña incorrectos';
            }
        },
    },
}
</script>

<style>
.button-form{
    height: 45px; 
    padding-left: 5px;
    padding-right: 5px;   
    margin-bottom: 20px; 
    margin-top: 10px;
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
</style>