<script>

import ws from '../../utils/ws';

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
    ws.onmessage = (e) => {          
      const message = JSON.parse(e.data);     
      this[message.type.toLowerCase()](message.entity);
    };  
  },
  methods: {
    add(entityArr) {
      let entity = [...entityArr]
      console.log(entity)
     // if (this.entities.find(x => x.data.id === entity.data.id)) return;
     // this.entities = [entity, ...this.entities];
     this.entities = [...entity]
    },
    update(entity) {
      this.entities = this.entities.map((x) => {
        if (x.data.id === entity.data.id) return entity;
        return x;
      });
    },    
  },
  render() {
    return this.$scopedSlots.default({
      entities: this.entities,
    });
  },
};
</script>
