<template>
  <v-app dark>
    <v-app-bar app color="transparent" class="grey--text text--darken-4">
      <div class="d-flex align-center ml-6">Upgrade your life</div>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <span class="mr-2"> </span>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app color="transparent">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
