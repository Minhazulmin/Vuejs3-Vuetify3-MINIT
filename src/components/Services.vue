<template>
  <v-container id="services" class="mt-10 mb-5">
    <h2 class="minit-title">All About Services</h2>
    <v-row>
      <v-col
        v-for="(service, i) in services"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xl="3"
      >
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="250"
            :src="service.image"
            :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ service.title }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ service.package_type }}</span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.5"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1"></div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    services: [
      {
        title: "Software Development",
        image:
          "https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/software-development-costs-1128x635.jpg",
        package_type: "Premium Package",
      },
      {
        title: "Software Architecture",
        image:
          "https://assets-global.website-files.com/5b6901669b93d7837e36dc4c/615e16ddc6a79521482a22ea_applicationarchitecturefeaturedimage-1.png",
        package_type: "Basic Package",
      },
      {
        title: "Software Solutions",
        image:
          "https://www.bdsol.co.za/wp-content/uploads/2018/05/Bytes-June-wk3-SoftwareSolutions.jpeg",
        package_type: "Basic Package",
      },
      {
        title: "Web Development",
        image: "https://www.adlibweb.com/wp-content/uploads/2021/12/image1.jpg",
        package_type: "Premium Package",
      },
      {
        title: "Web Design",
        image:
          "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais",
        package_type: "standard Package",
      },
      {
        title: "Digital Marketing",
        image: "https://oyostudio.com.au/wp-content/uploads/2023/03/s2-2.jpg",
        package_type: "Basic Package",
      },
      {
        title: "Android Development",
        image:
          "https://5.imimg.com/data5/FH/UC/MY-9120378/android-app-development-company-500x500.png",
        package_type: "Basic Package",
      },
      {
        title: "SEO Service",
        image:
          "https://www.seoworks.com/wp-content/uploads/2021/01/seo-services-process-outline.jpg",
        package_type: "Basic Package",
      },
      {
        title: "Video Adds",
        image: "https://www.gethow.org/wp-content/uploads/2020/07/video.jpg",
        package_type: "Basic Package",
      },
      {
        title: "Domain and Hosting",
        image:
          "https://www.elegantthemes.com/blog/wp-content/uploads/2020/01/difference-between-domain-and-web-hosting-featured-image.jpg",
        package_type: "Basic Package",
      },
      {
        title: "Networking and IOT",
        image:
          "https://i.insider.com/5644a9691123143c008b4765?width=1000&format=jpeg&auto=webp",
        package_type: "Basic Package",
      },
      {
        title: "Other Online Services",
        image: "https://m.hkjc.com/images/service/service-img-chatbot.png",
        package_type: "Basic Package",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
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