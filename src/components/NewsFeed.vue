<template>
  <FrameLiveFeed
    v-slot="{ entities: news }"
    endpoint="http://localhost:8200/news"
  >
    <ul class="o-vertical-spacing--xl">
      <li
        v-for="newsEntity in news"
        :key="newsEntity.data.id"
      >        
        <ContentCard
          :component="newsEntity.component"
          :props="newsEntity.data"
        />
      </li>
    </ul>
  </FrameLiveFeed>
</template>

<script>
import FrameLiveFeed from './FrameLiveFeed.vue';
import ContentCard from './ContentCard.vue';

export default {
  name: `NewsFeed`,
  components: {   
    FrameLiveFeed,
    ContentCard
  } 
};
</script>
