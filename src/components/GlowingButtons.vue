<template>
  <div v-if="!noHover">
    <VueGlow color="white"
             :intensity="3">
      <li class="mx-1 v-btn v-btn--depressed black"
             @mouseover="startHover"
             @mouseleave="endHover">
        <slot></slot>
      </li>
    </VueGlow>
  </div>
  <div v-else>
    <li class="mx-1 v-btn v-btn--depressed black"
        v-bind="size"
           @mouseover="startHover"
           @mouseleave="endHover">
      <slot></slot>
    </li>
  </div>
</template>

<script>
import VueGlow from "vue-glow";

export default {
  name: "ToolbarButtons",
  components: {
    VueGlow,
  },
  data() {
    return {
      noHover: true,
      windowSize: {x: 0, y: 0},
    }
  },

  computed: {
    size () {
      const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {}
    }
  },

  methods: {
    startHover() {
      this.noHover = false
    },
    endHover() {
      this.noHover = true
    },
  },
}
</script>

<style scoped>

.v-btn::before {
  background-color: transparent;
}

</style>