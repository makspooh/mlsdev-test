<template>
  <v-app>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceOutLeft"
        leave-active-class="animated bounceOutRight"
    >
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>