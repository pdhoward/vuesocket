<template>
  <framelivefeed     
    v-slot="{ entities: news }"
    :endpoint="endpoint"
  >
      <div> 
        <ul >
          <li
            v-for="newsEntity in news"
            :key="newsEntity.Content[0].id"
          >
            <content-file
              :component="newsEntity.Experiences"
              :props="newsEntity.Content"
            />
          </li>
        </ul>
      </div>
  </framelivefeed>
</template>

<script>
import FrameLiveFeed from './FrameLiveFeed.vue'
import ContentFile from './ContentFile.vue'

export default {  
  components: {   
    'framelivefeed': FrameLiveFeed,
    'content-file': ContentFile
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
  padding: 0;
  margin: 25px 50px 25px;
  list-style: none; 
}
</style>
