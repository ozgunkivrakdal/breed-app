<template>
    <div>
        <router-link :to="`/detail/${breedName}`"><img :src="`${image}`" class="img-fluid"></router-link>
    </div>
</template>

<script>
    import DogBreedService from "../services/DogBreedService";
    export default {
        name: "DogBreedImage",
        props:['breedName'],
        data() {
            return {
                image: ''
            }
        },
        methods: {
            getBreedImageUrl() {
                DogBreedService.getBreedRandomImageUrl(this.breedName).then(data => {
                    this.image =  data.data.message;
                });
            },
        },
        created() {
            this.getBreedImageUrl()
        }
    }
</script>

<style scoped>
    .img-fluid{
        max-width: 500px;
        height : auto;
        flex:auto;
    }
</style>