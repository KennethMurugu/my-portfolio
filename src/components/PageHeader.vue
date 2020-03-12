<template>
  <div class="header" :style="{background}">
    <i class="fas fa-bars fa-lg dropdown-toggle" @click="showDropdown = !showDropdown"></i>
    <h1 class="title">{{title}}</h1>
    <div class="right-container">
      <div class="links">
        <slot></slot>
      </div>
      <div class="close" @click="$emit('close')">
        <i class="fas fa-times fa-lg"></i>
      </div>
    </div>
    <div class="dropdown-links" :class="{'hide': !showDropdown}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({ props: { title: '', background: '' } })
export default class PageHeader extends Vue {
  showDropdown = false
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  .dropdown-toggle {
    display: none;
  }

  .right-container {
    display: flex;

    .links {
      display: flex;
      gap: 1rem;
      margin-right: 3rem;
      align-items: center;
      & * {
        margin: 0 0.75rem;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease;

        &:hover {
          text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.438);
          border-color: #fff;
        }
      }
    }

    .close {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }

  .dropdown-links {
    background: rgba(0, 0, 0, 0.514);
    position: absolute;
    width: 100%;
    left: 0;
    top: 53px;
    opacity: 1;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &.hide {
      opacity: 0;
      visibility: hidden;
    }

    & * {
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
    }
  }
}
</style>