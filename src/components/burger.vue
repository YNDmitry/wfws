<template>
  <div class="window__burger" v-if="open">
    <!-- <button type="button" class="popup__close" @click="$emit('close')">
      Закрыть
    </button> -->
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
