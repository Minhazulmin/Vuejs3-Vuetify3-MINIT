<template id="clients" class="mt-10 mb-5">
  <v-container>
    <h2 class="minit-title">Our Happy Clients</h2>
    <v-row>
      <v-col md="5">
        <v-banner
          color="pink-darken-1"
          elevation="2"
          icon="mdi-account-box"
          lines="two"
          class="p-text"
        >
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>

          <v-banner-text>
            "MIN IT is a software company that consistently delivers exceptional
            solutions. Their innovative approach and attention to detail have
            made them a trusted partner for our digital transformation needs."
          </v-banner-text>
        </v-banner>
        <v-banner
          color="pink-darken-1"
          elevation="2"
          icon="mdi-account-box"
          lines="two"
          class="p-text mt-5"
        >
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>

          <v-banner-text>
            "Impressed with MIN IT's software expertise! Their dedicated team
            showcases a rare blend of technical proficiency and creative flair,
            resulting in solutions that exceed expectations."
          </v-banner-text>
        </v-banner>
        <v-banner
          color="pink-darken-1"
          elevation="2"
          icon="mdi-account-box"
          lines="two"
          class="p-text mt-5"
        >
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>

          <v-banner-text>
            "MIN IT stands out for their commitment to quality. The software
            they develop is not only functional but also user-friendly,
            reflecting a deep understanding of both technology and user
            experience."
          </v-banner-text>
        </v-banner>
        <v-banner
          color="pink-darken-1"
          elevation="2"
          icon="mdi-account-box"
          lines="two"
          class="p-text mt-5"
        >
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>

          <v-banner-text>
            "Choosing MIN IT was a game-changer for our business. Their software
            development teams are agile, responsive, and have a knack for
            turning complex ideas into seamless, efficient applications."
          </v-banner-text>
        </v-banner>
      </v-col>
      <v-col md="7">
        <v-row>
          <v-col v-for="n in 8" :key="n" class="d-flex child-flex" cols="3">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.p-text {
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 15px;
}
.minit-title {
  color: #242020;
  font-size: 50px;
  font-weight: bold;
}
</style>