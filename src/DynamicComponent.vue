<template>
 <div>
    <Component
      :is="computedComponent"   
      v-bind="props"
    />
    {{computeComponent}}
  </div>
</template>

<script>
import externalComponent from './utils/external-component';

export default {
  name: `DynamicComponent`,
  props: {
    component: {
      required: true,
      type: Object,
    },
    props: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      computeComponent: null,
    };
  },
  computed: {
    computedComponent: function(){
      console.log(`HELLO FROM COMPUTED IN DYNAMIC`)
      console.log(`--- this function fired ----`)
      this.computeComponent = () => {
        console.log(`---and computed component fired ----`)
        externalComponent(this.component.url)
      }
    }
  }
  /* 
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = ``) {
        if (newComponent.url === prevComponent.url) return;

        this.computedComponent = () => externalComponent(this.component.url);
      },
    },  
  },
  */
};
</script>
