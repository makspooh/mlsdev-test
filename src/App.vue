<template>
  <v-app>
    <v-content>
      <AppHeader/>
    </v-content>
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  components: {
    AppHeader
  },
  data () {
    return {

    }
  }
}
</script>
