<template>
  <v-container id="home" class="mt-5">
    <v-row>
      <v-col md="12">
        <v-sheet>
          <v-row class="minit-row-color">
            <v-col md="8" cols="12">
              <h1 class="title">
                WELCOME TO<br />
                <span class="min-it">M</span>IN
                <span class="min-it">I</span>NFORMATION
                <span class="min-it">T</span>ECHNOLOGY
              </h1>
              <p class="p-text">
                "MIN IT" is a dynamic software company that specializes in
                creating innovative solutions to simplify and enhance your IT
                experience. From streamlining processes to developing
                cutting-edge applications, MIN IT is dedicated to minimizing
                complexities and maximizing efficiency in the world of
                technology.
              </p>
              <div class="d-flex ms-5 mt-8 mb-15">
                <v-row>
                  <v-col md="5" sm="5" xl="3">
                    <v-btn
                      size="x-large"
                      prepend-icon="mdi-check-circle"
                      rounded="xl"
                      color="#000"
                    >
                      Start with Min it</v-btn
                    >
                  </v-col>
                  <v-col md="4" sm="4" xl="3">
                    <v-btn
                      size="x-large"
                      rounded="xl"
                      color="#ee1f3f"
                      class="ms-2"
                      prepend-icon="mdi-github"
                      append-icon="mdi-open-in-new"
                      >Explore More</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col class="py-5" md="4">
              <v-img
                :width="1500"
                aspect-ratio="20/15"
                class="float-right"
                cover
                src="https://i.postimg.cc/Hkbq3LJC/web-design.gif"
              ></v-img>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
  .title {
    font-size: 35px !important;
  }
}
.title {
  font-size: 55px;
  line-height: 1.25;
  font-weight: 700;
  margin: 0 auto;
  padding: 100px 100px 0px 25px;
  /* background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

.min-it {
  /* background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
   */
  background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #ee1f3f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.p-text {
  font-size: 20px;
  text-align: justify;
  letter-spacing: 1px;
  padding: 29px;
}
.minit-row-color {
  background: #fdfdff;
  /* background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff); */
  /* height: 700px !important; */
}
</style>