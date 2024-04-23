// Componente presentacional de logeo
<template>
    <div id="login">
        <div class="container-login">
            <div>
                <h1 class="h1-form">Inicia sesión para continuar</h1>
                <form id="contact-form">
                    <LoginUsername/>
                    <LoginPassword/>
                    <LoginButton/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginUsername from './LoginUsername.vue';
import LoginPassword from './LoginPassword.vue';
import LoginButton from './LoginButton.vue';

export default {
    components: {
        LoginUsername,
        LoginPassword,
        LoginButton
    }
}
</script>

<style >

#login{
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color2);
    color: var(--color3);
    width: 500px;
    height: 600px;
    border-radius: 1rem;
}

.contact-form{
    width: 40vw;
    height: auto;
    margin: 80px auto;
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    background-color: var(--color3);
    padding-left: 30px;
    border: 2px var(--color1) solid;
}

.h1-form{
    font-size: 39px;
    padding-bottom: 20px;
    color: var(--color3);
}

/* Validaciones globales */

.p-cardValid{
    font-size: smaller;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    color: green;
}

.p-cardInvalid{
    font-size: smaller;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    color: #be0202;
}

.input-valid{
    color: green !important;
    border: 1px solid green !important; 
}

.input-invalid{
    color: #be0202 !important;
    border: 1px solid #be0202 !important;
}

</style>