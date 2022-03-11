<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__logo">
          <a href="/"
            ><img src="/src/assets/images/footer-logo.svg" alt=""
          /></a>
        </div>
        <div class="footer__block">
          <div class="footer__menu menu-footer">
            <div class="menu-footer__column">
              <div class="menu-footer__title">Аналитика</div>
              <ul class="menu-footer__list">
                <li>
                  <router-link class="menu-footer__link" to="/reports"
                    >Разбор компаний</router-link
                  >
                </li>
                <li>
                  <router-link class="menu-footer__link" to="/news"
                    >Новости рынков</router-link
                  >
                </li>
                <li>
                  <router-link class="menu-footer__link" to="/blog"
                    >Блог и идеи</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <div class="menu-footer__title">О проекте</div>
              <ul class="menu-footer__list">
                <li>
                  <router-link class="menu-footer__link" to="/"
                    >Главная</router-link
                  >
                </li>

                <li>
                  <router-link class="menu-footer__link" to="/about"
                    >О нас</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <div class="menu-footer__title">Соцсети</div>
              <ul class="menu-footer__list seti">
                <li>
                  <a
                    href="https://vk.com/thewfws"
                    target="_blank"
                    class="menu-footer__link"
                  >
                    <img src="../../src/assets/images/vk.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thewfws/"
                    target="_blank"
                    class="menu-footer__link"
                    ><img src="../../src/assets/images/inst.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="information-block__footer footer-info">
            <div class="footer-info__link">
              @{{ new Date().getFullYear() }} All rights resivered
            </div>
            <div class="footer-info__rules">
              <a @click="privacyIsOpen = true" class="footer-info__link"
                >Конфеденциальность</a
              >
              <a @click="rulesIsOpen = true" class="footer-info__link"
                >Отказ от ответственности</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <transition name="fade">
    <footer-modal :open="privacyIsOpen" @close="privacyIsOpen = false">
      <p>
        Ваша конфиденциальность очень важна для нас. Мы хотим, чтобы Ваша работа
        в Интернет по возможности была максимально приятной и полезной, и Вы
        совершенно спокойно использовали широчайший спектр информации,
        инструментов и возможностей, которые предлагает Интернет.
      </p>
      <h4>Откуда мы собираем информацию</h4>
      <p>
        Всю информацию, мы собираем с проверенных, официальных источников,
        брокеров и т.п., а так же предоставляем свое лично мнение и виденье,
        ответственность за покупку той или иной компании мы не несем, подробно
        об этом сказано в разделе "Отказ от ответственности"
      </p>
      <h4>Ответы на электронные запросы</h4>
      <p>
        Когда Гости или Члены отправляют нашей компании электронные запросы, для
        ответа на них используется электронный адрес, с которого пришел запрос.
      </p>
    </footer-modal>
  </transition>

  <transition name="fade">
    <footer-modal :open="rulesIsOpen" @close="rulesIsOpen = false">
      <p>
        Сервис оказывает посреднические услуги по выбору недооцененных активов и
        не осуществляет брокерскую деятельность. Любая представленная на сайте
        информация не является индивидуальной инвестиционной рекомендацией и
        носит исключительно информационный характер. За возможные убытки
        инвестора в случае совершения операций, либо инвестирования в финансовые
        инструменты, представленные на ресурсе, никто, кроме самого инвестора,
        ответственности не несет.
      </p>
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
      rulesIsOpen: false,
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
