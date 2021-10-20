<template>
  <div :style="background">
    <v-layout class="mx-2">
      <v-row class="text-center">
        <v-col cols="12"  class="font-weight-bold">
          CONTACT
        </v-col>
        <v-col cols="12">
          Email: chambrenoire.redaction@gmail.com
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'Qui',
  components: {},
  data() {
    return {
      background: {
        backgroundColor: "white"
      },
    }
  },

  methods: {}
}
</script>

<style>

</style>