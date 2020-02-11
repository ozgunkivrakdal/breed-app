<template>
    <div>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <DogBreed></DogBreed>
        </li>
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