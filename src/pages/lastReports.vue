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
                <label class="radio__label" :for="country.countryName">{{
                  country.countryName
                }}</label>
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
              <label class="checkbox__label" :for="category.categoryName">{{
                category.categoryName
              }}</label>
            </div>
          </div>
          <div class="filter-reports__search">
            <input
              type="text"
              autocomplete="off"
              name="form[]"
              placeholder="Название компании"
              class="filter-reports__input"
              v-model="categorySearchInp"
            />
            <button class="filter-reports__btn" @click="search">
              <img src="../../src/assets/images/search.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="body-reports__catalog reports-catalog">
        <template 
          v-for="reportIdx in reportsToShow"
          :key="reportIdx"
        >
          <div 
            v-if="reportIdx <= filteredReports.length"
          >
            <div
              class="reports-catalog__block"
            >
              <h4>{{ filteredReports[reportIdx - 1].title }}</h4>
              <div class="reports-catalog__categories">
                <div
                  class="reports-catalog__category"
                  v-for="category in filteredReports[reportIdx - 1].category"
                  :key="category"
                >
                  {{ category.categoryName }}
                </div>
              </div>
              <span>{{ convertDate(filteredReports[reportIdx - 1].createdAt) }}</span>
              <p>
                {{ filteredReports[reportIdx - 1].description }}
              </p>
              <div class="reports-catalog__btn btn" @click="openModal(filteredReports[reportIdx - 1].id)">
                Посмотреть
              </div>
              <transition name="fade">
                <window-modal
                  :open="windowIsOpen === filteredReports[reportIdx - 1].id ? true : false" 
                  @close="windowIsOpen = false"
                  :title="filteredReports[reportIdx - 1].title"
                  :body="filteredReports[reportIdx - 1].body"  
                >
                </window-modal>
              </transition>
            </div>
          </div>
        </template>
        <div 
          class="reports-catalog__button button"
          @click="reportsToShow += 3"
          v-if="reportsToShow < filteredReports.length"
        >показать больше</div>
        <h2 v-if="filteredReports.length === 0">Отчёты по такой категории не найдены.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import windowModal from "../components/popupWindow.vue";
import { gql } from "graphql-request";
import { convertDate } from '../mixins/helpers'
export default {
  components: {
    windowModal,
  },

  mixins: [convertDate],

  data() {
    return {
      reports: [],
      countries: [],
      categories: [],
      reportsToShow: 3,
      totalReports: null,
      isShowMore: true,

      categoryFilter: [],
      countryFilter: "",
      categorySearch: "",
      categorySearchInp: "",

      windowIsOpen: null,
    };
  },

  created() {
    this.fetchData();
    this.checkQuery();
  },

  watch: {
    countryFilter(val) {
      if (val === "США") {
        this.$route.query.country = "usa";
      } else {
        this.$route.query.country = "ru";
      }
    },

    categorySearchInp(e) {
      if (e.length === 0) {
        this.filteredReports
      }
    },

    countryFilter(val) {      
      let searchParams = new URLSearchParams(window.location.search)

      if (val === 'США') {
        searchParams.set('country', 'usa')
      } else {
        searchParams.set('country', 'ru')
      }
      
      let newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
      return history.pushState(null, '', newRelativePathQuery);
    }
  },

  computed: {
    filteredReports() {
      let tempReports = this.reports;

      if (this.countryFilter) {
        this.reportsToShow = 3
        tempReports = tempReports.filter((item) => {
          return item.country.countryName == this.countryFilter;
        });
      }

      if (this.categoryFilter.length > 0) {
        tempReports = tempReports.filter((item) => {
          for (let value of item.category) {
            console.log(this.categoryFilter.includes(value.categoryName))
            if (this.categoryFilter.includes(value.categoryName)) {
              return true;
            }
          }
        });
      }
      
      if (this.categorySearch.length > 0) {
        tempReports = tempReports.filter((item) => {
          return item.title.toLowerCase().includes(this.categorySearch.toLowerCase())
        })
      }

      return tempReports;
    },

  },

  methods: {
    checkQuery() {
      if (this.$route.query.country === "usa") {
        this.countryFilter = "США";
      } else if (this.$route.query.country === "ru") {
        this.countryFilter = "РФ";
      } else {
        this.countryFilter = "";
      }
    },

    async fetchData() {
      try {
        const data = await this.$graphcms.request(
          gql`
            {
              reports(orderBy: createdAt_DESC) {
                id
                title
                description,
                createdAt,
                body {
                  html
                },
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
        );
        this.reports = data.reports;
        this.countries = data.countries;
        this.categories = data.categoryFilterS;
      } catch (error) {
        console.log(error);
      }
    },

    clearCountryFilter() {
      this.countryFilter = "";
      return this.reportsToShow = 3
    },

    clearCategoryFilter() {
      this.categoryFilter = [];
      this.categorySearchInp = ''
      return this.reportsToShow = 3
    },

    openModal(id) {
      this.windowIsOpen = id
      if (this.windowIsOpen === id) {
        return true
      } else {
        return false
      }
    },

    search() {
      if (this.categorySearchInp.length > 0) {
        this.categorySearch = this.categorySearchInp
        return this.filteredReports
      }
    },

    showMore() {
      if (this.filteredReports.length < this.reportsToShow) { 
        return this.filteredReports.length === this.reportsToShow
      } else {
        return false
      }
    }
  },
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
