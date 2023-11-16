<template>
  <v-container id="portfolio" class="mt-10 mb-5">
    <h2 class="minit-title">Project Portfolio</h2>
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">Landscape</v-tab>
        <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <v-row>
            <v-col v-for="i in 12" :key="i" md="3">
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
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
  }),
};
</script>
<style scoped>
.minit-title {
  color: #242020;
  font-size: 50px;
  font-weight: bold;
}
</style>