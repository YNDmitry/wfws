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
            v-for="item in paginatedData" 
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
      <div class="news-market__paggig" v-if="news.length > perPage">
        <button
          type="button"
          class="pagging__arrow pagging__arrow_left"
          v-if="!isFirstPage"
          @click="prevPage"
        >
          <img src="../../src/assets/images/newsMarket/arrowPaggingLeft.svg" alt="arrowPaggingPrev"/>
        </button>
        <ul class="pagging__list">
          <li v-for="num in pagination(page, paginatedNumbers)" :key="num">
            <a 
              class="pagging__link"
              :class="{ '_active': num === page }"
              @click="goToPage(num)"
            >{{ num }}</a>
          </li>
        </ul>
        <button 
          type="button" 
          class="pagging__arrow pagging__arrow_right"
          v-if="!isLastPage"
          @click="nextPage"
        >
          <img src="../../src/assets/images/newsMarket/arrowPaggingRight.svg" alt="arrowPaggingNext"
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
      news: [],
      perPage: 6,
      page: 1,
      isFirstPage: true,
      isLastPage: false
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

  watch: {
    page(val) {
      val === 1 
        ? this.isFirstPage = true 
        : this.isFirstPage = false
      
      val === Math.ceil(this.news.length / this.perPage)
        ? this.isLastPage = true
        : this.isLastPage = false
      
      window.scrollTo(0, 0)
    }
  },

  computed: {
    paginatedNumbers() {
      return Math.ceil(this.news.length / this.perPage)
    },

    paginatedData() {
      let tempData = this.news
      tempData = tempData.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      )
      return tempData
    }
  },

  methods: {
    nextPage() {
      if (this.page !== this.paginationNumbers) {
        this.page += 1
      }
    },

    prevPage() {
      if (this.page !== 1) {
        this.page -= 1
      }
    },

    goToPage(numPage) {
      if (numPage === '...') {
        return
      } else {
        this.page = numPage
      }
    },

    pagination(currentPage, lastPage, delta = 1) {
      const range = Array(lastPage).fill().map((_, index) => index + 1)

      return range.reduce((pages, page) => {
        if (page === 1 || page === lastPage) {
          return [...pages, page]
        }

        if (page - delta <= currentPage && page + delta >= currentPage) {
          return [...pages, page]
        }

        if (pages[pages.length - 1] !== '...') {
          return [...pages, '...']
        }

        return pages
      }, [])
    }
  }
};
</script>
