<template>
  <v-app class="background">
    <v-main class="content">
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <Card />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",

  components: {
    Card,
  },

  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.background
  z-index: 1
  background: url('https://www.metalzone.fr/wp-content/uploads/2020/06/currents-the-way-it-ends-e1591523040955.jpg') no-repeat center center / cover !important
.content
  backdrop-filter: blur(10px)
</style>
