<template>
  <router-link to="/blog" class="blog-template__title">
    <img src="../assets/images/arrow-left.svg" alt="" />
    <router-link to="/news">
      <h1>Вернуться назад</h1>
    </router-link>
  </router-link>
  <div v-if="news">
    <div class="blog-template__subtitle">
      <h2>{{ news.title }}</h2>
    </div>
    <div class="blog-template__body template-blog">
      <div class="blog-content__block" v-html="newsBody"></div>
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";

export default {
  name: "BlogTemplate",

  data() {
    return {
      news: null,
      newsBody: null
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route() {
      "fetchData"
    },
  },

  methods: {
    async fetchData() {
      try {
        const data = await this.$graphcms.request(
          gql`
            query news($id: ID) {
              news(where: { id: $id }) {
                title,
                body {
                  html
                }
              }
            }
          `,
          {
            id: this.$route.params.id,
          }
        );

        this.news = data.news;
        this.newsBody = data.news.body.html
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
