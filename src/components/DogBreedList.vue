<template>
    <div class="list-group-item d-flex justify-content-between align-items-center horizontal-center">
        <div id="container">
            <DogBreed></DogBreed>
        </div>
    </div>
</template>

<script>
    import DogBreed from "./DogBreed";
    export default {
        name: "DogBreedList",
        components: {DogBreed},
    }
</script>
<style>
</style>