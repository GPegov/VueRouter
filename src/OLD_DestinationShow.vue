<!--Router is working from the local json file. No fetch functions, no props -->
<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script>
import sourseData from '@/data.json'


export default {
    computed: {
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourseData.destinations.find(destination => destination.id === this.destinationId)}
    },
}

</script>

<style >

</style>