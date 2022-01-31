<template>
  <div class="main">
    <aside class="main__header">
      <main-header></main-header>
    </aside>

    <div class="main__content">
      <router-view></router-view>
    </div>
  </div>
  <mainForm></mainForm>
</template>

<script>
import mainHeader from "../components/mainHeader.vue";
import mainForm from "../components/mainForm.vue";

export default {
  components: { mainHeader, mainForm },
  name: "mainLayout",
};
</script>
