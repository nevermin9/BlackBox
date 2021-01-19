<template>
    <h1>Hello, People and {{ foo }}!</h1>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                foo: 'foo',
            }
        }
    });
</script>