<template>
  <div class="catalog__breadcrumbs breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <router-link to="/" class="breadcrumbs__link">
          <img src="../../src/assets/images/iconHome.svg" alt="" />
        </router-link>
        <img src="../../src/assets/images/breadcam.svg" alt="" />
      </li>
      <li class="breadcrumbs__item">
        <router-link to="/study/main" class="breadcrumbs__link"
          >Обучение</router-link
        >
      </li>
    </ul>
  </div>
  <div class="catalog" v-if="items !== null">
    <div class="catalog__body">
      <div class="catalog__tabs tabs-catalog">
        <nav class="tabs__items items-tabs">
          <div
            href="#"
            class="items-tabs__item"
            v-for="tab in items"
            :key="tab.id"
            @click="selectTab(tab.id)"
            :class="tab.id === selectedTab ? 'active' : ''"
          >
            {{ tab.title }}
            <img
              src="../../src/assets/images/studyMain/arrowRight.svg"
              alt=""
            />
          </div>
        </nav>
      </div>
      <div class="catalog-tabs__content" v-if="currentTab">
        <div class="catalog-tabs__subtitle">
          <h2>{{ currentTab.title }}</h2>
        </div>
        <div class="catalog-tabs__body body-tabs">
          <div class="body-tabs__contant">
            <div v-html="currentTab.body.html"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";
export default {
  name: "StudyMain",

  data() {
    return {
      items: null,
      error: null,

      selectedTab: null,
      currentTab: null,
    };
  },

  async created() {
    try {
      const data = await this.$graphcms.request(
        gql`
          {
            studies {
              id
              title
              body {
                html
              }
            }
          }
        `
      );
      this.items = data.studies;
      this.selectedTab = data.studies[0].id;
    } catch (error) {
      this.error = error;
    }
  },

  updated() {
    this.selectTab(this.selectedTab);
  },

  methods: {
    selectTab(id) {
      let temp = this.items;
      this.selectedTab = id;
      this.currentTab = temp.find((item) => item.id === id);
    },
  },
};
</script>
