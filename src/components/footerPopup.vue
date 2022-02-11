<template>
  <div class="modal__wrapper" v-if="open">
    <div class="vue-modal-inner">
      <div class="vue-modal-content">
        <button type="button" class="popup__close" @click="$emit('close')">
          Закрыть
        </button>
        <p class="popup-footer__info">
          <slot></slot>
        </p>
      </div>
    </div>

    <div class="vue-modal-overlay" @click="$emit('close')"></div>
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

<style lang="scss">
* ::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modal__wrapper {
  visibility: visible;
  overflow: auto;
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  bottom: 0;
  right: 0;
  padding: 30px 25px;
  margin: 0 10px;
}

.vue-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 150;
}

.vue-modal-inner {
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-modal-content {
  background-color: #fff;
  padding: 30px;
  z-index: 151;
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  position: relative;
}

.popup__close {
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 16px;
  background: none;
  border: none;
  font-weight: 700;
  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
}

.popup-footer__info {
  font-weight: normal;
  color: #000;

  p {
    color: #000;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  h4 {
    margin: 10px 0;
  }
}
</style>
