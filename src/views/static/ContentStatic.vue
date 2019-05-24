<template>
    <div class="container">
     <div class="row">        
        <div class="col" style="width:70%; margin: 0 auto;">
          <static-app/>
        </div>        
      </div>       
    </div>
</template>
<script>
import StaticApp from '../../components/static/StaticApp.vue';

export default {
  name: `ContentStatic`,
  components: {    
    'static-app': StaticApp,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h1 { 
  text-align: center;
}