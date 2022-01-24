<template>
  <div class="blog__title">
    <h1>Инвестиционные идеи</h1>
  </div>
  <div class="blog__line">
    <div class="blog__products">
      <article class="product__item item-product" v-for="key in 6" :key="key">
        <div class="item-product__title">
          Apple отчет за 4 квартал, перспективы роста...
        </div>
        <div class="item-product__date">14.01.2022</div>
        <a href="" class="btn item-product__btn">
          ЧИТАТЬ
          <img src="../../src/assets/images/arrow-right.svg" alt="" />
        </a
        >
      </article>
    </div>
  </div>
  <button class="blog__button button">Показать больше</button>
</template>

<script>
export default {};
</script>

<style></style>
