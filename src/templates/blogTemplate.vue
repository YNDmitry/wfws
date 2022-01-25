<template>
  <h1 v-if="blog">{{ blog.title }}</h1>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  name: 'BlogTemplate',

  data() {
    return {
      blog: null
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    $route: 'fetchData'
  },

  methods: {
    async fetchData() {
      // this.blog = null

      try {
        const data = await this.$graphcms.request(
          gql`
            query getBlogById($id: ID) {
              blog(where: { id: $id }) {
                title
              }
            }
          `,
          {
            id: this.$route.params.id
          }
        )

        this.blog = data.blog
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
