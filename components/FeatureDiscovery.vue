<template>
  <div class="featureDiscovery" :class="[positionClass, color, {'animateIn': value}]" :style="{width: `${size}px`, height: `${size}px`}">
    <v-layout row wrap :class="`justify-${left ? 'start' : 'end'} align-${top ? 'baseline' : 'end'}`" fill-height>
      <v-flex fill-height :style="{maxWidth: `${size - (size * 0.15)}px`, maxHeight: `${size - (size * 0.2)}px`}">

        <v-layout column fill-height class="pa-2">
          <v-flex d-flex text-xs-center :class="`${left && !top ? 'mr-4' : !left && !top ? 'ml-4 mt-3' : ''} align-${top ? 'end' : 'end'}`">
            <slot name="title"></slot>
          </v-flex>
          <v-flex d-flex text-xs-center align-center>
            <slot name="text"></slot>
          </v-flex>
          <v-flex d-flex text-xs-center :class="`${left && top ? 'mr-4' : !left && top ? 'ml-4' : ''}`" align-baseline justify-end>
            <slot name="actions"></slot>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props:{
      value: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    size: {
      default: 400
    },
    color: {
      type: String,
      default: 'primary'
    }
    },
    model:{
      prop: 'value',
      event: 'update'
    },
    data(){
      return{
        animateIn: false
      }
    },
    computed:{
      positionClass () {
        let {top, left} = this
        let y = top ? 'top' : 'bottom'
        let x = left ? 'left' : 'right'
        return `featureDiscovery${y}${x}`
      }
    }
  }
</script>

<style>
  .featureDiscoveryTitle {
  margin-top: 30%;
  padding-left: 30%;
}
.featureDiscoveryContainer {
  padding: 20px;
  width: fit-content;
}
.animateIn {
  transform: translate3d(0, 0, 0)!important;
}
.featureDiscovery {
  overflow: hidden;
  transition: 300ms cubic-bezier(0.16, 0.61, 0.5, 1);
  position: fixed;
  height: 400px;
  width: 400px;
  z-index: 10;
}
.featureDiscoverybottomright {
  transform: translate3d(100%, 100%, 0);
  border-radius: 100% 0 0 0;
  bottom: 0;
  right: 0;
}
.featureDiscoverybottomleft {
  transform: translate3d(-100%, 100%, 0);
  border-radius: 0 100% 0 0;
  bottom: 0;
  left: 0;
}
.featureDiscoverytopright {
  transform: translate3d(100%, -100%, 0);
  border-radius: 0 0 0 100%;
  top: 0;
  right: 0;
}
.featureDiscoverytopleft {
  transform: translate3d(-100%, -100%, 0);
  border-radius: 0 0 100% 0;
  top: 0;
  left: 0;
}
</style>
