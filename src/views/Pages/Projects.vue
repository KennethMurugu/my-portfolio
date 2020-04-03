<template>
  <div class="page projects">
    <!-- <div class="header">
      <h1>Projects</h1>
      <i class="fas fa-times fa-lg close" @click="$emit('switchpage', 0)"></i>
    </div>-->
    <!-- <PageHeader
      class="header"
      title="Projects"
      background="#5f0e99"
      v-on:close="$emit('switchpage', 0)"
    >
      <p @click="$emit('switchpage', 1)">About Me</p>
      <p @click="$emit('switchpage', 3)">Say Hi</p>
    </PageHeader>-->
    <span>PROJECTS</span>
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader'
export default {
  name: 'Projects',
  // components: { PageHeader },
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
}
</style>

