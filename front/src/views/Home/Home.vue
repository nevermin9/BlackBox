<template>
    <h1>This is {{reactiveArr[0]}} page </h1>
    <table>
        <tbody>
            <tr>
                <td>
                    {{ count }}
                </td>
                <td>
                    {{ twiceCounter }}
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="upCount">Up Count</button>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, watch } from 'vue';
    export default defineComponent({
        props: {
            foo: String,
            number: Number,
            obj: Object,
        },
        emits: {
            'submit': (event: Event) => {
                if (event) {
                    console.log('Submit submited')
                }
            }
        },
        setup(props) {
            const reactiveArr: Record<string, any> = ref<[]>([]);
            reactiveArr.value.push('home')

            const count = ref(0)
            watch(count, (val, oldVal) => {
                console.log('New value of counter is ', val);
                console.log('Old value of counter is ', oldVal);
            });

            const twiceCounter = computed(() => count.value * 2);
            
            return {
                reactiveArr,
                count,
                twiceCounter
            }
        },
        methods: {
            upCount(e: Event) {
                console.log(e);
                this.$emit('submit', e);
                ++this.count
            }
        },

    })
</script>