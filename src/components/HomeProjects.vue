<template>
  <v-container grid-list-lg id="projects">
      <v-layout row>
          <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Projects: </v-flex>
      </v-layout>
      <v-layout row wrap>
          <v-flex xs12 sm12 md4>
              <v-card elevation="12" class="d-flex flex-column mx-auto">
                  <v-img src="../assets/img/website_code.png" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">How to build your first website with Vue</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                    </v-card-title>
                    <v-card-text>
                        <h3>How a backend developer did frontend development!<br/> No raw HTML, No CSS!</h3>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-layout>
                            <v-flex xs4>
                                <div class="text-center">
                                    <v-icon>mdi-vuejs</v-icon>
                                    <div class="caption">VueJs</div>
                                </div>                            
                            </v-flex>
                            <v-flex xs4>
                                <div class="text-center">
                                    <v-icon>mdi-vuetify</v-icon>
                                    <div class="caption">Vuetify</div>
                                </div>                            
                            </v-flex>
                            <v-flex xs4>
                                <div class="text-center">
                                    <v-icon>mdi-firebase</v-icon>
                                    <div class="caption">Firebase</div>
                                </div>                            
                            </v-flex>
                        </v-layout>
                        <v-expand-transition width="2000px">
                            <div v-show="reveal.vueProjectExpanded">
                                <br/>
                                <h2 class="text-center">Front End with Vue:</h2>
                                <h3 class="text-center">Road to Glory and my first ever Website</h3><br/>
                                <p>Over the past 12 years I have been involved in different software projects and I was successfully able to hide from almost all front end work. Only on rare occassions I had to open up the good ol' Visual Studio Code and run scripts rather than classes.</p>
                                <p>Not this time! Today I am presenting to you the first ever website written by me. As I hate juggling around with several CSS and HTML files, I came to the conclusion to start learning VueJs. VueJS is an Open-Source front end Javascript framework for building Single-Page applications. Vue was created by Evan You and focuses </p>
                                <p>that's the first thing that's ever gone wrong swishifying mobilomobile death sports well, you all know what laughter sounds like. smendler oodily suck shack oodily crazy critter reverse vampires sandal-wearing goldfish tenders doctorb your older, balder, fatter son homerhol kwyjibo boostafazoo saxamaphone menu boy jebus spokesrebel kung-fu hippie perspicacity mobilomobile here's vanessa williams chestal the e-z road to success betsy bleedingheart reverse vampires searing gas pain land we were eating rotisserie chicken disgruntled goat riding the midnight train to slab city homersexual reverse vampires well, that's the end of me smuggled vegetables johnny come-not-lies fireworks factory assal horizontology land monster bovine university betsy bleedingheart unnecessary surgery land eedily explosion land knifey wifey hey-dilly-ho fatard cheese-eating surrender monkeys add more balls grandpas little helper neglecterino d'oh! bagzooka stabby clouseauesque christmas ape holy flurking schnit sacrilicious deceleratrix beginualize invisible dog leash chocotastic everybody get naked worst episode ever. explosion land zing sophistimacated doowhackey uppity box</p>
                            </div>>
                        </v-expand-transition>
                    </v-card-text>
                    <v-divider></v-divider>
                    <div class="mt-2 mb-2">
                            <div class="text-center">
                                    <v-btn elevation="1" href="https://github.com/Belike/vuejs_homepage" target="_blank">
                                        <v-icon>mdi-github</v-icon>
                                    Sources
                                    </v-btn>
                            </div>                                                
                    </div>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="teal accent-4" text @click="reveal.vueProjectExpanded=true" v-if="!reveal.vueProjectExpanded">Read more</v-btn>
                        <v-btn color="teal accent-4" text @click="reveal.vueProjectExpanded=false" v-if="reveal.vueProjectExpanded">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
      </v-layout>
  </v-container>
</template>


<script>
export default {
    name: 'HomeProjects',
    data: () => ({
        reveal: { vueProjectExpanded: false,
                  camundaProjectExpanded: false },
    }),
    methods:{
        onClickOutSide () {
            this.reveal = false
        }
    }
};
</script>

<style>
</style>