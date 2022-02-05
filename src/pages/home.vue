<template>
  <div class="main__page page-main">
    <div class="page-main__info info-main">
      <a href="" class="info-main__logo">
        <img src="../../src/assets/images/home/logo.svg" alt="" />
      </a>
      <h1><span> ИНВЕСТИЦИИ</span> В КОМПАНИИ ПО ВСЕМУ МИРУ</h1>
      <p>
        Проект ВсW$ создан, чтобы помогать вам находить прибыльные
        инвестиционные идеи на биржах. Присоединяйтесь к нашему сообществу и
        черпайте свежие идеи для своих инвестиций!
      </p>
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
            :orbit-ctrl="{autoRotate: true}"
            :shadow="false"
            alpha
          >
            <Camera 
              :aspect="aspect" 
              :position="{ 
                x: 0,
                y: 0,
                z: 300 
              }" 
              ref="camera"
            />
            <Scene 
              ref="scene"
            ></Scene>
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
                <span>{{ slide.createdAt }}</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  elementum risus scelerisque
                </p>
                <router-link :to="{ name: 'BlogTemplate', params: { id: slide.id } }" class="slide-slider-page__button btn"
                  >читать
                  <img src="../../src/assets/images/arrow-right.svg" alt="" />
                </router-link>
              </div>
          </swiper-slide>
        </swiper>
          <div class="slider-page__arrows slider-arrows">
            <button class="slider-arrow slider-arrow_prev" @click="slidePrev">
              <img
                src="../../src/assets/images/home/sliderArrowPrev.svg"
                alt=""
              />
            </button>
            <button class="slider-arrow slider-arrow_next" @click="slideNext">
              <img
                src="../../src/assets/images/home/sliderArrowNext.svg"
                alt=""
              />
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
import { reportsRequest } from "../mixins/reportsRequest";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Box, Camera, Renderer, Scene } from 'troisjs';
import ThreeGlobe from 'three-globe';

import "swiper/css";

export default {
  name: "Home",

  components: {
    Swiper,
    SwiperSlide,
    Camera,
    Renderer,
    Scene,
    Box
  },

  mixins: [reportsRequest],

  data() {
    return {
      swiper: null
    }
  },

  computed: {
    aspect() {
      return window.innerWidth / window.innerHeight
    }
  },

  mounted() {
    const renderer = this.$refs.renderer
    const scene = this.$refs.scene
    const camera = this.$refs.camera
    const Globe = new ThreeGlobe()
      // .globeImageUrl('https://media.graphcms.com/lXi1VFYqT3CrEegRbbIm')
      .globeImageUrl('https://media.graphcms.com/20FqRXmFQZ1eEJNjGrOA')
      .bumpImageUrl('https://media.graphcms.com/20FqRXmFQZ1eEJNjGrOA')
      .showAtmosphere(false)
      .rendererSize(scene)

    scene.add(Globe);

  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
    },

    slideNext() {
      this.swiper.slideNext()
    },

    slidePrev() {
      this.swiper.slidePrev()
    },

    initGlobe() {
      // const renderer = this.$refs.renderer
      // const camera = this.$refs.camera
      // const globe = this.$refs.globe
      // const Globe = new ThreeGlobe()
      //   .globeImageUrl('https://media.graphcms.com/lXi1VFYqT3CrEegRbbIm')

      // Setup scene
      // globe.add(Globe);

      // Setup camera
      // camera.aspect = window.innerWidth/window.innerHeight;
      // camera.updateProjectionMatrix();
      // camera.position.z = 300;
      // var angle = 0;
      // var radius = 100;
      // globe.rotation.x = radius * Math.cos( angle );  
      // globe.rotation.z = radius * Math.sin( angle );
      // angle += 0.003;

      // // Add camera controls
      // const tbControls = new TrackballControls(camera, renderer.domElement);
      // tbControls.minDistance = 300;
      // tbControls.maxDistance = 300;
      // tbControls.rotateSpeed = 5;

      // // Kick-off renderer
      // (function animate() { 
      //   tbControls.update();
      //   renderer.render(scene, camera);
      //   requestAnimationFrame(animate);
      // })();
    }
  },
};
</script>