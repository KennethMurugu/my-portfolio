<template>
  <div class="project-summary pb-6">
    <div class="info px-2">
      <h1 class="title mb-0">{{project.title}}</h1>
      <p class="description mt-0">{{project.description}}</p>
    </div>
    <img
      :src="require(`@/assets/img/projects/${project.thumbnail}`)"
      :alt="project.title"
      class="thumbnail"
    />
    <div class="footer">
      <button class="btn" @click="visit(project.link)">VISIT</button>
      <button class="btn" @click="visit(project.source)">SOURCE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { project: {} },
  name: 'ProjectSummaryCard',
  methods: {
    visit(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-summary {
  border-radius: 5px;
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.445);
  max-width: 350px;
  // background-color: #192139;
  transition: all 0.25s ease;
  cursor: pointer;
  // display: grid;
  // grid-template-columns: 350px 250px;
  // column-gap: 1rem;
  text-align: center;

  .thumbnail {
    border-radius: 5px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.445);
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.61);
    }
  }
}

.title {
  // font-size: 1.2em;
  font-weight: bold;
}

.description {
  font-size: 0.9em;
}
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}
</style>