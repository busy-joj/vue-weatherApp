<template>
  <h2>Air Pollution</h2>
  <div class="air-wrap">
    <CitySeletor @selectCity="selectCity"/>
    <AirList :airList="airList"/>
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin"
import CitySeletor from '@/components/weather/CitySeletor'
import AirList from '@/components/air/AirList'

export default {
    name:"airContent",
    components:{
        CitySeletor,
        AirList
    },
    data(){
      return{
        airList:[]
      }
    },
    mixins:[weatherMixin],
    methods:{
        async selectCity(city){
            if(city.selected){
            const weather = await this.getWeatherInfo(city)  
            const air = await this.getAirInfo(weather)   
            this.airList.unshift(air)
            } else{
            const index = this.airList.findIndex(weather => weather.code === city.code)
            this.airList.splice(index, 1)
            }
            console.log(city)
        }
    }
}
</script>

<style>

</style>