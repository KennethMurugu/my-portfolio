<template>
  <div class="page about" ref="about-page">
    <PageHeader title="About" class="mb-12">
      <router-link to="/projects" @click="$emit('linkclicked')">Projects</router-link>
      <router-link to="/sayhi">Say Hi</router-link>
    </PageHeader>

    <div class="page-content px-3">
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
          If my life is a recipe, then
          <b>passion</b> is the secret sauce. It drives me as an individual and helps make my work stand-out.
        </p>
        <p>
          I love to code. I love making the software that I produce look and
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
            <div class="bar" :data-tippy-content="getSkillTooltipContent(skill.percentage)">
              <span class="fill" :class="{'active': skill.percentage >= 1}">&#128528;</span>
              <span class="fill" :class="{'active': skill.percentage >= 2}">&#128524;</span>
              <span class="fill" :class="{'active': skill.percentage >= 3}">&#128522;</span>
              <span class="fill" :class="{'active': skill.percentage >= 4}">&#128523;</span>
              <span class="fill" :class="{'active': skill.percentage >= 5}">&#128513;</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css' // optional for styling
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
          percentage: 4
        },
        {
          name: 'Vue.js',
          icon: 'fab fa-vuejs',
          percentage: 5
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          percentage: 3
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js',
          percentage: 4
        },
        {
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap',
          percentage: 5
        },
        {
          name: 'Vuetify',
          icon: 'fab fa-vuejs',
          percentage: 4
        },
        {
          name: 'SASS/SCSS',
          icon: 'fab fa-sass',
          percentage: 4
        }
      ],
      skillLevels: [
        {
          smiley: '&#128528',
          description:
            'This one is mostly new to me and I do not have much experience outside of Hello World Projects. '
        },
        {
          smiley: '&#128524',
          description:
            "I'm just starting to learn this skill and have moved away from simple Hello World Projects."
        },
        {
          smiley: '&#128522',
          description:
            'I have some experience in this area but there is definitely room for improvement.'
        },
        {
          smiley: '&#128523',
          description:
            'I am quite comfortable with this skill and I have used it before in multiple projects.'
        },
        {
          smiley: '&#128513',
          description:
            'I have used this skill extensively in multiple projects and understand it inside and out.'
        }
      ]
    }
  },
  methods: {
    getSkillTooltipContent(skillPercentage) {
      const skill = this.skillLevels[skillPercentage - 1]

      return `
        <p class="skill-tooltip">
          <span class="smiley">${skill.smiley}</span>
          <span class="mx-3">&bull;</span>
          <span>${skill.description}</span>
        </p>
      `
    }
  },
  mounted() {
    tippy('[data-tippy-content]', { allowHTML: true })
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: block;
  padding: 0;
  // overflow: auto;

  // .content {
  //   margin-top: 7rem;
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
  // }
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
    .title {
      font-size: 1.2rem;
    }
    .bar {
      position: relative;
      // background-color: rgba(0, 0, 0, 0.164);
      border-radius: 3px;
      // display: grid;
      // grid-template-columns: auto auto auto auto auto;
      // height: 20px;
      .fill {
        // background-color: #00a651;
        // width: 80%;
        height: 100%;
        font-size: 1.25rem;
        margin-right: 1rem;
        filter: grayscale(100%);

        &.active {
          filter: grayscale(0%);
          font-size: 1.5rem;
        }
      }
      .percentage {
        position: absolute;
        top: 0;
        left: 50%;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .skills-list {
    grid-template-columns: auto;
    text-align: center;
  }
}
</style>
