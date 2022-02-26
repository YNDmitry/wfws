<template>
  <div class="market-news__contant news-market">
    <div class="news-market__title">
      <h1>Новости фондового рынка</h1>
    </div>
    <template v-if="news.length > 0">
      <div class="news-market__line">
        <div class="news-market__body">
          <router-link 
            class="news-market__item item-news" 
            v-for="item in news" 
            :key="item"
            :to="{ name: 'newsTemplate', params: { id: item.id } }"
          >
            <div class="item-news__cart">
              <div class="item-news__image">
                <img
                  :src="item.image.url"
                />
              </div>
              <div class="item-news__contant">
                <h4>{{ item.title }}</h4>
                <span>{{ convertDate(item.createdAt) }}</span>
              </div>
            </div>
            <a href=""
              ><img
                src="../../src/assets/images/newsMarket/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </router-link>
        </div>
      </div>
      <div class="news-market__paggig">
        <button
          type="button"
          disabled=""
          class="pagging__arrow pagging__arrow_left"
        >
          <img
            src="../../src/assets/images/newsMarket/arrowPaggingLeft.svg"
            alt="arrowPaggingLeft"
          />
        </button>
        <ul class="pagging__list">
          <li>
            <a href="" class="pagging__link _active">1</a>
          </li>
          <li>
            <a href="" class="pagging__link">2</a>
          </li>
          <li>
            <a href="" class="pagging__link">3</a>
          </li>
          <li>
            <a href="" class="pagging__link">4</a>
          </li>
        </ul>
        <button type="button" class="pagging__arrow pagging__arrow_right">
          <img
            src="../../src/assets/images/newsMarket/arrowPaggingRight.svg"
            alt="arrowPaggingRight"
          />
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import { convertDate } from '../mixins/helpers'
export default {
  data() {
    return {
      news: []
    }
  },

  mixins: [convertDate],

  async created() {
    const data = await this.$graphcms.request(
      gql `
        {
          newsModel(orderBy: createdAt_DESC) {
            createdAt
            title
            image {
              url
            }
            id
          }
        }
      `
    )

    this.news = data.newsModel
  },

  methods: {

  }
};
</script>
