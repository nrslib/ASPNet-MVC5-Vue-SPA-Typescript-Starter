<template>
    <div>
        <h2>NextIndex</h2>
        <router-link :to="{name: 'top-index'}">Top</router-link>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class NextIndexComponent extends Vue {
    }
</script>
