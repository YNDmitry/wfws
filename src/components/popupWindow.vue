<template>
  <div class="window-modal__wrapper" v-if="open">
    <div class="window-modal__inner">
      <div class="window-modal__content">
        <button
          type="button"
          class="popup-window__close"
          @click="$emit('close')"
        ></button>
        <div class="popup-window__info">
          <h2>{{ title }}</h2>
          <div v-if="body.html" v-html="body.html"></div>
        </div>
      </div>
    </div>

    <div class="window-modal__overlay" @click="$emit('close')"></div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
    },
    title: {
      type: String
    },
    body: {
      type: Object
    }
  },
};
</script>
