<!-- DashboardPage.vue -->
<!--<template>
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>This is a protected area only accessible to logged-in users.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardPage'
  };
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  
  p {
    color: #666;
  }
  </style>
-->
<template>
  <div class="dashboard">
    <h1>My Dashboard</h1>
    <div v-if="courses.length > 0">
      <h2>Tutorial Courses</h2>
      <div class="course-list">
        <div v-for="course in courses" :key="course.id" class="course-item" @click="redirectToCourse(course.id)">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <!-- Add more course details as needed -->
        </div>
      </div>
    </div>
    <div v-else>
      <p>No tutorial courses available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      courses: [
        { id: 1, title: 'Introduction to Vue.js', description: 'Learn the basics of Vue.js framework.' },
        { id: 2, title: 'Vue.js Components', description: 'Master Vue.js component architecture.' },
        { id: 3, title: 'Vue.js Router', description: 'Explore Vue.js routing capabilities.' }
        // Add more sample courses as needed
      ]
    };
  },
  methods: {
    redirectToCourse(courseId) {
      // Redirect to course details page passing courseId as a route parameter
      this.$router.push({ name: 'CourseDetails', params: { courseId } });
    }
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.course-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
}

.course-item:hover {
  background-color: #f0f0f0; /* Add hover effect */
}
</style>

