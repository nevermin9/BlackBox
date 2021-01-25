<template>
    <div>
        <h1>This is JOIN page!</h1>
        <router-link :to="{name: 'join.signin'}">_ to signin _</router-link>
        <router-link :to="{name: 'join.signup'}">_ to signup _</router-link>

        <div>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>