<template>
    <span>
        <v-app-bar color="grey darken-4" dark dense class="hidden-sm-and-down" fixed>
                <v-btn color="grey lighten-1" to="#home">
                    <v-icon>
                        mdi-home
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="light-blue accent-4" to="#projects">Projects</v-btn>
                <v-btn color="grey lighten-1" to="#footer">Contact</v-btn>
        </v-app-bar>
        <v-app-bar color="grey darken-4" dense class="hidden-md-and-up" fixed>
            <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-list nav dense>
                <v-list-item-group active-class="grey lighten-1--text text--accent-4">
                    <v-list-item to="#home">
                    Home
                    </v-list-item>
                    <v-list-item to="#projects">
                    Projects
                    </v-list-item>
                    <v-list-item to='#footer'>
                    Contact
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Portfolio Norman',
            drawer: false,
            items: [
                { title: 'Menu', icon: "mdi-cash-multiple"},
                { title: 'Sign In', icon: "mdi-cash-multiple" },
                { title: 'Join', icon: "mdi-cash-multiple" }
            ]
        }
    },
    watch: {
        group() {
            this.drawer = false;
        }
    }
};
</script>

<style>

</style>