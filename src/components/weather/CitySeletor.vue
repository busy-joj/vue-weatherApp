<template>
  <div>
    <ul class="city-selector">
        <li @click="selectCity(city)" :class="{isSelected: city.selected}" v-for="city in cities" :key="city.code">{{ city.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"CitySeletor",
    data(){
        return{
            cities:[
                { code: "Seoul", label: "서울", selected:false},
                { code: "Tokyo", label: "도쿄", selected:false},
                { code: "London", label: "런던", selected:false},
                { code: "Moscow", label: "모스크바", selected:false},
                { code: "Yakutsk", label: "야크추크", selected:false}
            ]
        }
    },
    methods:{
        selectCity(city){
            city.selected = !city.selected;
            this.$emit("selectCity", city)
        }
    }
}
</script>

<style scoped>
    .city-selector{display: grid;grid-template-columns: repeat(5, 1fr);gap:15px;margin:0 0 20px 0;}
    .city-selector li{display: flex;justify-content:center;align-items:center;padding:0.3em;cursor:pointer;border-radius: 10px;background: #ffffff;box-shadow: 3px 3px 6px #a3a3a3, -3px -3px 6px #ffffff}
    .city-selector li.isSelected{box-shadow: inset 3px 3px 6px #a3a3a3, -3px -3px 6px #ffffff}
</style>