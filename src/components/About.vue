<template>
  <v-container id="about">
    <v-row>
      <v-col md="4">
        <!-- https://i.postimg.cc/63mckTY3/MIN-IT-ILLUSTRATION-WHITE.jpg -->
        <v-img
          :src="`https://i.postimg.cc/nzYqnrFZ/MIN-IT-ILLUSTRATION-BLACK.jpg`"
          :lazy-src="`https://picsum.photos/10/6?image=${5 * 5 + 10}`"
          cover
          elevation="6"
          class="bg-grey-lighten-2 shadow"
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
        <v-card
          max-width="600"
          title="MIN IT ON GITHUB"
          prepend-icon="mdi-github"
          append-icon="mdi-open-in-new"
          href="https://github.com/minhazulmin"
          target="_blank"
          rel="noopener"
        ></v-card>
      </v-col>
      <v-col md="8">
        <h2>
          <b> ALL ABOUT <span class="minit-color">MIN IT</span> </b>
        </h2>

        <v-alert elevation="2" class="p-text" color="white">
          <span class="min-it">MIN IT</span> is a dynamic software solutions
          company where you can take a services like
          <b class="min-it">
            SOFTWARE DEVELOPMENT,SOFTWARE ARCHITECTURE, WEB DESIGN, WEB
            DEVELOPMENT,APP DEVELOPMENT,GRAPHIC DESIGN, DIGITAL
            MARKETING,SEO,CLOUD SERVICE,DOMAIN AND HOSTING,VIDEO ADDS,ONLINE
            PROMOTIONS with all kind of online services</b
          >
          and freelancer based in Bangladesh and all over the world.
        </v-alert>

        <v-alert elevation="2" class="p-text mt-5" color="white">
          we have been building noteworthy software and websites for more than
          6+ years. For this time we had done all types of projects, Like
          <span class="min-it">
            University Management System(2),Tour Management System(5),
            E-commerce Management System(10), Personal Website(30+), Healthcare
            Website (10+),Shop and Beauty Website, Corporate Website etc.</span
          >
          we help convert a vision and an idea into meaningful and useful
          products. Having a sharp eye for product evolution helps me prioritize
          tasks, iterate fast and deliver faster. If you're interested in
          working with us, don't hesitate to hire contact with us.
        </v-alert>
      </v-col>
      <v-col md="12">
        <v-alert class="p-text" elevation="2" color="white">
          <b>Programming Languages and other tools that we are use in past</b
          ><br />
          Rest API ,PHP Laravel , Vue.js , Nuxt.js , Ajax , JavaScript ,
          Bootstrap 5 , HTML 5 , CSS 3 , JQuery , Github , Gitlab , cPanel , VPS
          Server ,Micro-Service,Docker,Postmant, MySQL ,Photoshop cc ,
          illustrator cc ,Figma
        </v-alert>
        <v-alert class="mt-5 p-text" elevation="2" color="white">
          <b>Programming Languages and other tools that we are use in past</b
          ><br />
          Rest API ,PHP Laravel , Vue.js , Nuxt.js , Ajax , JavaScript ,
          Bootstrap 5 , HTML 5 , CSS 3 , JQuery , Github , Gitlab , cPanel , VPS
          Server ,Micro-Service,Docker,Postmant, MySQL ,Photoshop cc ,
          illustrator cc ,Figma
        </v-alert>
        <v-alert class="mt-5 p-text" elevation="2" color="white">
          <b>Payment Gateway </b><br />
          Paypal,Stripe, SSL Ecommerce, Bkash ,Nogod and more.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.min-it {
  /* background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
   */
  /* background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #ee1f3f); */
  background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #041e2b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.minit-color {
  background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #ee1f3f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.p-text {
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 15px;
}
</style>