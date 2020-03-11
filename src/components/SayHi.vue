<template>
  <div class="page say-hi" ref="say-hi-page">
    <div class="header">
      <h1>Say Hi</h1>
      <i class="fas fa-times fa-lg close" @click="$emit('switchpage', 0)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SayHi',
  methods: {
    close() {
      this.$emit('closeme')
    }
  }
}
</script>

<style lang="scss" scoped>
.say-hi {
  background: #0c90b1;
  display: block;
  padding: 0;
  overflow: auto;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #15acd1;
    padding: 0 2rem;

    .close {
      cursor: pointer;
    }
  }
}
</style>
