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
              {{tempCardData.dataObject.content}} <br/>
            </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
  </div>
</template>

<script>
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
        data: [],
        dataObject: {}
      },
    };
  },
  computed: {
    setCardData: function() {
      console.log(this.props)
      let e = this.component[0] 
      let c = this.props[0]
      console.log(c)
      this.tempCardData.dataObject.content = c.content
      this.tempCardData.dataObject.value = c.id
      this.tempCardData.dataObject.headline = c.headline
      this.tempCardData.dataObject.date = c.date     
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