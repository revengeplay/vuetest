<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
            v-model="email"
            label="Regular"
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            label="Regular"
          ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  }
}
</script>
