<template>
  <header-mobile v-if="isDesktop"></header-mobile>
  <header class="header" v-else>
    <router-link to="/" class="header__link">Главная</router-link>
    <router-link to="/reports" class="header__link"
      >Разбор компаний</router-link
    >
    <router-link to="/news" class="header__link">Новости рынков</router-link>
    <router-link to="/study" class="header__link">Обучение</router-link>
    <router-link to="/blog" class="header__link">Блог и идеи</router-link>
    <router-link to="/about" class="header__link">О нас</router-link>
  </header>
</template>

<script>
import HeaderMobile from "../components/mainHeaderMobile.vue";
export default {
  components: {
    HeaderMobile,
  },

  data() {
    return {
      isDesktop: true,
    }
  },

  mounted() {
    this.width()
    window.addEventListener('resize', () => {
      this.width()
    })
  },

  methods: {
    width() {
      if (window.innerWidth <= 768) {
        return this.isDesktop = true
      } else {
        return this.isDesktop = false
      }
    }
  }
};
</script>
