<template>
    <div class ="row">
        <gallery :images="breedImageList" :index="index" @close="index = null"></gallery>
        <div>
            <div class="row image"
                 v-for="(image, imageIndex) in breedImageList"
                 :key="imageIndex"
                 @click="index = imageIndex"
                 :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
            ></div> <div>
            <button v-for="(image, imageIndex) in breedImageList"
                    @click="incrementCounter"
                    :key="imageIndex"
            >increment counter</button>
        </div></div>

        <div>

        </div>
    </div>
</template>

<script>
    import DogBreedService from "../services/DogBreedService";
    import VueGallery from 'vue-gallery';

    export default {
        name: "DogBreedDetail",
        components: {
            'gallery': VueGallery
        },
        data() {
            return {
                breedImageList: [],
                index: null
            }
        },
        methods: {
            getRandomImages() {
                DogBreedService.getBreedImageUrl(this.$route.params.dogBreed.toLowerCase()).then(data => {
                    console.log(data.data.message);
                    this.breedImageList =  data.data.message.slice(0,15);
                });

            },
            onClick(i) {
                this.index = i;
            },
            incrementCounter () {
                this.$store.dispatch('inrementAction', 1)
            }
        },
        computed: {
            counter () {
                return this.$store.getters.counter
            }
        },
        created() {
            this.getRandomImages()
        }
    }
</script>

<style scoped>
</style>