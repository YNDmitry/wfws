<template>
  <div class="reports__recent recent-reports">
    <div class="recent-reports__title"><h1>Последние отчёты</h1></div>
    <div class="recent-reports__body body-reports">
      <div class="body-reports__filter filter-reports">
        <div class="filter-reports__items">
          <div class="filter-reports__country country-filter">
            <div class="country-filter__header">
              <h4>Страна</h4>
              <a href="">Очистить</a>
            </div>
            <div class="country-filter__body">
              <div class="country-filter__input">
                <input
                  class="radio__input"
                  name="male"
                  type="radio"
                  id="radio_1"
                />
                <label class="radio__label" for="radio_1">РФ</label>
              </div>
              <div class="country-filter__input">
                <input
                  class="radio__input"
                  name="male"
                  type="radio"
                  id="radio_2"
                />
                <label class="radio__label" for="radio_2">США</label>
              </div>
            </div>
          </div>
          <div class="filter-reports__category category-filter">
            <div class="category-filter__header">
              <h4>Категория</h4>
              <a href="">Очистить</a>
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_1" />
              <label class="checkbox__label" for="checkbox_1"
                >Здравоохранение</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_2" />
              <label class="checkbox__label" for="checkbox_2"
                >Зеленая энергетика</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_3" />
              <label class="checkbox__label" for="checkbox_3"
                >Информационные технологии</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_4" />
              <label class="checkbox__label" for="checkbox_4"
                >Эко-технологии</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_5" />
              <label class="checkbox__label" for="checkbox_5">
                Машиностроение и транспорт</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_6" />
              <label class="checkbox__label" for="checkbox_6"
                >Телекоммуникации</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_7" />
              <label class="checkbox__label" for="checkbox_7"
                >Финансовый сектор</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_8" />
              <label class="checkbox__label" for="checkbox_8"
                >Электротранспорт</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_9" />
              <label class="checkbox__label" for="checkbox_9"
                >Электроэнергетика</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_10" />
              <label class="checkbox__label" for="checkbox_10"
                >Энергетика</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_11" />
              <label class="checkbox__label" for="checkbox_11"
                >Энергоэффективные здания</label
              >
            </div>
            <div class="category-filter__checkbox checkbox">
              <input class="checkbox__input" type="checkbox" id="checkbox_12" />
              <label class="checkbox__label" for="checkbox_12">Другое</label>
            </div>
          </div>
        </div>
      </div>
      <div class="body-reports__catalog reports-catalog">
        <div class="reports-catalog__block">
          <h4>Apple отчет за 4 квартал, дальейшие перспективы роста</h4>
          <span>14.01.2022</span>
          <p>
            Мы анализируем все выходящие квартальные отчетности основных
            российских компаний...
          </p>
          <div class="reports-catalog__btn btn">Посмотреть</div>
        </div>
        <div class="reports-catalog__block">
          <h4>Apple отчет за 4 квартал, дальейшие перспективы роста</h4>
          <span>14.01.2022</span>
          <p>
            Мы анализируем все выходящие квартальные отчетности основных
            российских компаний...
          </p>
          <div class="reports-catalog__btn btn">Посмотреть</div>
        </div>
        <div class="reports-catalog__block">
          <h4>Apple отчет за 4 квартал, дальейшие перспективы роста</h4>
          <span>14.01.2022</span>
          <p>
            Мы анализируем все выходящие квартальные отчетности основных
            российских компаний...
          </p>
          <div class="reports-catalog__btn btn">Посмотреть</div>
        </div>
        <div class="reports-catalog__button button">показать больше</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
