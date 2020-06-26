<template>
  <div class="header">
    <div class="dropdown-links" :class="{ 'hide': !showDropdown }">
      <slot></slot>
    </div>
    <div class="content">
      <fa-icon class="fa-lg dropdown-toggle" icon="bars" @click="showDropdown = !showDropdown"></fa-icon>
      <h1 class="title">{{ title }}</h1>
      <div class="right-container">
        <div class="links">
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

  .dropdown-links {
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    opacity: 1;
    text-align: center;
    transition: all 0.35s ease-in-out;
    z-index: 1;
    transform-origin: top;
    // transform: scaleY(1);
    overflow: hidden;
    height: 6rem;

    a {
      height: 3rem;
    }

    &.hide {
      // opacity: 0;
      visibility: hidden;
      // transform: scaleY(0);
      height: 0px;
    }

    & * {
      color: #fff;
      display: block;
      margin: 0;
      padding: 0.75rem 0;
      border: 3px solid transparent;
      transition: all 0.35s ease-in-out, border-color 0.2s ease;

      &:hover {
        border-color: #fff;
      }
      &:active {
        background-color: rgba(255, 255, 255, 0.205);
      }
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