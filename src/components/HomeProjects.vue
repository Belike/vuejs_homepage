<template>
  <v-container grid-list-lg id="projects">
      <v-layout row>
          <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Projects: </v-flex>
      </v-layout>
      <v-layout row wrap>
          <v-flex xs12 sm12 md4>
              <v-card elevation="12" class="d-flex flex-column">
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
                        <div>
                            <div>This is the first time I've stepped outside of my comfort zone to invest my leisure time in learning how to build a personal website using a framework I like: Vue.js<br/> No raw HTML, No CSS!</div>
                        </div>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="teal accent-4" text @click="reveal=true">Read more</v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal overflow-y-auto d-flex flex-column" style="height: 100%">
                            <v-card-text>
                                More will follow once this webpage has successfully be deployed!
                            </v-card-text>
                            <v-spacer></v-spacer>
                            <v-divider></v-divider>
                            <v-card-actions class="pt-0">
                                <v-btn color="teal accent-4" text @click="reveal=false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomeProjects',
    data: () => ({
        reveal: false,
    })
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