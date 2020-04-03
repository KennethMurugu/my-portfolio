<template>
  <div id="app">
    <transition :name="selectedTransition" mode="out-in">
      <!-- <HomePage v-on:switchpage="switchPage" v-if="page == 0" :key="0" />
      <AboutPage v-on:switchpage="switchPage" v-if="page == 1" :key="1" />
      <ProjectsPage v-on:switchpage="switchPage" v-if="page == 2" :key="2" />
      <SayHiPage v-on:switchpage="switchPage" v-if="page == 3" :key="3" />-->
      <router-view />
    </transition>
  </div>
</template>

<script>
// import HomePage from '@/views/Home'
// import AboutPage from '@/components/About'
// import ProjectsPage from '@/components/Projects'
// import SayHiPage from '@/components/SayHi'
export default {
  data() {
    return {
      page: 0,
      transitions: ['home', 'about', 'projects', 'say-hi'],
      selectedTransition: 'home'
    }
  },
  // components: { HomePage, AboutPage, ProjectsPage, SayHiPage },
  methods: {
    switchPage(page) {
      this.page = page
      this.selectedTransition = this.transitions[page]
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.currentPage) {
        this.$store.commit('setCurrentPage', to.meta.currentPage)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Home page transitions
.home-enter-active,
.home-leave-active {
  transition: transform 0.65s ease-in-out, opacity 0.5s ease;
}
.home-leave-to {
  transform: translateY(-100%);
}
.home-enter {
  opacity: 0;
  transform: scale(0.85);
}
.home-enter-to {
  opacity: 1;
  transform: scale(1);
}

// About page transitions
.about-enter-active,
.about-leave-active {
  transition: transform 0.65s ease-in-out, opacity 0.5s ease;
}

.about-leave-to {
  transform: translateX(100%);
}
.about-enter {
  transform: translateX(-100%);
}
.about-leave,
.about-enter-to {
  transform: translateX(0);
}

// Projects page transitions
.projects-enter-active,
.projects-leave-active {
  transition: transform 0.65s ease-in-out, opacity 0.5s ease;
}
.projects-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
.projects-enter {
  transform: translateY(100%);
}
.projects-enter-to {
  transform: translateY(0);
}

// Say Hi page transitions
.say-hi-enter-active,
.say-hi-leave-active {
  transition: transform 0.65s ease-in-out, opacity 0.5s ease;
}

.say-hi-leave-to {
  transform: translateX(-100%);
}
.say-hi-enter {
  transform: translateX(100%);
}
.say-hi-leave,
.say-hi-enter-to {
  transform: translateX(0);
}
</style>
