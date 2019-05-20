<template>
  <div class="hello">
    <h1
      v-text="`Current theme: ${ themeName }`"
      :style="{color: primary}"
    />
    <button
      @click="switchTheme('red')"
      v-text="'red'"
    />
    <button
      @click="switchTheme('blue')"
      v-text="'blue'"
    />

    <div
      class="theme-tester"
      :style="{backgroundColor: primary, borderColor: secondary}"
    />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'SwitchTheme',
    computed: mapState(['themeName', 'primary', 'secondary']),
    methods: mapMutations(['switchTheme']),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin: 40px 0 0;
  }

  .theme-tester {
    height: 100px;
    border-width: 20px;
    border-style: solid;
  }
</style>
