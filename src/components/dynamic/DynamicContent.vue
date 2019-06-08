<template>
  <div class="mx-auto" >
      <Component
          :is="setCardData"   
          v-bind="props"
       />       
       <div class="card mb-3"              
            :class="[primary, secondary]">
          <img class="card-img-top" 
               src="../../assets/logo.png"
               alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">
              {{tempCardData.dataObject.label}} <br/>
              {{tempCardData.dataObject.value}} <br/>
              {{tempCardData.dataObject.date}} <br/>
            </h5> 
            <p class="card-text">
              {{tempCardData.dataObject.headline}} <br/>
              {{tempCardData.dataObject.content}} <br/>
            </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    component: {
      required: true,
      type: Array,
    },
    props: {
      default: () => ([]),
      type: Array,
    }
  },  
  data() {
    return {
      tempCardData: {
        chart: {
          caption: "Hourly Temperature",
          captionFontBold: "0",
          captionFontColor: "#000000",
          captionPadding: "30",
          baseFont: "Roboto",
          chartTopMargin: "30",
          showHoverEffect: "1",
          theme: "fusion",
          showaxislines: "1",
          numberSuffix: "°C",
          anchorBgColor: "#6297d9",
          paletteColors: "#6297d9",
          drawCrossLine: "1",
          plotToolText: "$label<br><hr><b>$dataValue</b>",
          showAxisLines: "0",
          showYAxisValues: "0",
          anchorRadius: "4",
          divLineAlpha: "0",
          labelFontSize: "13",
          labelAlpha: "65",
          labelFontBold: "0",
          rotateLabels: "1",
          slantLabels: "1",
          canvasPadding: "20"
        },
        theme: {

        },
        data: [],
        dataObject: {}
      },
    };
  },   
  methods: mapMutations(['switchTheme']),
  computed: {
    setCardData: function() {
      
      let e = this.component[0] 
      let c = this.props[0]
      
      console.log(`Value of Data Object`)
      console.log(e)
      console.log(c)
      this.switchTheme(e.theme)
      this.tempCardData.dataObject.content = c.data.content
      this.tempCardData.dataObject.value = c.data.id
      this.tempCardData.dataObject.headline = c.data.headline
      this.tempCardData.dataObject.date = c.data.date
    },
    ...mapState(['themeName', 'primary', 'secondary']),    
  },
  created(){
    console.log(`Store State`)  
    console.log(this.$store.state.themeName);
    console.log(this.$store.state.primary);
    console.log(this.$store.state.secondary);
   },
   
}
</script>

<style>

.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>