<template>
  <div
     class="o-container o-container--m o-vertical-spacing o-vertical-spacing--xxl"
    :class="$style.main"
  >
    <h1>
      Dynamic Content
    </h1>
    <SwitchTheme/>
    <NewsFeed/>
  </div>
</template>

<script>
import SwitchTheme from './components/SwitchTheme.vue';
import NewsFeed from './components/NewsFeed.vue';

export default {
  name: `App`,
  components: {
    SwitchTheme,
    NewsFeed,
  },
};
</script>

<style lang="scss">
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--m,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xl,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
</style>

<style lang="scss" module>
@import './assets/scss/settings/**/*';

.main {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
