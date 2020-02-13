import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import DogBreedDetail from "./components/DogBreedDetail.vue"
import DogBreedList from "./components/DogBreedList.vue";
import Vuex from 'vuex'
import { store } from './store'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: DogBreedList},
    {path: '/detail/:dogBreed', component: DogBreedDetail}
  ]
});
Vue.use(Vuex);
Vue.use(VueRouter);
new Vue({ el: '#app', router,render: h => h(App), store })