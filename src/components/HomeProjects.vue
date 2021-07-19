<template>
  <v-container grid-list-lg id="projects">
      <v-layout row>
          <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Projects: </v-flex>
      </v-layout>
      <v-layout row wrap>
          <v-flex xs12 sm12 md4>
              <v-card elevation="12" class="d-flex flex-column mx-auto" v-if="!reveal">
                  <v-img src="../assets/img/website_code.png" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">First Website with Vue!</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                    </v-card-title>
                    <v-card-text>
                        <h3> This is the first time I've stepped outside of my comfort zone to invest my leisure time in learning how to build a personal website using a framework I like: Vue.js<br/> No raw HTML, No CSS!</h3>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text><h1>TEST</h1></v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="teal accent-4" text @click="reveal=true">Read more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <transition>
                    <v-flex xs12 sm12 md12 v-if="reveal">
                            <v-card elevation="24" v-click-outside="onClickOutSide" class="d-flex flex-column mx-auto" outlined height="800px" width="100%">
                                <v-card-title class="text-h5 white--text grey lighten-1">How to write your first Website with Vue</v-card-title>
                                <v-card-text>
                                        <h1>Goals:</h1>
                                </v-card-text>
                                <v-spacer></v-spacer>
                                <v-divider></v-divider>
                                <v-btn bottom color="teal accent-4" text @click="reveal=false">Close</v-btn>
                            </v-card>
                    </v-flex>
            </transition>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomeProjects',
    data: () => ({
        reveal: false,
    }),
    methods:{
        onClickOutSide () {
            this.reveal = false
        }
    }
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>