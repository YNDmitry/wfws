<template>
  <div class="main__page page-main">
    <div class="page-main__info info-main">
      <a href="" class="info-main__logo">
        <img src="../../src/assets/images/home/logo.svg" alt="" />
      </a>
      <h1><span> ИНВЕСТИЦИИ</span> В КОМПАНИИ ПО ВСЕМУ МИРУ</h1>
      <TypeEffect></TypeEffect>
      <div class="info-main__navigation">
        <div class="info-main__info">
          <h4>Отчеты компаний</h4>
          <p>
            Мы регулярно отслеживаем квартальные и годовые отчеты компаний,
            которые платят хорошие дивиденды
          </p>

          <h4>Разборы секторов и компаний</h4>
          <p>
            Мы регулярно делаем разборы как отдельных компаний, так и целых
            секторов. Это помогает вам лучше понять куда инвестировать
          </p>
        </div>
        <div class="info-main__globe">
          <Renderer
            ref="renderer"
            antialias
            :orbit-ctrl="{
              autoRotate: true,
              autoRotateSpeed: 1,
            }"
            :shadow="false"
            alpha
            width="900"
            height="900"
          >
            <Camera
              :aspect="aspect"
              :position="{
                x: 0,
                y: 0,
                z: 300,
              }"
              ref="camera"
            />
            <Scene ref="scene">
              <AmbientLight></AmbientLight>
            </Scene>
          </Renderer>
        </div>
      </div>
    </div>
    <div class="main__page-block page-block">
      <div class="page-block__title">
        <h1>ПОСЛЕДНИЕ ОБЗОРЫ И СТАТЬИ</h1>
      </div>
      <swiper
        :spaceBetween="20"
        :centeredSlides="true"
        :slidesPerView="2"
        :slideToClickedSlide="true"
        :loop="true"
        :initialSlide="3"
        :autoPlay="true"
        :breakpoints="{
          1025: {
            spaceBetween: 20,
            slidesPerView: 2,
          },

          992: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }"
        @swiper="onSwiper"
        class="slider-page__slider"
      >
        <swiper-slide
          class="slider-page__slide slide-slider-page"
          v-for="slide in items"
          :key="slide"
        >
          <div>
            <h4>{{ slide.title }}</h4>
            <span>{{ convertDate(slide.createdAt) }}</span>
            <p>
              {{ slide.description }}
            </p>
            <router-link
              :to="{ name: 'BlogTemplate', params: { id: slide.id } }"
              class="slide-slider-page__button btn"
              >читать
              <img src="../../src/assets/images/arrow-right.svg" alt="" />
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
      <div class="slider-page__arrows slider-arrows">
        <button class="slider-arrow slider-arrow_prev" @click="slidePrev">
          <img src="../../src/assets/images/home/sliderArrowPrev.svg" alt="" />
        </button>
        <button class="slider-arrow slider-arrow_next" @click="slideNext">
          <img src="../../src/assets/images/home/sliderArrowNext.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="main__can-contant contant-can">
      <div class="contant-can__title">
        <h1>С НАМИ ВЫ МОЖЕТЕ</h1>
        <div class="contant-can__body">
          <div class="contant-can__block">
            <img src="../../src/assets/images/home/can/1.svg" alt="" />
            <h2>
              Выбирать недооцененные акции с хорошей потенциальной доходностью
            </h2>
          </div>
          <div class="contant-can__block">
            <img src="../../src/assets/images/home/can/2.svg" alt="" />
            <h2>
              Своевременно узнавать о решениях акционеров и советов директоров
              компаний
            </h2>
          </div>
          <div class="contant-can__block">
            <img src="../../src/assets/images/home/can/3.svg" alt="" />
            <h2>
              Узнавать текущую ситуацию в мире и как это может повлиять на рынки
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Box, Camera, Renderer, Scene, AmbientLight } from "troisjs";
import ThreeGlobe from "three-globe";
import { blogsRequest } from "../mixins/blogsRequest";
import { convertDate } from "../mixins/helpers";

import TypeEffect from "../components/typed.vue";

import "swiper/css";

export default {
  name: "Home",

  components: {
    Swiper,
    SwiperSlide,
    Camera,
    Renderer,
    Scene,
    Box,
    AmbientLight,
    TypeEffect,
  },

  mixins: [blogsRequest, convertDate],

  data() {
    return {
      swiper: null,
    };
  },

  computed: {
    aspect() {
      return window.innerWidth / window.innerHeight;
    },
  },

  mounted() {
    this.initGlobe();
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    slideNext() {
      this.swiper.slideNext();
    },

    slidePrev() {
      this.swiper.slidePrev();
    },

    initGlobe() {
      const N = 20;

      const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: ["orange", "white"],
      }));

      const nData = 10;
      const gData = [...Array(nData).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 18,
        maxR: Math.random() * 20 + 3,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200,
      }));

      const colorInterpolator = (t) => `rgba(255,165,0,${1 - t})`;

      const scene = this.$refs.scene;
      const Globe = new ThreeGlobe({ animateIn: false })
        .globeImageUrl("https://media.graphcms.com/OFnNTgSQMO4KostmCPAv")
        .showAtmosphere(true)
        .atmosphereColor("#FFA500")
        .rendererSize(window.innerWidth, window.innerHeight)
        .arcsData(arcsData)
        .arcColor("color")
        .arcDashLength(0.4)
        .arcDashGap(4)
        .arcDashInitialGap(() => Math.random() * 5)
        .arcDashAnimateTime(1000)
        .ringsData(gData)
        .ringColor(() => colorInterpolator)
        .ringMaxRadius("maxR")
        .ringPropagationSpeed("propagationSpeed")
        .ringRepeatPeriod("repeatPeriod");

      scene.add(Globe);
    },
  },
};
</script>
