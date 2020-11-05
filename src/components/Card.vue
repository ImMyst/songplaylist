<template>
  <v-card class="mx-auto rounded-xl" max-width="400" elevation="12">
    <v-img
      src="https://www.metalzone.fr/wp-content/uploads/2020/06/currents-the-way-it-ends-e1591523040955.jpg"
      style="object-fit: cover"
    />
    <v-card-text class="gradient">
      <v-row justify="center" align="center">
        <v-col cols="3">
          <v-btn
            v-if="!playing"
            @click="playMusic"
            class="mx-2"
            fab
            outlined
            large
            color="white"
          >
            <v-icon light x-large>mdi-play</v-icon>
          </v-btn>
          <v-btn
            v-else
            @click="pauseMusic"
            class="mx-2"
            fab
            outlined
            large
            color="white"
          >
            <v-icon light x-large>mdi-pause</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <p class="headline lime--text accent-4 my-0 break">
            {{ salut | truncate(15) }}
          </p>
          <p class="my-0 white--text title break">{{ salut | truncate(18) }}</p>
        </v-col>
        <v-col cols="3" class="d-flex flex-column justify-space-between">
          <v-btn
            @click="nextMusic"
            class="mx-2"
            small
            fab
            outlined
            color="white"
            ><v-icon large light>mdi-skip-next</v-icon></v-btn
          >
          <v-btn
            @click="previousMusic"
            class="mx-2 mt-4"
            small
            fab
            outlined
            color="white"
            ><v-icon large light>mdi-skip-previous</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-slider
        color="lime accent-4"
        track-color="blue-grey darken-4"
        :max="music.duration ? music.duration : 500"
        v-model="currentDuration"
      />
      <v-row justify="space-between" class="px-4 mt-n6 white--text body-1">
        <span>{{ datingTime }}</span>
        <span>{{ duration !== null ? duration : "00:00:00" }}</span>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      playing: false,
      salut: "Don't Hurt Yourself",
      music: new Audio(require("../assets/music/Monsters.mp3")),
      duration: null,
      currentDuration: 0,
      durationInterval: null,
    };
  },
  computed: {
    datingTime() {
      return new Date(this.currentDuration * 1000).toISOString().substr(11, 8);
    },
  },
  methods: {
    playMusic() {
      this.music.play();
      this.playing = !this.playing;
      this.duration = new Date(this.music.duration * 1000)
        .toISOString()
        .substr(11, 8);
      this.durationInterval = setInterval(() => {
        this.currentDuration = this.currentDuration += 1;
      }, 1000);
    },
    pauseMusic() {
      this.music.pause();
      this.playing = !this.playing;
      clearInterval(this.durationInterval);
    },
    nextMusic() {},
    previousMusic() {},
  },
};
</script>

<style lang="sass" scoped>
.gradient
  background: linear-gradient(45deg, rgba(110,110,109,1) 50%, rgba(153,161,164,1) 70%, rgba(194,204,208,1) 81%)
.break
  word-break: break-word
</style>
