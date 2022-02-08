<template>
  <div class="blog__title">
    <h1>Инвестиционные идеи</h1>
  </div>
  <div class="blog__line">
    <div class="blog__products">
      <article class="product__item item-product" v-for="item in items" :key="item">
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
  <button class="blog__button button">Показать больше</button>
</template>

<script>
import { blogsRequest } from '../mixins/blogsRequest'
import { convertDate } from '../mixins/helpers'
export default {
  name: 'Blog',

  mixins: [blogsRequest, convertDate]
};
</script>

<style></style>
