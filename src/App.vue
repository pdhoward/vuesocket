<template>
  <div class="container">
     <div class="row">        
        <div class="col" style="width:70%; margin: 0 auto;">
          <news-feed/>
        </div>        
      </div>       
  </div>
</template>

<script>
import SwitchTheme from './components/SwitchTheme.vue';
import NewsFeed from './components/NewsFeed.vue';

export default {
  name: `App`,
  components: {
    'switch-theme': SwitchTheme,
    'news-feed': NewsFeed,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 { 
  text-align: center;
}

</style>