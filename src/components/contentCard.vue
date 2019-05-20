<template>
  <div class="custom-card header-card card">
    <div class="card-body pt-0">    
    </div>    
  </div>
</template>

<script>
export default {
  props: ["cardData"],
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
      },
    };
  },
  methods: {
    setCardData: function() {
      var data = [];
      for (var i = 0; i < this.cardData.pubNow.length; i++) {
        var dataObject = {
          label: this.cardData.pubNow[i].label,
          value: this.cardData.pubNow[i].value
        };
        data.push(dataObject);
      }
      this.tempCardData.data = data;
    },
  },
  mounted: function() {
    this.setCardData();
  }, 
  watch: {
    cardData: {
      handler: function() {
        this.setCardData();                                    
      },
      deep: true
    },
  },
};
</script>

<style>
</style>