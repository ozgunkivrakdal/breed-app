<template>
    <div id="container">
        <div>
            <input class="form-control" @input="isTyping = true" v-model ="searchQuery" type="text" placeholder="Search" aria-label="Search"/>
            <div style="margin-left:5%">
            <div v-for="breedModel in returnModel"
                     :key="`breed-${breedModel}`"
                     style="float: left"
                >
                    {{breedModel}} <dog-breed-image :breed-name ="`${breedModel}`"></dog-breed-image>
                </div>
            </div>
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
    .form-control{
        display: block;
        padding: .500rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .50rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        margin-left: 5%;
        width: 90%;
    }
</style>
