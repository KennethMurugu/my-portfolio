<template>
  <div class="page projects">
    <!-- <div class="header mx-auto mb-12">
      <div class="icons-container">
        <i class="fas fa-laptop-code fa-7x icon"></i>
        <i class="fas fa-palette fa-4x icon"></i>
        <i class="fab fa-node-js fa-4x icon"></i>
        <i class="fab fa-vuejs fa-7x icon"></i>
      </div>
    </div>-->

    <div class="speech-container mx-auto">
      <img :src="require('@/assets/img/me.jpeg')" alt="Kenneth Kimotho" class="avatar-me mx-auto" />
      <div class="speech pa-5 pl-12">
        <p>
          Have a look at some of the projects I've worked on, with links to Github and demos where applicable.
          <span>&#128512;</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader'
export default {
  name: 'Projects',
  // components: { PageHeader },
  methods: {
    close() {
      this.$emit('closeme')
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  background: #460476;
  display: block;
  padding: 0;
}
.header {
  width: 90%;
  max-width: 500px;
  padding-top: 5rem;
}

.icons-container {
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    position: absolute;
    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.637);

    &.fa-vuejs {
      color: #59b984;
      transform: translateY(-50px);
    }
    &.fa-node-js {
      color: #6fa761;
      transform: translateX(70px);
    }
    &.fa-palette {
      color: #00b9ff;
      transform: translateX(-70px);
    }
    &.fa-laptop-code {
      color: #fff;
    }
  }
}

.speech-container {
  // display: grid;
  // grid-template-columns: auto auto;
  // align-items: center;
  max-width: 500px;
  text-align: center;

  .avatar-me {
    max-width: 80px;
    width: 80%;
    border-radius: 50%;
    transform: translateY(30px);
    z-index: 2;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.507);
  }
  .speech {
    background-color: rgba(0, 0, 0, 0.507);
    border-radius: 5px;
    // backdrop-filter: blur(5px);
    z-index: 1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.507);
  }
}
</style>

