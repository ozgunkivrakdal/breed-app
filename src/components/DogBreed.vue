<template>
    <div class="active-pink-3 active-pink-4 mb-4">
        <input class="form-control" @input="isTyping = true" v-model ="searchQuery" type="text" placeholder="Search" aria-label="Search"/>
        <div v-for="breedModel in returnModel" :key="`breed-${breedModel}`">
            {{breedModel}} <dog-breed-image :breed-name ="`${breedModel}`"></dog-breed-image>
        </div>
    </div>

</template>

<script>
    import DogBreedService from "../services/DogBreedService";
    import DogBreedImage from "./DogBreedImage";
    import _ from 'lodash'
    export default {
        name: 'DogBreed',
        components: {DogBreedImage},
        data() {
            return {
                returnModel: [],
                searchQuery: "",
                isTyping: false,
                searchResult: [],
            }
        },
        methods: {
            refreshDogBreeds() {
                DogBreedService.getAllDogBreeds()
                    .then(data =>  {
                        this.returnModel = Object.keys(data.data.message)
                    });
            },
            searchBreed(searchQuery) {
                this.returnModel =  this.returnModel.filter(item => {
                    return item.toLowerCase().includes(searchQuery.toLowerCase())
                })
            }
        },
        watch: {
            searchQuery: _.debounce(function() {
                if(this.searchQuery.length>0){
                    this.isTyping = false;
                }
            }, 500),
            isTyping: function(value) {
                if (!value) {
                    this.searchBreed(this.searchQuery);
                }else{
                    this.refreshDogBreeds()
                }
            }
        },
        created(){
            this.refreshDogBreeds();
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>