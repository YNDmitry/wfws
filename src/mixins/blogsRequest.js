import { gql } from 'graphql-request'

export const blogsRequest = {
	data() {
    return {
      items: [],
      errors: []
    }
  },

  async created() {
    const data = await this.$graphcms.request(
      gql`
        {
          blogs(orderBy: createdAt_DESC) {
            id,
            title,
            createdAt
          }
        }
      `
    )

    this.items = data.blogs
    this.errors = data.errors
  }
}