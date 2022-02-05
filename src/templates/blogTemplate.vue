<template>
  <router-link to="/blog" class="blog-template__title">
    <img src="../assets/images/arrow-left.svg" alt="" />
    <h1>Вернуться назад</h1>
  </router-link>
  <div v-if="blog">
    <div class="blog-template__subtitle">
      <h2>{{ blog.title }}</h2>
    </div>
    <div class="blog-template__body template-blog">
      <div class="blog-content__block" v-html="blogBody"></div>
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";

export default {
  name: "BlogTemplate",

  data() {
    return {
      blog: null,
      blogBody: null
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
            query getBlogById($id: ID) {
              blog(where: { id: $id }) {
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

        this.blog = data.blog;
        this.blogBody = data.blog.body.html
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
