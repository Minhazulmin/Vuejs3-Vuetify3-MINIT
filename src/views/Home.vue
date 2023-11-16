 <template>
  <v-main class="bg-light-lighten-3">
    <Banner />
    <About />
    <Services />
    <Portfolio />
    <Clients />
    <Teams />
    <Contact />
  </v-main>
</template>
 <script>
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import Portfolio from "../components/Portfolio.vue";
import Clients from "../components/Clients.vue";
import Teams from "../components/Teams.vue";
import Contact from "../components/Contact.vue";
export default {
  components: {
    Banner,
    About,
    Services,
    Portfolio,
    Teams,
    Clients,
    Contact,
  },
  data() {
    return {};
  },
};
</script>

 
 