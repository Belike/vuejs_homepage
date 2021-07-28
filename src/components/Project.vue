<template>
    <v-flex xs12 sm12 md4>
        <v-card elevation="12" class="d-flex flex-column mx-auto">
            <v-img :src="require( `../assets/img/${this.imageName}`)" height="350px" contain>
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                                <span v-if="titleColorWhite==1" class="headline white--text">{{ title }}</span>
                                <span v-else class="headline black--text">{{ title }} </span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-title primary-title></v-card-title>
            <v-card-text>
                <span v-html="subtext"></span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout> 
                    <v-flex xs4 v-for="icon in icons" :key="icon">
                        <div class="text-center">
                            <v-icon>{{ icon.icon }}</v-icon>
                            <div class="caption">{{ icon.caption }}</div>
                        </div>                            
                    </v-flex>
                </v-layout>
                <v-expand-transition>
                <div v-show="expand==1">
                    <span v-html="text"></span>
                </div>>
                </v-expand-transition>
            </v-card-text>
            <v-divider></v-divider>
                <div class="mt-2 mb-2" v-if="github">
                    <div class="text-center">
                        <v-btn elevation="1" v-bind:href=github target="_blank">
                            <v-icon>mdi-github</v-icon>
                                Sources
                        </v-btn>
                    </div>                                                
                </div>
                <div class="mt-2 mb-2" v-else>
                    <div class="text-center">
                        <v-btn elevation="1" disabled target="_blank">
                                No Sources
                        </v-btn>
                        </div>
                </div>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="teal accent-4" text @click="expand=1" v-if="expand==0">Read more</v-btn>
                <v-btn color="teal accent-4" text @click="expand=0" v-if="expand==1">Close</v-btn>   
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'Project',
    props: {
        imageName: String,
        title: String,
        titleColorWhite: Number,
        subtext: String,
        icons: {
            type: Array,
            default: () => []
        },
        text: String,
        github: String,
        expand: Number
    }
}
</script>

<style>
</style>