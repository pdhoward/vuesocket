<template>
  <div >    
      <Component
          :is="setCardData"   
          v-bind="props"
       />
       <div class="card border-primary mb-3" style="width: 20rem;">
       <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
          <div class="card-body">  
            <h5 class="card-title">
              {{tempCardData.dataObject.label}} <br/>
              {{tempCardData.dataObject.value}} <br/>
              {{tempCardData.dataObject.date}} <br/>
            </h5> 
            <p class="card-text">
              {{tempCardData.dataObject.headline}} <br/>
              {{tempCardData.dataObject.url}} <br/>
              {{tempCardData.dataObject.content}} <br/>
            </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    component: {
      required: true,
      type: Object,
    },
    props: {
      default: () => ({}),
      type: Object,
    }
  },
  components: {},
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
        data: [],
        dataObject: {}
      },
    };
  },
  computed: {
    setCardData: function() {        
      this.tempCardData.dataObject.label = this.component.name
      this.tempCardData.dataObject.url = this.component.url
      this.tempCardData.dataObject.content = this.props.content
      this.tempCardData.dataObject.value = this.props.id
      this.tempCardData.dataObject.headline = this.props.headline
      this.tempCardData.dataObject.date = this.props.date     
    },
  } 
};
</script>

<style>
.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>