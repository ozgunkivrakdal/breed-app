<template>
    <div>
        <img :src="`${image}`" class="img-fluid"/>
    </div>
</template>

<script>
    import DogBreedService from "../services/DogBreedService";
    export default {
        name: "DogBreedImage",
        props:['breedName'],
        data() {
            return {
                image: '',
            }
        },
        methods: {
            getBreedImageUrl() {
                  DogBreedService.getBreedImageUrl(this.breedName).then(data => {
                    this.image =  data.data.message;
                });
            }
        },
        created() {
           this.getBreedImageUrl()
        }
    }


</script>

<style scoped>

</style>