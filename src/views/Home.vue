<template>
  <div class="home page" ref="home-page">
    <div class="intro-container">
      <div class="social-link-container left">
        <a href="https://github.com/KennethMurugu/">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="personal-details">
        <img :src="require('@/assets/img/me.jpeg')" alt="Kenneth Kimotho" class="avatar-me" />
        <h1 class="name">Kenneth Kimotho</h1>
        <p class="title">UI/UX Designer, Front-end Developer</p>
      </div>
      <div class="social-link-container right">
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>

    <div class="main-links-container">
      <a href="#" class="link about-me" ref="btnAboutMe" @click="$emit('switchpage', 1)">ABOUT ME</a>
      <a href="#" class="link projects" ref="btnProjects" @click="$emit('switchpage', 2)">PROJECTS</a>
      <a href="#" class="link say-hi" ref="btnSayHi" @click="$emit('switchpage', 3)">SAY HI</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const home = document.querySelector('body')
    this.$refs['btnAboutMe'].addEventListener('mouseenter', function() {
      home.classList.add('about-me-hovered')
    })
    this.$refs['btnAboutMe'].addEventListener('mouseleave', function() {
      home.classList.remove('about-me-hovered')
    })
    this.$refs['btnProjects'].addEventListener('mouseenter', function() {
      home.classList.add('projects-hovered')
    })
    this.$refs['btnProjects'].addEventListener('mouseleave', function() {
      home.classList.remove('projects-hovered')
    })
    this.$refs['btnSayHi'].addEventListener('mouseenter', function() {
      home.classList.add('say-hi-hovered')
    })
    this.$refs['btnSayHi'].addEventListener('mouseleave', function() {
      home.classList.remove('say-hi-hovered')
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  // background-image: linear-gradient(45deg, #cb4040, #460476, #0c90b1);
  // background-repeat: no-repeat;
  // background-size: 200%;
  // background-position: center;
  // transition: background-position 0.75s ease;
}
.intro-container {
  padding-top: 1rem;
  text-align: center;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;

  .social-link-container {
    align-self: flex-start;
    padding-top: 2rem;

    a {
      color: #fff;
      font-size: 2.5rem;
      display: inline-block;
      text-shadow: 0px 0px 25px #00000078;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.2);
        text-shadow: 0px 0px 25px rgba(255, 255, 255, 0.623);
      }
    }
  }
}
.intro-container {
  .name,
  .title {
    margin: 0.2rem 0;
  }
}
.avatar-me {
  width: 50%;
  max-width: 460px;
  border-radius: 50%;
  box-shadow: 0px 0px 25px #00000078;
}

.main-links-container {
  width: 100%;
  display: grid;
  grid-template-columns: 330px 330px 330px;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  a {
    display: inline-block;
    color: #fff;
    border: 10px solid #fff;
    padding: 1rem 5rem;
    font-size: 2rem;
    box-shadow: 0px 0px 25px #00000078;
    background-color: rgba(0, 0, 0, 0.452);
    font-weight: bold;
    transition: all 0.2s ease;
    text-align: center;

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
</style>
