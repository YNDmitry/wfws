<template>
  <div class="sending__form form-sending">
    <div class="form-sending__container">
      <div class="form-sending__title">Остались вопросы?</div>
      <form action="#" class="form-sending__window">
        <div class="form-sending__inputs sending-inputs">
          <div class="sending-inputs__info">
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              placeholder="ФИО"
              class="form-sending__input"
            />
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              placeholder="Email"
              class="form-sending__input"
            />
          </div>
          <div class="sending-inputs__message">
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              placeholder="Message"
              class="form-sending__input"
            />
          </div>
        </div>
        <button type="submit" class="sending-inputs__btn btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
