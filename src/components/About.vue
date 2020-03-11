<template>
  <div class="page about" ref="about-page">
    <div class="header">
      <h1>About Me</h1>
      <!-- <div class="links">
        <p @click="$emit('switchpage', 0)">Home</p>
        <p @click="$emit('switchpage', 1)">Projects</p>
        <p @click="$emit('switchpage', 3)">Say Hi</p>
      </div>-->
      <i class="fas fa-times fa-lg close" @click="$emit('switchpage', 0)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #924848;
    padding: 0 2rem;

    .links {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 1rem;
    }

    .close {
      cursor: pointer;
    }
  }
}
</style>
