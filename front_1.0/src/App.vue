<template>
    <Layout>
        <template #navigation-section>
            navigation section
        </template>

        <template #main-section>
            <router-view />
        </template>

        <template #modal-section>
            modal-section
        </template>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Layout from '@/components/Layout/Layout.vue';

    @Component({
        components: {
            Layout,
        }
    })
    export default class App extends Vue {

    }
</script>