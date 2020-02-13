import axios from "axios";

class DogBreedDataService{
    getAllDogBreeds(){
        return axios.get(`https://dog.ceo/api/breeds/list/all`)
    }
    getBreedRandomImageUrl(name){
        return axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
    }
    getBreedImageUrl(name){
        return axios.get(`https://dog.ceo/api/breed/${name}/images`);
    }
}


export default new DogBreedDataService();