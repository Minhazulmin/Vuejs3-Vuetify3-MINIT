<template>
  <v-container id="teams" class="mt-10 mb-5">
    <h2 class="minit-title">Our Development Team</h2>
    <v-row>
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
      <v-col md="5">
        <v-alert elevation="2" class="p-text" color="white">
          The software development teams at "MIN IT" are a powerhouse of talent,
          creativity, and technical proficiency. Comprising skilled
          professionals in various domains such as front-end and back-end
          development, UI/UX design, and quality assurance, these teams work
          cohesively to craft cutting-edge software solutions. Fueled by a
          passion for innovation, they thrive on challenges, embracing the
          latest technologies and industry best practices. With a commitment to
          delivering excellence, "MIN IT" software development teams are at the
          forefront of creating robust, user-friendly, and scalable applications
          that cater to the evolving needs of clients and users.
          <br />
          For More Details Please Contact with us.
        </v-alert>
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