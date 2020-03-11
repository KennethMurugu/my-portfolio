<template>
  <div class="page projects">
    <div class="header">
      <h1>Projects</h1>
      <i class="fas fa-times fa-lg close" @click="$emit('switchpage', 0)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
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

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #5f0e99;
    padding: 0 2rem;

    .close {
      cursor: pointer;
    }
  }
}
</style>

