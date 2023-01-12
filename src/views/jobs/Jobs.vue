<template>
  <h1>Jobs</h1>

  <div v-if="jobs.length">
    <ul>
      <li v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h3>{{ job.id }}. {{ job.title }}</h3>
        </router-link>
        <p>Location: {{ job.location }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Loading jobs......</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
li {
  background: #f4f4f4;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
}
h3 {
  color: #444;
  /* color:  blueviolet; */
}
li:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>