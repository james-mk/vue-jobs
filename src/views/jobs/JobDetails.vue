<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Job id:{{ job.id }}, Location: {{ job.location }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details..</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
  data() {
    return {
      job: null,
    };
  },
};
</script>

<style>
</style>