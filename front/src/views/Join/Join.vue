<template>
    <section>
        <h1>This is JOIN page</h1>
        <router-link :to="{ name: 'signin' }">SignIn</router-link>
        <router-link :to="{ name: 'signup' }">SignUp</router-link>
    
        <div>
            <router-view />
        </div>
    </section>
</template>