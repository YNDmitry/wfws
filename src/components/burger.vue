<template>
  <div class="window__burger" v-if="open">
    <div class="burger-active__list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
    },
  },
};
</script>
