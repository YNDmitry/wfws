<template>
  <div class="reports__recent recent-reports">
    <div class="recent-reports__title"><h1>Последние отчёты</h1></div>
    <div class="recent-reports__body body-reports" v-if="reports.length > 0">
      <div class="body-reports__filter filter-reports">
        <div class="filter-reports__items">
          <div class="filter-reports__country country-filter">
            <div class="country-filter__header">
              <h4>Страна</h4>

              <a>Очистить</a>

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
          <div class="reports-catalog__button button" @click="windowIsOpen = true">показать больше</div>
        </template>
        <h2 v-else>Отчёты по такой категории не найдены.</h2>

      </div>
    </div>
  </div>

  <transition name="fade">
    <window-modal :open="windowIsOpen" @close="windowIsOpen = false">
      <h2>Apple отчет за 4 квартал, дальейшие перспективы роста</h2>
      <p>
        Компания Apple опубликовала отчёт за четвёртый квартал 2021 финансового
        года, завершившийся у неё 25 сентября. Выручка за отчётный период
        составила 83,360 млрд долларов. По сравнению с аналогичным периодом
        предыдущего финансового года этот показатель вырос на 20%.
        <br />
        <br />

        Операционная прибыль составила 23,786 млрд долларов, чистая прибыль —
        20,551 млрд долларов. Год назад эти показатели были равны 14,775 и
        12,873 млрд долларов соответственно.
        <br /><br />
        Хотя Apple начинает больше зарабатывать с других категорий, iPhone пока
        остается главным продуктом компании. Всего за минувший квартал
        технологический гигант получил выручку 64,7 миллиарда долларов или 0,73
        доллара на акцию. Чистая прибыль составила 12,67 миллиарда долларов. Для
        сравнения — в прошлом году доходы Apple составили 64 миллиарда долларов,
        чистая прибыль — 13,69 миллиарда долларов. Хотя Apple начинает больше
        зарабатывать с других категорий, iPhone пока остается главным продуктом
        компании. Всего за минувший квартал технологический гигант получил
        выручку 64,7 миллиарда долларов или 0,73 доллара на акцию. Чистая
        прибыль составила 12,67 миллиарда долларов. Для сравнения — в прошлом
        году доходы Apple составили 64 миллиарда долларов, чистая прибыль —
        13,69 миллиарда долларов. Хотя Apple начинает больше зарабатывать с
        других категорий, iPhone пока остается главным продуктом компании. Всего
        за минувший квартал технологический гигант получил выручку 64,7
        миллиарда долларов или 0,73 доллара на акцию. Чистая прибыль составила
        12,67 миллиарда долларов. Для сравнения — в прошлом году доходы Apple
        составили 64 миллиарда долларов, чистая прибыль — 13,69 миллиарда
        долларов. Хотя Apple начинает больше зарабатывать с других категорий,
        iPhone пока остается главным продуктом компании. Всего за минувший
        квартал технологический гигант получил выручку 64,7 миллиарда долларов
        или 0,73 доллара на акцию. Чистая прибыль составила 12,67 миллиарда
        долларов. Для сравнения — в прошлом году доходы Apple составили 64
        миллиарда долларов, чистая прибыль — 13,69 миллиарда долларов.
      </p>
      <img src="../../src/assets/images/windowPopup/1.jpg" alt="" />
    </window-modal>
  </transition>
</template>

<script>
import windowModal from "../components/popupWindow.vue";
import { gql } from 'graphql-request'
export default {
  components: {
    windowModal,
  },
  
  data() {
    return {
      reports: [],
      countries: [],
      categories: [],

      categoryFilter: [],
      countryFilter: '',
      
      windowIsOpen: false,
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
