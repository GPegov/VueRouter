<template>
  <div class="map-box">
      <yandex-maps>
        <yandex-map  v-model:center="mapCenter"
        :zoom="zoom"
        :settings = "settings"
        >


        <span id="plus" class="material-symbols-outlined"
              @click="increaseZoom">
          add
        </span>
        
        <span id="minus" class="material-symbols-outlined"
              @click="decreaseZoom">
          remove
        </span>

          <yandex-placemark v-model:coord="placemark1" />
          <yandex-placemark v-model:coord="placemark2" />
        </yandex-map>
      </yandex-maps>

     
      
  </div>

</template>
<script setup>
import { ref } from 'vue';



const zoom = ref(14)
const settings = {apiKey: '20cc144c-72c6-4286-8c70-8520ebcb35d7'}
const increaseZoom = () => {zoom.value +=1}
const decreaseZoom = () => {zoom.value -=1}

const mapCenter = ref([67.496901, 64.054866,]);
const placemark1 = [67.493818, 64.048037,]
const placemark2 = ref([67.500119, 64.063509]);




// const result = ref(null)
// const url2 = () => {axios.get('https://api-maps.yandex.ru/2.1/?apikey=20cc144c-72c6-4286-8c70-8520ebcb35d7&lang=ru_RU')
// .then(data => result.value = data)}


// const limit = ref(10)
// const page = ref(1)
// const url = computed(() => {
//   return 'https://jsonplaceholder.typicode.com/users?_limit=${limit.value}&_page=${page.value}'
// })
// const {isFetching, error, data} = useFetch(url, {refetch: true}).json()


</script>

<style>
.map-box {
  height: 400px;
  display: flex;
  align-items: center;
}
.material-symbols-outlined {

  scale: 140%;
  z-index: 1.1;
  margin: auto;
  cursor: pointer;
  position: absolute;
  top: 170px;
  left: 0px;
}
#minus {
  top: 210px;
}

</style>


<!-- the API-key is: 20cc144c-72c6-4286-8c70-8520ebcb35d7 -->