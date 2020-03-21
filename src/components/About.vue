<template>
  <div class="page about" ref="about-page">
    <PageHeader
      class="header"
      title="About"
      background="#924848"
      v-on:close="$emit('switchpage', 0)"
    >
      <p @click="$emit('switchpage', 2)">Projects</p>
      <p @click="$emit('switchpage', 3)">Say Hi</p>
    </PageHeader>

    <div class="content">
      <div class="quote">
        <i class="fas fa-quote-left fa-lg quote-left"></i>
        <h2 class="text">Passion gets you further.</h2>
        <i class="fas fa-quote-right fa-lg quote-right"></i>
        <p class="author">
          <em>- Charles Karitu</em>
        </p>
      </div>
    </div>
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

  .content {
    margin: 1.5rem;
  }
}

.quote {
  border: 2px solid #fff;
  padding: 1rem 2rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  max-width: 500px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.267);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;

  .text {
    text-align: center;
  }
  .quote-right {
    text-align: right;
  }
  .author {
    text-align: center;
    margin: 0;
  }
}
</style>
