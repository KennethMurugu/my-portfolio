<template>
  <div class="page say-hi">
    <!-- <PageHeader
      class="header"
      title="Say Hi"
      background="#15acd1"
      v-on:close="$emit('switchpage', 0)"
    >
      <p @click="$emit('switchpage', 1)">About Me</p>
      <p @click="$emit('switchpage', 2)">Projects</p>
    </PageHeader>-->

    <span>SAY HI</span>
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader'
export default {
  name: 'SayHi',
  // components: { PageHeader },
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
}
</style>
