<template>
  <v-container id="contact" class="mt-10 mb-5">
    <v-row>
      <v-col md="12" xl="6" cols="12">
        <v-card class="p-5 minit-title" title="Contact Us">
          <v-text-field
            v-model="first"
            color="primary"
            label="First name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="last"
            color="primary"
            label="Last name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            variant="underlined"
          ></v-text-field>

          <v-textarea label="Message"></v-textarea>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="success">
              Send a message

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="12" xl="6" cols="12">
        <v-card class="p-5 minit-title" title="Google map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187882077!2d90.33728802520291!3d23.78097572833174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700145743352!5m2!1sen!2sbd"
            width="750"
            height="445"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
    terms: false,
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