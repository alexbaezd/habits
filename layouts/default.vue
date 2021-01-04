<template>
  <v-app dark>
    <v-app-bar app color="transparent" class="grey--text text--darken-4">
      <div class="d-flex align-center ml-6">Upgrade your life</div>
      <v-spacer></v-spacer>
      <!-- TODO: resolver method dialog custom event or vuex
      <v-btn color="#243136" class="white--text" @click="dialog = true">
          <v-icon left>mdi-plus</v-icon>Add Habit
      </v-btn> -->
      <v-spacer></v-spacer>
      <span class="mr-2">Alex </span>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

  <!--  <v-footer
      :absolute="!fixed"
      app
      color="transparent"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>
