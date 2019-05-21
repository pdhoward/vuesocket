<template>
  <framelivefeed     
    v-slot="{ entities: news }"
    :endpoint="endpoint"
  >
    <ul >
      <li
        v-for="newsEntity in news"
        :key="newsEntity.data.id"
      >
        <content-card
          :component="newsEntity.component"
          :props="newsEntity.data"
        />
      </li>
    </ul>
  </framelivefeed>
</template>

<script>
import FrameLiveFeed from './FrameLiveFeed.vue'
import ContentCard from './ContentCard.vue'

export default {  
  components: {   
    'framelivefeed': FrameLiveFeed,
    'content-card': ContentCard
  },
  data() {
    return {
      endpoint: "http://localhost:3100/news",
      devendpoint: "http://localhost:3100/news",
      prodendpoint: "https://chaotic.ngrok.io/news"
    }
  },
  methods: {
    setEnv: function() {        
      if (process.env.NODE_ENV === 'development') {
        console.log(`DEVELOPMENT ENDPOINT SET`)
        this.endpoint = this.devendpoint
      } else {
        console.log(`PRODUCTION ENDPOINT SET`)
        this.endpoint = this.prodendpoint
      }     
    },
  },
  beforeMount(){
    this.setEnv()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul { 
    list-style: none; 
  }
</style>
