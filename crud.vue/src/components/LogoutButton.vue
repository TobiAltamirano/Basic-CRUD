<template>
    <div id="logout">
        <button class="button-menu" @click="logout">
            <p>Cerrar sesión</p>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            // Eliminamos la sesión creada en localstorage
            localStorage.removeItem('isLoggedIn');
            // Devolvemos al usuario al logeo principal
            this.$router.push('/');
        }
    }
        
}
</script>

<style>
#logout{
    margin-top: 5rem;
}

.button-menu{
    height: 45px; 
    padding-left: 5px;
    padding-right: 5px;   
    margin-bottom: 20px; 
    margin-top: 10px;
    text-transform: uppercase;
    background-color: var(--color3); 
    border-color: var(--color3);
    border-style: solid;
    border-radius: 10px;
    width: 90%;  
    cursor: pointer;
    font-family: 'Alata', sans-serif;
}

.button-menu:hover{
    background-color: var(--color1);
}

.button-menu p{
    color: black !important;
    font-weight: bold;
    font-size: medium;
    letter-spacing: 0.05rem;
    margin-bottom: 0 !important;
}

.button-menu p:hover{
    color: var(--color3) !important;
}

.button-menu span{
    color: var(--color1) !important; 
}
</style>