<template>
    <div id="menu">
        <div>
            <h1 class="h1-menu">¡Bienvenido a tu Panel de Control!</h1>
            <h2>Aquí podrás verificar el estado de tus productos y clientes <br> de forma rápida y sencilla. ¡Administra tu negocio de manera eficiente!</h2>
            <div class="nav-footer">
                <router-link to="/clientes"><span>Clientes</span></router-link>
                <router-link to="/productos"><span>Productos</span></router-link>
            </div>
            <div class="container-router-view">
                <router-view></router-view>
            </div>
            <LogoutButton/>
        </div>
    </div>
</template>

<script>
import LogoutButton from './LogoutButton.vue';

export default {
    data() {
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        };
    },

    components: {
        LogoutButton,
    },

    created() {
        this.LoginValidation();
    },

    methods: {
        LoginValidation() {
            if (!this.isLoggedIn) {
                // Si el usuario no está logeado, se lo redirecciona al formulario de logeo.
                this.$router.push('/');
            }
        },
    },
};
</script>

<style>
#menu{
    color: var(--color3);
    font-family: 'Alata', sans-serif;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: var(--color1);
    height: auto;
}

.h1-menu{
    margin-top: 5rem;
    margin-bottom: 3rem;
}

/* Vue Router Styles */

.nav-footer{
    margin-top: 5rem;
    font-size: xx-large;
    display: flex;
    justify-content: space-evenly;
}

.nav-footer span{
    color: var(--color3);
}

.nav-footer span:hover{
    color: var(--color2);
    font-weight: bold;
}

.nav-footer a{
    text-decoration: none;
}

.nav-footer span:active{
    color: var(--color2);
}

</style>