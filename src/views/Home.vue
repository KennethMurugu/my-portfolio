<template>
  <div class="home page" ref="home-page">
    <div class="top-social-links">
      <a href="https://github.com/KennethMurugu/" class="btn link">
        <fa-icon class="icon mr-3" :icon="['fab', 'github-square']"></fa-icon>
        <span class="text">Github</span>
      </a>
      <a href="https://twitter.com/kendotkim" class="btn link">
        <fa-icon class="icon mr-3" :icon="['fab', 'twitter-square']"></fa-icon>
        <span class="text">Twitter</span>
      </a>
    </div>
    <div class="intro-container">
      <div class="row-1">
        <div class="social-link-container left">
          <a href="https://github.com/KennethMurugu/">
            <fa-icon class="icon" :icon="['fab', 'github-square']"></fa-icon>
            <p class="mb-0 mt-3 text">Github</p>
          </a>
        </div>
        <img :src="require('@/assets/img/me.jpeg')" alt="Kenneth Kimotho" class="avatar-me mx-3" />
        <div class="social-link-container right">
          <a href="https://twitter.com/kendotkim">
            <fa-icon class="icon" :icon="['fab', 'twitter-square']"></fa-icon>
            <p class="mb-0 mt-3 text">Twitter</p>
          </a>
        </div>
      </div>

      <div class="personal-details">
        <h1 class="name">Kenneth Kimotho</h1>
        <p class="title">Front-end Web Developer&nbsp;&bull;&nbsp;UI/UX Designer</p>
      </div>
    </div>

    <div class="main-links-container">
      <div class="link-container" ref="btnAboutMe">
        <!-- <a href="#" class="link about-me" ref="btnAboutMe" @click="$router.go('/home')">ABOUT ME</a> -->
        <router-link class="link about-me" to="/about">About Me</router-link>
        <div class="pulse"></div>
      </div>
      <div class="link-container" ref="btnProjects">
        <!-- <a href="#" class="link projects" ref="btnProjects" @click="$emit('switchpage', 2)">PROJECTS</a> -->
        <router-link class="link projects" to="/projects">Projects</router-link>
        <div class="pulse"></div>
      </div>
      <div class="link-container" ref="btnSayHi">
        <!-- <a href="#" class="link say-hi" ref="btnSayHi" @click="$emit('switchpage', 3)">SAY HI</a> -->
        <router-link class="link say-hi" to="/sayhi">Say Hi</router-link>
        <div class="pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const body = document.querySelector('body')
    // Btn About Me
    this.$refs['btnAboutMe'].addEventListener('mouseenter', function() {
      body.classList.add('about-me-hovered')
    })
    this.$refs['btnAboutMe'].addEventListener('mouseleave', function() {
      body.classList.remove('about-me-hovered')
    })
    this.$refs['btnAboutMe'].addEventListener('click', function() {
      body.classList.remove('about-me-hovered')
    })

    // Btn Projects
    this.$refs['btnProjects'].addEventListener('mouseenter', function() {
      body.classList.add('projects-hovered')
    })
    this.$refs['btnProjects'].addEventListener('mouseleave', function() {
      body.classList.remove('projects-hovered')
    })

    this.$refs['btnProjects'].addEventListener('click', function() {
      body.classList.remove('projects-hovered')
    })

    // Btn Say Hi
    this.$refs['btnSayHi'].addEventListener('mouseenter', function() {
      body.classList.add('say-hi-hovered')
    })
    this.$refs['btnSayHi'].addEventListener('mouseleave', function() {
      body.classList.remove('say-hi-hovered')
    })

    this.$refs['btnSayHi'].addEventListener('click', function() {
      body.classList.remove('say-hi-hovered')
    })
  }
}
</script>

<style lang="scss" scoped>
.intro-container {
  padding-top: 1rem;
  text-align: center;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  max-width: 590px;
  margin-left: auto;
  margin-right: auto;

  .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social-link-container {
    padding-top: 2rem;

    a {
      color: #fff;
      display: inline-block;
      transition: all 0.2s ease;

      .icon {
        font-size: 2.75rem;
        filter: drop-shadow(0px 0px 25px #000000e7);
        transition: all 0.2s ease;
      }
      .text {
        opacity: 0;
        font-size: 1.1rem;
        transform: translateY(-15px);
        transition: all 0.2s ease;
      }

      &:hover {
        .icon {
          transform: scale(1.2);
          filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.623));
        }
        .text {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
  // end social-link-container

  .avatar-me {
    width: 40%;
    max-width: 460px;
    border-radius: 5px;
    box-shadow: 0px 0px 25px #00000078;
  }

  .personal-details {
    .name,
    .title {
      margin: 0.2rem 0;
    }
  }
}
//end intro-container

.main-links-container {
  width: 100%;
  display: grid;
  grid-template-columns: 330px 330px 330px;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  position: relative;

  .link-container {
    position: relative;
  }

  a {
    display: block;
    color: #fff;
    border: 5px solid #fff;
    padding: 1rem 5rem;
    font-size: 2rem;
    box-shadow: 0px 0px 25px #00000078;
    background-color: rgba(0, 0, 0, 0.452);
    font-weight: bold;
    transition: all 0.2s ease;
    text-align: center;
    border-radius: 5px;

    & + .pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      border: 5px solid #fff;
      pointer-events: none;
      left: 0;
      top: 0;
      border-radius: 5px;
    }

    &:hover + .pulse {
      animation: pulseAnim 0.75s linear infinite both;
    }

    &.about-me:hover {
      background-color: #b93838;
    }
    &.projects:hover {
      background-color: #6e03bb;
    }

    &.say-hi:hover {
      background-color: #2091ad;
    }
  }
}

.home {
  &.about-me-hovered {
    background-position: 0%;
  }
  &.say-hi-hovered {
    background-position: 100%;
  }
}

.top-social-links {
  display: none;
  grid-template-columns: 1fr 1fr;
  // column-gap: 1rem;
  .link {
    text-align: center;
    border-radius: 0px;
  }
}

@keyframes pulseAnim {
  to {
    transform: scale(1.1, 1.35);
    opacity: 0;
    border-width: 5px;
  }
}

@media screen and (max-width: 1100px) {
  .intro-container {
    padding-top: 2rem;
  }
  .main-links-container {
    grid-template-columns: auto;
    a {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .main-links-container a {
    border-width: 5px;
    padding: 1rem 5rem;
    font-size: 1.25rem;

    & + .pulse {
      border-width: 5px;
    }
  }
}

@media screen and (max-width: 500px) {
  .top-social-links {
    display: grid;
  }
  .intro-container .row-1 {
    justify-content: center;
  }
  .social-link-container {
    display: none;
  }
}
</style>
