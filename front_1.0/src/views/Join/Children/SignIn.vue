<template>
    <div>
        this is draw window
        <DrawWindow />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component';
    import DrawWindow from '@/components/DrawWindow/DrawWindow.vue';

    @Component({
        components: {
            DrawWindow
        }
    })
    export default class SignIn extends Vue {}
</script>