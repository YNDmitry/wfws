<template>
  <div class="reports__recent recent-reports">
    <div class="recent-reports__title"><h1>Последние отчёты</h1></div>
    <div class="recent-reports__body body-reports" v-if="reports.length > 0">
      <div class="body-reports__filter filter-reports">
        <div class="filter-reports__items">
          <div class="filter-reports__country country-filter">
            <div class="country-filter__header">
              <h4>Страна</h4>
              <a @click="clearCountryFilter">Очистить</a>
            </div>
            <div class="country-filter__body">
              <div 
                class="country-filter__input" 
                v-for="country in countries" 
                :key="country"
              >
                <input
                  class="radio__input"
                  name="country"
                  type="radio"
                  :id="country.countryName"
                  :value="country.countryName"
                  v-model="countryFilter"
                />
                <label class="radio__label" :for="country.countryName">{{ country.countryName }}</label>
              </div>
            </div>
          </div>
          <div class="filter-reports__category category-filter">
            <div class="category-filter__header">
              <h4>Категория</h4>
              <a @click="clearCategoryFilter">Очистить</a>
            </div>
            <div 
              class="category-filter__checkbox checkbox"
              v-for="category in categories"
              :key="category"
            >
              <input 
                class="checkbox__input" 
                type="checkbox" 
                :id="category.categoryName"
                :value="category.categoryName"
                v-model="categoryFilter"
              />
              <label 
                class="checkbox__label" 
                :for="category.categoryName"
              >{{ category.categoryName }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="body-reports__catalog reports-catalog">

        <template v-if="filteredReports.length > 0">
          <div 
            class="reports-catalog__block"
            v-for="report in filteredReports"
            :key="report"
          >
            <h4>{{ report.title }}</h4>
            <div class="reports-catalog__categories">
              <div 
                class="reports-catalog__category"
                v-for="category in report.category" :key="category"
              >{{ category.categoryName }}</div>
            </div>
            <span>14.01.2022</span>
            <p>
              {{ report.description }}
            </p>
            <div class="reports-catalog__btn btn">Посмотреть</div>
          </div>
          <div class="reports-catalog__button button">показать больше</div>
        </template>
        <h2 v-else>Отчёты по такой категории не найдены.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
export default {
  data() {
    return {
      reports: [],
      countries: [],
      categories: [],

      categoryFilter: [],
      countryFilter: '',
    }
  },

  created() {
    this.fetchData()
    this.checkQuery()
  },

  watch: { 
    countryFilter(val) {
      if (val === 'США') {
        this.$route.query.country = 'usa'
      } else {
        this.$route.query.country = 'ru'
      }
    }
  },

  computed: {
    filteredReports() {
      let tempReports = this.reports

      if (this.countryFilter) {
        tempReports = tempReports.filter((item) => {
          return item.country.countryName == this.countryFilter
        })
      }

      if (this.categoryFilter.length > 0) {
        tempReports = tempReports.filter(item => {
          for (let value of item.category) {
            if (this.categoryFilter.includes(value.categoryName)) {
              return true
            }
          }
        })
      }

      return tempReports
    }
  },

  methods: {
    checkQuery() {
      if (this.$route.query.country === 'usa') {
        this.countryFilter = 'США'
      } else if (this.$route.query.country === 'ru') {
        this.countryFilter = 'РФ'
      } else {
        this.countryFilter = ''
      }
    },

    async fetchData() {
      try {
        const data = await this.$graphcms.request(
          gql`
            {
              reports {
                id
                title
                description
                category {
                  ... on CategoryFilter {
                    categoryName
                  }
                }
                country {
                  countryName
                }
              }
              countries {
                countryName
              }
              categoryFilterS {
                categoryName
              }
            }
          `
        )
        this.reports = data.reports
        this.countries = data.countries
        this.categories = data.categoryFilterS
      } catch (error) {
        console.log(error)
      }
    },

    clearCountryFilter() {
      return this.countryFilter = ''
    },

    clearCategoryFilter() {
      return this.categoryFilter = []
    }
  }
};
</script>

<style></style>
