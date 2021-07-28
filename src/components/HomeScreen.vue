<template>
<div class="home-screen" id="home">
    <v-layout fill-height align-center>
        <v-container>
              <v-row justify="center" align="center">
                  <v-sheet class="radius" color="grey lighten-2" rounded="circle" elevation="12">
                    <v-avatar size="175" shaped rounded="true">
                        <img src="../assets/img/Norman_Avatar.png">
                    </v-avatar>
                </v-sheet>
            </v-row>
            <v-row justify="center" align="center">
                <div class="display-2 font-weight-black white--text text-xs-center">Norman Lüring</div>
            </v-row>
            <v-row justify="center" align="center">
                <div class="display-1 white--text text-xs-center hidden-sm-and-down">Software Developer | BPMN Enthusiast | Technologist</div>
                <div class="display-1 white--text text-xs-center hidden-md-and-up">Software Developer | <br> BPMN Enthusiast | <br> Technologist </div>
            </v-row>
        </v-container>  
    </v-layout>
</div>
</template>

<script>
export default {
    name: 'HomeScreen'
}
</script>

<style scoped>
    .home-screen {
        background: url("../assets/img/background_homescreen.jpg");
        background-size: cover;
        background-color: #000000;
        height: 550px;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>