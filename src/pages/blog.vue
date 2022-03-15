<template>
  <div class="blog__title">
    <h1>Инвестиционные идеи</h1>
  </div>
  <div class="blog__line">
    <div class="blog__products">
      <article class="product__item item-product" v-for="item in filteredItems" :key="item">
        <div class="item-product__title">
          {{ item.title }}
        </div>
        <div class="item-product__date">{{ convertDate(item.createdAt) }}</div>
        <router-link :to="{ name: 'BlogTemplate', params: { id: item.id } }" class="btn item-product__btn">
          ЧИТАТЬ
          <img src="../../src/assets/images/arrow-right.svg" alt="" />
        </router-link>
      </article>
    </div>
  </div>
  <button 
    class="blog__button button" 
    @click="showMore"
    v-if="filteredItems.length !== items.length"
  >Показать больше</button>
</template>

<script>
import { blogsRequest } from '../mixins/blogsRequest'
import { convertDate } from '../mixins/helpers'
export default {
  name: 'Blog',

  mixins: [blogsRequest, convertDate],

  data() {
    return {
      blogsToShow: 4
    }
  },

  computed: {
    filteredItems() {
      let tempItems = this.items;
  
      tempItems = tempItems.slice(0, this.blogsToShow)
      return tempItems
    },
  },

  methods: {
    showMore() {
      if (this.filteredItems.length < this.items.length) { 
        return this.blogsToShow += this.blogsToShow
      } else {
        return false
      }
    }
  }

};
</script>

<style></style>
