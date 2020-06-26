<template>
  <div id="app">
    <transition name="main-route-switch" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main-route-switch-enter-active,
.main-route-switch-leave-active {
  transition: all 0.35s ease;
}

.main-route-switch-enter,
.main-route-switch-leave-to {
  opacity: 0;
}
.main-route-switch-enter-to,
.main-route-switch-leave {
  opacity: 1;
}
</style>
