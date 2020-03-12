<template>
  <div class="page about" ref="about-page">
    <!-- <div class="header">
      <h1>About Me</h1>
      <i class="fas fa-times fa-lg close" @click="$emit('switchpage', 0)"></i>
    </div>-->
    <PageHeader
      class="header"
      title="About"
      background="#924848"
      v-on:close="$emit('switchpage', 0)"
    >
      <p @click="$emit('switchpage', 2)">Projects</p>
      <p @click="$emit('switchpage', 3)">Say Hi</p>
    </PageHeader>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'About',
  components: { PageHeader },
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
}
</style>
