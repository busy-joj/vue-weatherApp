<template>
  <div>
    <ul class="air-list">
        <AirItem v-for="air in airList" :key="air.code" :air="air"/>
    </ul>
  </div>
</template>

<script>
import AirItem from './AirItem'
export default {
    name: "airList",
    components:{
        AirItem
    },
    props:{
        airList:Array
    }
}
</script>

<style scoped>
/* .air-list{display:grid;margin-top:1em;grid-template-columns:repeat(4,1fr);grid-gap:1em;} */
</style>