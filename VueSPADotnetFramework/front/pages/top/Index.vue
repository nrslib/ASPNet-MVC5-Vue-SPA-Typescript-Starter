<template>
    <div>
        <h2>TopIndex</h2>
        <router-link :to="{name: 'next-index'}">Next</router-link>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class TopIndexComponent extends Vue {
    }
</script>
