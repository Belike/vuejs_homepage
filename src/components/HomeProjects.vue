<template>
  <v-container grid-list-lg id="projects">
      <v-layout row>
          <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Projects: </v-flex>
      </v-layout>
      <v-layout row wrap>
          <project-vue v-for="post in posts" :key="post" id="vuejsProject"
                v-bind:imageName="post.imageName"
                v-bind:title="post.title"
                v-bind:titleColorWhite="post.titleColorWhite"
                v-bind:subtext="post.subtext"
                v-bind:icons="post.icons"
                v-bind:text="post.text"
                v-bind:github="post.github"
                v-bind:expand="post.expand"
          />
      </v-layout>
  </v-container>
</template>

<script>
import ProjectVue from './Project.vue'
export default {
    name: 'HomeProjects',
    data: () => ({
        posts: [
            
            {
                title: 'How to do Camunda Reviews',
                titleColorWhite: 0,
                imageName: 'badSample.png',
                subtext: '<h3> To be released soon...</h3> </br>',
                icons: [
                    {
                        icon: 'mdi-sitemap',
                        caption: 'Camunda'
                    },
                ],
                text: '<br/><h2 class="text-center"> How to successfully review your models </h2> </br> <p> Follow soon! </p>',
                expand: 0,
                date: '2018-01-01'
            },
            {
                title: 'My very first self-created website',
                titleColorWhite: 0,
                imageName: 'vue-js-large.png',
                subtext: '<h3>How a backend developer did frontend development!<br/> No raw HTML, No CSS!</h3>',
                icons: [
                    {
                        icon: 'mdi-vuejs',
                        caption: 'VueJs'
                    },
                    {
                        icon: 'mdi-vuetify',
                        caption: 'Vuetify'
                    },
                    {
                        icon: 'mdi-firebase',
                        caption: 'Firebase'
                    }
                ],
                text: '<br/><h2 class="text-center">Front End with Vue:</h2><h3 class="text-center">Road to Glory and my first ever Website</h3><br/><p>Over the last 12 years, I&#39ve worked on a variety of software projects and have managed to avoid practically all front-end work. I only had to open Microsoft Visual Studio Code on rare occasions to run scripts rather than classes.</p><p>Not this time! Today I am presenting to you the first ever website written by me - no CMS obviously. As I hate juggling around with several CSS and HTML files, I came to the conclusion to start learning VueJs. VueJS is an Open-Source front end Javascript framework for building Single-Page applications. Evan You built Vue, which describes itself as a reactive component framework with an open API. Vue concentrates on the view layer, making it extremely useful for integrating with already existing libraries and frameworks. Also, Vue is using streaming server-side rendering, which reduces the time users have to wait before getting the rendered content by using streaming server-side rendering. Enough sugar coating, let&#39s get an overview of my webpage.</p> <h3>Basic Setup</h3> <p>Before we proceed: Check out the sources on <a href="https://github.com/Belike/vuejs_homepage" target="_blank">GitHub </a>. <br>The basis of every Vue projects are the components. For this project I have written the following components: <ul> <li> <b>AppNavigation.vue:</b> Responsive header of the page. </li> <li> <b>HomeScreen.vue:</b> Background of the website embedding my avatar.</li> <li> <b>HomeDetails.vue:</b> Welcoming words </li> <li> <b>HomeProjects.vue and Project.vue:</b> List of Projects represented by VueCards. Project component is created by an array of objects in HomeProjects.vue </li> <li> <b>HomeFooter.vue:</b> Footer of the page with contact details and link to legal disclosure </li> </ul> </p> <p> As I am using <a href="https://router.vuejs.org/" target="_blank">VueRouter</a>, I also had to attach the routing in index.js. I&#39m using a single-page method, so all routing is tied to the main page under &#39/&#39, but I have included a function use hash tags to redirect.</p> <p> Last but not least take a look at Home.vue under views as this is representing the whole page. <h3>Hosting</h3><p>This website is hosted using Google Firebase. Firebase is a real-time cloud solution that can be integrated using <a href="https://cli.vuejs.org/guide/deployment.html#firebase" target="_blank">Vue Cli </a>. The hosting is directly linked to any push requests on GitHub making updates becoming visible very easy. Sadly Google DNS is not available in Germany yet, so I had to buy the domain elsewhere. If you have any questions about my project, feel free to approach me via e-mail.',
                github: 'https://github.com/Belike/vuejs_homepage',
                expand: 0,
                date: '2021-07-28'
            }
    ]
    }),
    components: {
      ProjectVue
    }

};
</script>

<style>
</style>