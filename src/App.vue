<template>
  <MainHeader/>
  <RouterView />
</template>

<script>
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
</style>
