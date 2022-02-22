<template>
  <div class="window__burger" v-if="open">
    <p class="burger-active__list">
      <slot></slot>
    </p>
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
