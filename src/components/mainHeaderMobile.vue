<template>
  <header class="header__mobile mobile-header">
    <transition name="fade">
      <window-burger :open="isOpen" @close="isOpen = false">
        <div class="burger-active__link">О нас</div>
        <div class="burger-active__link">Новости рынков</div>
      </window-burger>
    </transition>

    <div class="mobile-header__item">
      <a class="mobile-header__link page">
        <img src="../assets/images/headerMobile/home.svg" alt="" />
      </a>
      <a class="mobile-header__link">
        <img src="../assets/images/headerMobile/reports.svg" alt="" />
      </a>
      <a class="mobile-header__link">
        <img src="../assets/images/headerMobile/study.svg" alt="" />
      </a>
      <a class="mobile-header__link">
        <img src="../assets/images/headerMobile/connection.svg" alt="" />
      </a>

      <div id="burger" :class="{ active: isOpen }" @click.prevent="toggle">
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import windowBurger from "./burger.vue";
export default {
  components: {
    windowBurger,
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      if (this.isOpen === false) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
