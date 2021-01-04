<template>
    <div
      class="bar"
      :style="{
        width: getValue + '%',
      }"
    >
  </div>
</template>

<script>
export default {
  props: {
    complete: {
      type: Number,
      required: true,
    },
    initial: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getValue() {
      return 100 - this.complete * (100 / this.initial);
    },
  },
};
</script>

<style>
.bar {
  background: #34495e;
  height: 110px;
  float: right;
  margin-top: -64px;
  border-radius: 0 4px 4px 0;

  transition: width ease-in-out 0.5s;
}
</style>
