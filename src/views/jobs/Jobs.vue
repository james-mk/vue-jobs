<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h3>{{ job.id }} {{ job.title }}</h3>
    </router-link>
    <p>Location: {{ job.location }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: "Web Developer",
          id: 1,
          location: "Nairobi",
          details: "lorem ipsum",
        },
        {
          title: "Graphic Designer",
          id: 2,
          location: "Mombasa",
          details: "lorem ipsum ",
        },
        {
          title: "Videographer",
          id: 3,
          location: "Nakuru",
          details: "lorem ipsum l",
        },
        {
          title: "Social Media Manager",
          id: 4,
          location: "Eldoret",
          details: "lorem ipsum ",
        },
      ],
    };
  },
};
</script>

<style>
.job h3 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h3:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>