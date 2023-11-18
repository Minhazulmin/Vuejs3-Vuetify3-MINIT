<template>
  <v-container id="portfolio" class="mt-10 mb-5">
    <h2 class="minit-title">Project Portfolio</h2>
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">SOFTWARE DEVELOPMENT</v-tab>
        <v-tab :value="2">WENSITE DEVELOPMENT</v-tab>
        <v-tab :value="3">OTHER SERVICES</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <v-row>
            <v-col
              v-for="(portfolio, i) in portfolios"
              :key="i"
              sm="6"
              md="4"
              xl="3"
              cols="6"
            >
              <v-img
                :src="portfolio.image"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1/2"
              ></v-img>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);
</script>

<script>
export default {
  data: () => ({
    tab: null,
    portfolios: [
      {
        image:
          "https://s3-alpha.figma.com/hub/file/1083321664/2347ee8a-3d18-47aa-82e1-212ed1547beb-cover.png",
      },
      {
        image:
          "https://themeforest.img.customer.envatousercontent.com/files/463553935/Preview/02.Home_Two%28Online_Courses%29.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=54b14ae8e2984a071d584c8e44d0621b",
      },
      {
        image:
          "https://s3-alpha.figma.com/hub/file/3014355850/f15b13d8-a3e9-44b6-830e-33712a7134aa-cover.png",
      },
      {
        image:
          "https://themeforest.img.customer.envatousercontent.com/files/410978908/03_home_02.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=1dde4a4b8d7b8ea22c3376001f9af56f",
      },
      {
        image:
          "https://img.freepik.com/free-vector/hand-drawn-travel-agency-landing-page-template_23-2149362366.jpg",
      },
      {
        image:
          "https://www.uxcrush.com/wp-content/uploads/2023/06/figma-travel-landing-page-template-520x281.jpg",
      },
      {
        image:
          "https://uikitfree.com/wp-content/uploads/2020/04/Data-Storage-Website-Figma-Template-758x427.jpg",
      },
      {
        image:
          "https://themeforest.img.customer.envatousercontent.com/files/389659941/Preview+Image+Set+-+Update+v1/04_Corporate_Classic-01.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=23503c7bfdd05164755dea256533b9df",
      },
    ],
  }),
};
</script>
<style scoped>
@media only screen and (max-width: 425px) {
  .minit-title {
    font-size: 35px !important;
  }
}
.minit-title {
  color: #242020;
  font-size: 50px;
  font-weight: bold;
}
</style>