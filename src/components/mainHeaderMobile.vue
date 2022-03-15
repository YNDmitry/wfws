<template>
  <header class="header__mobile mobile-header">
    <transition name="slideUp">
      <window-burger :open="isOpen" @close="isOpen = false">
        <router-link 
          to="/about" 
          class="burger-active__link" 
        >О нас</router-link>
        <router-link 
          to="/news" 
          class="burger-active__link"
        >Новости рынков</router-link
        >
      </window-burger>
    </transition>

    <div class="mobile-header__item">
      <router-link to="/" class="mobile-header__link"
        ><img src="../assets/images/headerMobile/home.svg" alt=""
      /></router-link>
      <router-link to="/reports" class="mobile-header__link">
        <img src="../assets/images/headerMobile/reports.svg" alt="" />
      </router-link>
      <router-link to="/study" class="mobile-header__link"
        ><img src="../assets/images/headerMobile/study.svg" alt=""
      /></router-link>

      <router-link to="/blog" class="mobile-header__link">
        <img src="../assets/images/headerMobile/connection.svg" alt=""
      /></router-link>

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

  watch: {
    $route() {
      if (this.isOpen === true) {
        return this.isOpen = false
      }
    }
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
.slideUp-enter-active {
  transition: all .2s ease;
}
.slideUp-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slideUp-enter, .slideUp-leave-to {
  transform: translateY(100%);
}
</style>