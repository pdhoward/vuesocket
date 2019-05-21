<template>
  <div class="main">
     <h1>
      Dynamic Content
     </h1>
     <div class="widget" > 
        <switch-theme/>
     </div>
     <div class="card-columns feed">
        <news-feed/> 
    </div>   
  </div>
</template>

<script>
import SwitchTheme from './components/switchtheme.vue';
import NewsFeed from './components/newsfeed.vue';

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

.main {
  padding-top: 25px;
  padding-bottom: 25px;
  margin: auto;
  width: 80%;
}
h1 {
  margin: 40px 0 0;
  text-align: center;
}
.widget {
 margin: 25px;
}

.feed {
 margin: 25px
}

.theme-tester {
  height: 100px;
  border-width: 20px;
  border-style: solid;
}

@media (min-width: 576px) {
    .card-columns {
        column-count: 1;
    }
}

@media (min-width: 768px) {
    .card-columns {
        column-count: 2;
    }
}

@media (min-width: 992px) {
    .card-columns {
        column-count: 3;
    }
}

@media (min-width: 1200px) {
    .card-columns {
        column-count: 4;
    }
}
</style>