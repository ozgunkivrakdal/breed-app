<template>
    <div>
        <router-link :to="`/detail/${breedName}`"><img :src="`${image}`" class="image" :style="{ width: '300px', height: '200px'}"></router-link>
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
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
    }
</style>