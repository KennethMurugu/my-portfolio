<template>
  <div class="page say-hi">
    <PageHeader title="Say Hi" class="mb-12">
      <router-link to="/about" @click="$emit('linkclicked')">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </PageHeader>

    <div class="page-content px-3">
      <span>SAY HI</span>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'SayHi',
  components: { PageHeader },
  methods: {
    close() {
      this.$emit('closeme')
    }
  }
}
</script>

<style lang="scss" scoped>
.say-hi {
  // background: #0c90b1;
  display: block;
  padding: 0;
  overflow: auto;
}
</style>
