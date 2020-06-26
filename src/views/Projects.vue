<template>
  <div class="page projects">
    <PageHeader title="Projects" class="mb-6">
      <router-link to="/about">About</router-link>
      <router-link to="/sayhi">Say Hi</router-link>
    </PageHeader>

    <div class="page-content px-3">
      <div class="speech-container mx-auto mb-6">
        <img :src="require('@/assets/img/me.jpeg')" alt="Kenneth Kimotho" class="avatar-me mx-auto" />
        <div class="speech pa-5">
          <p>
            Have a look at some of the projects I've worked on, with links to the Github source and demos where applicable.
            <span>&#128516;</span>
          </p>
        </div>
      </div>

      <div class="project-list">
        <ProjectSummaryCard
          v-for="(project, index) in projectList"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSummaryCard from '@/components/ProjectSummaryCard'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'Projects',
  components: { ProjectSummaryCard, PageHeader },
  data() {
    return {
      projectList: [
        {
          thumbnail: 'shopio-thumb.png',
          title: 'Shopio Ecommerce',
          description: 'A simple one-page concept for an ecommerce storefront.',
          link: process.env.VUE_APP_SHOPIO_URL,
          source: 'https://github.com/KennethMurugu/ecommerce-store'
        },
        {
          thumbnail: 'shopio-thumb.png',
          title: 'Shopio Ecommerce',
          description: 'A simple one-page concept for an ecommerce storefront.',
          link: process.env.VUE_APP_SHOPIO_URL,
          source: 'https://github.com/KennethMurugu/ecommerce-store'
        },
        {
          thumbnail: 'shopio-thumb.png',
          title: 'Shopio Ecommerce',
          description: 'A simple one-page concept for an ecommerce storefront.',
          link: process.env.VUE_APP_SHOPIO_URL,
          source: 'https://github.com/KennethMurugu/ecommerce-store'
        },
        {
          thumbnail: 'shopio-thumb.png',
          title: 'Shopio Ecommerce',
          description: 'A simple one-page concept for an ecommerce storefront.',
          link: process.env.VUE_APP_SHOPIO_URL,
          source: 'https://github.com/KennethMurugu/ecommerce-store'
        }
      ]
    }
  },
  methods: {
    close() {
      this.$emit('closeme')
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  // background: #460476;
  display: block;
  padding: 0;
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

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  align-items: center;
  justify-content: center;
  gap: 1.5rem 3rem;
}

@media screen and (max-width: 600px) {
  .project-list {
    grid-template-columns: auto;
  }
}
</style>

