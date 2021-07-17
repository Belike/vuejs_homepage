<template>
  <span>
    <home-screen></home-screen>
    <home-details></home-details>
    <home-projects></home-projects>
    <home-footer></home-footer>
  </span>
</template>

<script>
import HomeDetails from '../components/HomeDetails.vue';
import HomeProjects from '../components/HomeProjects.vue';
import HomeScreen from '../components/HomeScreen.vue';
import HomeFooter from '../components/HomeFooter.vue';

export default {
  name: 'home',
  components: {
    HomeScreen,
    HomeDetails,
    HomeProjects,
    HomeFooter
  }
};
</script>