import { gql } from 'graphql-request'

export const reportsRequest = {
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
          blogs {
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