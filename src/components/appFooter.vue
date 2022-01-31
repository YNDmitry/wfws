<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__logo">
          <a href=""><img src="/src/assets/images/footer-logo.svg" alt="" /></a>
        </div>
        <div class="footer__block">
          <div class="footer__menu menu-footer">
            <div class="menu-footer__column">
              <div class="menu-footer__title">Аналитика</div>
              <ul class="menu-footer__list">
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <div class="menu-footer__title">Аналитика</div>
              <ul class="menu-footer__list">
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <div class="menu-footer__title">Аналитика</div>
              <ul class="menu-footer__list">
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
                <li><a href="" class="menu-footer__link">Разбор экрана</a></li>
              </ul>
            </div>
          </div>
          <div class="information-block__footer footer-info">
            <div class="footer-info__link">
              @{{ new Date().getFullYear() }} All rights resivered
            </div>
            <div class="footer-info__rules">
              <a @click="privacyIsOpen = true" class="footer-info__link">Конфеденциальность</a>
              <a @click="rulesIsOpen = true" class="footer-info__link">Правила</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <transition name="fade">
    <footer-modal :open="privacyIsOpen" @close="privacyIsOpen = false">
      <p>Конфеденциальность</p>
    </footer-modal>
  </transition>
  
  <transition name="fade">
    <footer-modal :open="rulesIsOpen" @close="rulesIsOpen = false">
      <p>Правила</p>
    </footer-modal>
  </transition>
</template>

<script>
import footerModal from "./footerPopup.vue";
export default {
  components: {
    footerModal,
  },

  data() {
    return {
      privacyIsOpen: false,
      rulesIsOpen: false
    };
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