 <template>
  <v-app>
    <Header />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>
<script>
import Header from "../components/Hader.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>
 
