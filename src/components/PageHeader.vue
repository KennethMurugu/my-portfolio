<template>
  <div class="header">
    <div class="dropdown-links" :class="{ hide: !showDropdown }" @click="resetScroll">
      <button class="btn-close-dropdown" @click="showDropdown = !showDropdown">
        <fa-icon class="icon" icon="arrow-left" />
      </button>
      <router-link class="btn link" to="/" tag="div">
        <span class="text">
          <fa-icon class="mr-3" icon="home" />Home
        </span>
      </router-link>
      <router-link class="btn link" to="/about" tag="div">
        <span class="text">
          <fa-icon class="mr-3" icon="user" />About
        </span>
      </router-link>
      <router-link class="btn link" to="/projects" tag="div">
        <span class="text">
          <fa-icon class="mr-3" icon="code" />Projects
        </span>
      </router-link>
      <router-link class="btn link" to="/sayhi" tag="div">
        <span class="text">
          <fa-icon class="mr-3" icon="comment" />Say Hi
        </span>
      </router-link>
    </div>
    <div class="content">
      <fa-icon
        class="fa-lg dropdown-toggle"
        icon="bars"
        @click="showDropdown = !showDropdown"
        :class="{ hide: showDropdown }"
      ></fa-icon>
      <h1 class="title">{{ title }}</h1>
      <div class="right-container">
        <div class="links" @click="resetScroll">
          <slot></slot>
        </div>
        <div class="close" @click="$router.push('/')">
          <div class="bg"></div>
          <fa-icon class="fa-lg" icon="times"></fa-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: { type: String, default: '' }
  },
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    resetScroll() {
      document.querySelector('html').scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding: 0 2rem;
  width: 100%;
  z-index: 9999;
  backdrop-filter: blur(5px);
  transition: background-color 1.35s ease;
  background-color: rgba(0, 0, 0, 0.452);
  line-height: 2rem;

  .title {
    margin: 0.5rem 0;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }

  .dropdown-toggle {
    display: none;
    cursor: pointer;
    &:hover {
      text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.438);
    }

    &.hide {
      visibility: hidden;
    }
  }

  .right-container {
    display: flex;

    .links {
      display: flex;
      gap: 1rem;
      margin-right: 3rem;
      align-items: center;

      // & * {
      //   margin: 0 0.75rem;
      //   cursor: pointer;
      //   border: 1px solid transparent;
      //   transition: all 0.2s ease;
      //   padding: 5px 15px;
      //   color: #fff;

      //   &:hover {
      //     text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.438);
      //     border-color: #fff;
      //   }
      // }
    }

    .close {
      position: relative;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bg {
        background-color: rgba(255, 255, 255, 0.3);
        border: 0px solid transparent;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      &:hover .bg {
        background-color: transparent;
        border-width: 1px;
        border-color: #fff;
      }
    }
  }
}

.dropdown-links {
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.35s ease;

  &.hide {
    // display: none;
    left: -100%;
    // pointer-events: none;
  }

  .link {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-close-dropdown {
    border: none;
    background-color: transparent;
    color: #fff;
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:active,
    &:hover {
      background-color: rgba(255, 255, 255, 0.427);
    }
  }
}

@media screen and (max-width: 500px) {
  .header {
    padding: 0 0.75rem;

    .dropdown-toggle {
      display: block;
    }

    .title {
      font-size: 1.25rem;
    }
    .right-container {
      .links {
        display: none;
      }

      .close .bg {
        width: 90%;
        height: 90%;
      }
    }
  }
}
</style>
