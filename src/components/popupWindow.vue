<template>
  <div class="window-modal__wrapper" v-if="open">
    <div class="window-modal__inner">
      <div class="window-modal__content">
        <button
          type="button"
          class="popup-window__close"
          @click="$emit('close')"
        ></button>
        <p class="popup-window__info">
          <slot></slot>
        </p>
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

.window-modal {
  &__wrapper {
    z-index: 1001;
    visibility: visible;
    overflow: auto;
    pointer-events: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 30px 25px;
  }

  &__inner {
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    background: linear-gradient(
        344.43deg,
        #000000 21.79%,
        rgba(136, 109, 109, 0) 78.21%
      ),
      #1b1b1b;
    padding: 80px 100px;
    z-index: 151;
    width: 100%;
    max-width: 900px;
    border-radius: 20px;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 150;
  }
}
.popup-window {
  &__close {
    display: block;
    position: relative;
    width: 40px;
    height: 22.5px;
    cursor: pointer;
    color: inherit;
    background-color: inherit;
    border: none;
    z-index: 10;
    float: right;
    &::after {
      content: "";
      right: 0;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: white;
      transform: rotate(45deg);
    }
    &::before {
      content: "";
      right: 0;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: white;
      transform: rotate(-45deg);
    }
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__info {
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: #fff;

    p {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 50px;
    }

    h2 {
      border-bottom: 3px solid #ffa500;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    h4 {
      margin: 10px 0;
    }

    img {
      max-width: 100%;
      height: auto;
      width: auto;
      display: block;
      margin: 0px auto;
    }
  }
}
</style>
