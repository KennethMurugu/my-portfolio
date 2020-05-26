<template>
  <div>
    <PageHeader
      :title="$store.state.currentPage.title"
      :background="headerColors[$store.state.currentPage.name]"
    >
      <!-- <p @click="$emit('switchpage', 2)">Projects</p>
      <p @click="$emit('switchpage', 3)">Say Hi</p>-->
      <template v-if="$store.state.currentPage.name == 'about'">
        <router-link to="/pages/projects">Projects</router-link>
        <router-link to="/pages/sayhi">Say Hi</router-link>
      </template>
      <template v-if="$store.state.currentPage.name == 'projects'">
        <router-link to="/pages/about">About Me</router-link>
        <router-link to="/pages/sayhi">Say Hi</router-link>
      </template>
      <template v-if="$store.state.currentPage.name == 'sayhi'">
        <router-link to="/pages/about">About Me</router-link>
        <router-link to="/pages/projects">Projects</router-link>
      </template>
    </PageHeader>

    <transition name="page-content" mode="out-in">
      <router-view class="page-content px-3 pt-6"></router-view>
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  components: { PageHeader },
  data() {
    return {
      headerColors: {
        about: '#320a60', //924848d4
        projects: '#581827', //5f0e99
        sayhi: '#016881'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content-enter-active,
.page-content-leave-active {
  transition: all 0.65s ease;
}
.page-content-leave-to,
.page-content-enter {
  // transform: scale(1.1);
  filter: blur(5px);
  opacity: 0;
}
.page-content-enter-to,
.page-content-leave {
  // transform: scale(1);
  filter: blur(0px);
  opacity: 1;
}
</style>