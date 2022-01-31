<template>
  <component :is="layout">
    <slot />
  </component>
  <app-footer></app-footer>
</template>

<script>
import mainLayout from "./layouts/mainLayout.vue";
import studyLayout from "./layouts/studyLayout.vue";
import appFooter from "./components/appFooter.vue";
export default {
  components: {
    mainLayout,
    studyLayout,
    appFooter,
  },

  data() {
    return {
      layout: null,
    };
  },

  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "mainLayout";
      }
    },
  },
};
</script>
