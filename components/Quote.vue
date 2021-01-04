
<template>
  <v-container class="d-flex flex-column align-start">
    <transition name="slide-fade">
      <div v-if="isShow">
        <blockquote class="blockquote text-quote font-weight-bold blue-grey--text text--darken-3">
          {{ currentQuote.text }}
        </blockquote>
        <p class="font-italic blue-grey--text text--darken-1 ml-8">
          {{ currentQuote.author || "unknown" }}
        </p>
      </div>
    </transition>
  </v-container>
</template>

<script>
export default {
  props: {
    currentQuote: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.v-application .blockquote{
  padding: 0;
  width: 450px;
}
.text-quote{
  font-size:1.25rem;
}
</style>
