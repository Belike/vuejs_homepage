<template>
<v-footer dark padless id="footer">
    <v-card flat tile class="grey darken-4 white--text text-center" dark dense width="100%">
      <v-card-text>
        <v-btn v-for="contactLink in contactLinks" :key="contactLink" class="mx-4 white--text pt-0 grey-darken-4" :href="contactLink.link" text>
          <v-icon x-large>
            {{ contactLink.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        <v-dialog v-model="dialog" text>
          <template v-slot:activator="{on, attrs}">
            <v-btn text v-bind="attrs" v-on="on">
              Legal Disclosure
          </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 white--text grey lighten-2">
              Legal Disclosure
            </v-card-title>
            <v-card-text>
             <home-impressum></home-impressum>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal accent-4" text @click="dialog=false">Back</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Norman Lüring</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import HomeImpressum from '../components/HomeImpressum.vue'
export default {
  components: { HomeImpressum },
    name : 'HomeFooter',
    data: () => ({
            contactLinks: [
                {
                    name: "Email",
                    value: "belike1337@gmail.com",
                    link: "mailto:belike1337@gmail.com",
                    icon: "mdi-email"
                },
                {
                    name: "LinkedIn",
                    value: "Norman Lüring",
                    link: "https://www.linkedin.com/in/norman-l%C3%BCring-892573145",
                    icon: "mdi-linkedin"
                },
                {
                    name: "Github",
                    value: "Belike",
                    link: "https://github.com/Belike/",
                    icon: "mdi-github"
                },
                {
                    name: "Facebook",
                    value: "Norman Lü",
                    link: "https://www.facebook.com/norman.lu.1/",
                    icon: "mdi-facebook"
                }
            ],
            dialog: false, 
            components: {
              HomeImpressum
            }
    }),
}
</script>

<style>

</style>