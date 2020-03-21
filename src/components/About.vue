<template>
  <div class="page about" ref="about-page">
    <PageHeader
      class="header"
      title="About"
      background="#924848d4"
      v-on:close="$emit('switchpage', 0)"
    >
      <p @click="$emit('switchpage', 2)">Projects</p>
      <p @click="$emit('switchpage', 3)">Say Hi</p>
    </PageHeader>

    <div class="content mx-3">
      <div class="quote py-4 px-5 mb-10 mx-auto">
        <i class="fas fa-quote-left fa-lg quote-left"></i>
        <h2 class="text">Passion gets you further.</h2>
        <i class="fas fa-quote-right fa-lg quote-right"></i>
        <p class="author">
          <em>- Charles Karitu</em>
        </p>
      </div>

      <section class="section mx-auto mb-12">
        <div class="section-header">
          <span class="icon mr-4 py-2">
            <i class="fas fa-bolt"></i>
          </span>
          <span class="text">My Motivation</span>
        </div>

        <p class="text-justify">
          If my life was a recipe, then
          <b>passion</b> is the secret sauce. It drives me as an individual and helps make my work stand-out.
        </p>
        <p>
          I love to code. And I love making the software that I produce look and
          <b>feel</b> good to use, which is why I became a UI/UX designer and Front-end developer. I love the details, the nitty gritties of UI design and taking the time to make sure the end-user of my software has the best possible experience.
        </p>
      </section>

      <section class="section mx-auto mb-12">
        <div class="section-header">
          <span class="icon mr-4 py-2">
            <i class="fas fa-laptop-code"></i>
          </span>
          <span class="text">Skills</span>
        </div>

        <p>In a nutshell, my skillset encompasses most of the front-end development process, from design/protyping/wireframing to the actual get-your-hands-dirty programming implementation.</p>

        <div class="skills-list">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            <p class="title mb-1">
              <i :class="`${skill.icon}`"></i>
              {{ skill.name }}
            </p>
            <div class="bar">
              <div class="fill" :style="{width: `${skill.percentage}%`}"></div>
              <span class="percentage">{{ skill.percentage }}%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'About',
  components: { PageHeader },
  data() {
    return {
      skills: [
        {
          name: 'UI/UX Design & Prototyping',
          icon: 'fas fa-palette',
          percentage: 95
        },
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          percentage: 90
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          percentage: 80
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js',
          percentage: 85
        },
        {
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap',
          percentage: 95
        },
        {
          name: 'Vuetify',
          icon: 'fab fa-vuejs',
          percentage: 85
        },
        {
          name: 'SASS/SCSS',
          icon: 'fab fa-sass',
          percentage: 80
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
.about {
  background: #682525;
  display: block;
  padding: 0;
  overflow: auto;

  .content {
    margin-top: 5rem;
    .section {
      max-width: 900px;
      .section-header {
        background-color: rgba(0, 0, 0, 0.349);

        .icon {
          display: inline-block;
          text-align: center;
          font-size: 1.35rem;
          width: 50px;
          background-color: #c54f3d;
        }
        .text {
          font-size: 1.1em;
        }
      }
    }
  }
}

.quote {
  border: 2px solid #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.267);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;

  .text {
    text-align: center;
  }
  .quote-right {
    text-align: right;
  }
  .author {
    text-align: center;
    margin: 0;
  }
}

.skills-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  .skill {
    .bar {
      position: relative;
      background-color: #fff;
      height: 20px;
      .fill {
        background-color: #00a651;
        // width: 80%;
        height: 100%;
      }
      .percentage {
        position: absolute;
        top: 0;
        left: 50%;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .skills-list {
    grid-template-columns: auto;
  }
}
</style>
