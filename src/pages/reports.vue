<template>
  <div class="analysis__reports reports-analysis">
    <div class="reports-analysis__title">
      <h1>Анализ отчетности компаний</h1>
    </div>
    <div class="reports-analysis__body analysis-report">
      <div class="analysis-report__block">
        <div class="analysis-report__image">
          <img src="../../src/assets/images/reports/USA.svg" alt="" />
        </div>
        <div class="analysis-report__contant report-contant">
          <h4>
            Отчетность Российских<br />
            компаний
          </h4>
          <p>
            Мы анализируем все выходящие квартальные отчетности основных
            российских компаний, чтобы вы смогли лучше понимать финансовые
            перспективы и текущее состояние дел
          </p>
          <router-link to="/reports/last-reports" class="report-contant__btn btn">Последние отчёты</router-link>
        </div>
      </div>
      <div class="analysis-report__block">
        <div class="analysis-report__image">
          <img src="../../src/assets/images/reports/RU.svg" alt="" />
        </div>
        <div class="analysis-report__contant report-contant">
          <h4>
            Отчетность Российских<br />
            компаний
          </h4>
          <p>
            Мы анализируем все выходящие квартальные отчетности основных
            российских компаний, чтобы вы смогли лучше понимать финансовые
            перспективы и текущее состояние дел
          </p>
          <router-link to="/reports/last-reports" class="report-contant__btn btn">Последние отчёты</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
