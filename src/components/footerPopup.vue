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
      type: Boolean
    }
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
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  position: fixed;
  
  width: 95%;
  max-width: 600px;
  z-index: 200;
  flex-direction: column;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-modal-content {
  visibility: visible;
  transform: scale(1);
  background-color: #fff;
  padding: 30px;
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
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
  font-size: 16px;
  line-height: 22px;
  color: #000;

  & p {
    color: #000;
  }
}
</style>
