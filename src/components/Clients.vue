<template id="clients" class="mt-10 mb-5">
  <v-container>
    <h2 class="minit-title">Our Happy Clients</h2>
    <v-row>
      <v-col sm="12" md="6" cols="12">
        <v-list lines="three">
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <template v-slot:prepend>
              <v-avatar class="me-4 mt-2" rounded="0">
                <v-img :src="item.image" cover></v-img>
              </v-avatar>
            </template>

            <v-list-item-title
              class="text-uppercase font-weight-regular text-caption"
              v-text="item.category"
            ></v-list-item-title>

            <div v-text="item.title"></div>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col md="6">
        <v-row>
          <v-col
            v-for="(client, i) in clients"
            :key="i"
            class="d-flex child-flex"
            sm="6"
            md="4"
            xl="3"
            cols="6"
          >
            <v-img
              :src="client.image"
              :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
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
<script>
export default {
  data() {
    return {
      items: [
        {
          image: "https://cdn.vuetifyjs.com/docs/images/chips/globe.png",
          title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
          category: "Travel",
          keyword: "Drinks",
        },
        {
          image: "https://cdn.vuetifyjs.com/docs/images/chips/cpu.png",
          title:
            "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
          category: "Technology",
          keyword: "Phones",
        },
        {
          image: "https://cdn.vuetifyjs.com/docs/images/chips/rocket.png",
          title: "How to Get Media Mentions for Your Business",
          category: "Media",
          keyword: "Social",
        },
        {
          image: "https://cdn.vuetifyjs.com/docs/images/chips/bulb.png",
          title:
            "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
          category: "Technology",
          keyword: "Military",
        },
        {
          image: "https://cdn.vuetifyjs.com/docs/images/chips/raft.png",
          title: "Degrees of Freedom and Sudoko",
          category: "Travel",
          keyword: "Social",
        },
      ],
      clients: [
        {
          image:
            "https://media.istockphoto.com/id/1327030513/vector/letter-c-logo-design-template-with-gradient-color-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FvRJtCkdierQNk0xjgdfSYyHay6_I4DwYnn8ythgeAc=",
        },
        {
          image:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg?ts=1561532453",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/initial-letter-mw-wm-with-arrows-right-left-negative-space-logo-design-inspiration_573037-456.jpg",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/design-logo-icon-abstract_589268-64.jpg",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/s-symbol-logo-design_9955-271.jpg",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/letter-h-logo-design-inspiration_587296-251.jpg?w=2000",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/f-tech-logo-design_584524-290.jpg",
        },
        {
          image:
            "https://img.freepik.com/premium-vector/abstract-hexagon-logo-cube-logo-vector-creative-geometric-logo-design-concept_53295-498.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais",
        },
      ],
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 425px) {
  .minit-title {
    font-size: 35px !important;
  }
}
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