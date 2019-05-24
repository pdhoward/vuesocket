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
import NewsFeed from '../../components/dynamic/NewsFeed.vue';

export default {
  name: `ContentDynamic`,
  components: {    
    'news-feed': NewsFeed,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 { 
  text-align: center;
}