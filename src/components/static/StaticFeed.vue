<script>
import axios from 'axios'

export default {  
  props: {
    endpoint: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      entities: [],
    };
  },
  created() {
    // Fetch initial data.
    this.fetch();  
  },
  methods: {   
    async fetch() {
      const { data } = await axios.get(this.endpoint);           
      this.entities = data;     
    },
  },
    render() {
      return this.$scopedSlots.default({
        entities: this.entities,
      });
    },
};
</script>
