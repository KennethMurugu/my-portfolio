<template>
  <div class="project-summary">
    <img
      :src="require(`@/assets/img/projects/${project.thumbnail}`)"
      :alt="project.thumbnail"
      class="thumbnail"
    />
    <div class="text px-2 pb-2">
      <p class="title mt-0">{{project.title}}</p>
      <p class="description mt-0">{{project.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { project: {} },
  name: 'ProjectSummaryCard'
}
</script>

<style lang="scss" scoped>
.project-summary {
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.445);
  max-width: 350px;
  overflow: hidden;
  background-color: #4a111c;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.61);
  }
}
.thumbnail {
  width: 100%;
}

.description {
  font-size: 0.9em;
}
</style>