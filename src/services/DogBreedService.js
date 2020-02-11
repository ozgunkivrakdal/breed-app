import axios from "axios";

//const DOG_BREED_APP_URL = "http://localhost:8080";
const DOG_BREED_API_URL_LIST = "https://dog.ceo/api/breeds/list/all";
//const DOG_BREED_BY_NAME = "https://dog.ceo/api/breeds/"

class DogBreedDataService{
    getAllDogBreeds(){
        return axios.get(`${DOG_BREED_API_URL_LIST}`)
    }
    getBreedImageUrl(name){
        return axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
    }
}


export default new DogBreedDataService();