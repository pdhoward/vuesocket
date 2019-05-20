<script>
import axios from 'axios'
import ws from '../utils/ws';

export default {
  name: `FrameLiveFeed`,
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

    // Listen for new data.
    
    ws.onmessage = (e) => {
      console.log(`HELLO FROM WEBSOCKETS IN FRAMEFEED `)      
      const message = JSON.parse(e.data);      
      console.log(`THIS OBJECT`)
      console.log(this)
      this[message.type.toLowerCase()](message.entity);
    };
  
  },
  methods: {
    add(entity) {
      if (this.entities.find(x => x.data.id === entity.data.id)) return;
      this.entities = [entity, ...this.entities];
    },
    update(entity) {
      this.entities = this.entities.map((x) => {
        if (x.data.id === entity.data.id) return entity;
        return x;
      });
    },
    hello(entity) {
      console.log(`Hello ${entity}`)
    },
    async fetch() {
      const { data } = await axios.get(this.endpoint);      
      this.entities = data;
      console.log(`Hello from Fetch`)
      console.log(this.entities)
    },
  },
  render() {
    return this.$scopedSlots.default({
      entities: this.entities,
    });
  },
};
</script>
