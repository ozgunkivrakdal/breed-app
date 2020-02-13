<template>
    <div style="text-align: center;"><span>{{this.$route.params.dogBreed.toUpperCase()}}</span>
        <div class="like-group">
            <button @click="incrementCounterLike" class="like">
                {{like}} | Likes
            </button>
            <button @click="incrementCounterDislike" class="dislike">
                {{dislike}} | Dislikes
            </button>
        </div>

        <gallery :images="breedImageList" :index="index" @close="index = null"></gallery>
        <div class="galery">
            <div class="image"
                 v-for="(image, imageIndex) in breedImageList"
                 :key="imageIndex"
                 @click="index = imageIndex"
                 :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
            ></div></div>

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
            incrementCounterLike () {
                this.$store.dispatch('incrementActionLike', 1)
            },
            incrementCounterDislike () {
                this.$store.dispatch('incrementActionDislike', 1)
            }
        },
        computed: {
            like () {
                return this.$store.getters.like
            },
            dislike () {
                return this.$store.getters.dislike
            },

        },
        created() {
            this.getRandomImages()
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
    div.like{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        font-size: 15px;
    }
    button.like{
        background-color: #34eb6e;
        color: white;
    }
    button.dislike{
        background-color: #b32546;
        color: white;
    }
    button.dislike:hover {
        background-color: #73061f;
        color: white;
    }
    button.like:hover {
        background-color: #49781f;
        color: white;
    }
    .galery{
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>