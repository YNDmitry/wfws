<template>
  <div class="sending__form form-sending">
    <div class="form-sending__container">
      <div class="sending__form-success" v-if="success">
        <img src="../assets/images/success.svg" alt="">
        <p>Спасибо! Мы ответим вам в ближайшее время</p>
      </div>
      <template v-else>
        <div class="form-sending__title">Остались вопросы?</div>
        <form 
          @submit.prevent="submit" 
          action="#" 
          class="form-sending__window sending-inputs"
        >
          <div class="sending-inputs__info">
            <input
              autocomplete="off"
              type="text"
              name="name"
              placeholder="ФИО"
              class="form-sending__input"
              v-model="name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              class="form-sending__input"
              v-model="email"
            />

            <input 
              autocomplete="off"
              type="text" 
              name=""
              placeholder="Тема"
              class="form-sending__input form-sending__message"
              v-model="subject"
            >

            <textarea
              autocomplete="off"
              type="text"
              name="message"
              rows="5"
              placeholder="Сообщение"
              class="form-sending__input form-sending__message"
              v-model="message"
            />
          </div>
          <button v-if="!error" type="submit" class="sending-inputs__btn btn" ref="submitBtn">Отправить</button>
          <div class="sending-inputs__error" v-else>
            <p>Что-то пошло не так... обновите страницу и попробуйте ещё раз</p>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<script>
  import { gql } from 'graphql-request'

  export default {
    data() {
      return {
        name: null,
        email: null,
        subject: null,
        message: null,
        success: false,
        error: false
      }
    },

    methods: {
      async submit() {
        if (this.name && this.email && this.subject && this.message) {
          this.$refs.submitBtn.innerText = 'Пожалуйста, подождите...'
          try {
            const res = await this.$graphcms.request(
              gql`
                mutation createFormMessage($email: String, $message: String, $name: String, $subject: String) {
                  createForm(
                    data: {email: $email, message: $message, name: $name, subject: $subject}
                  ) {
                    email,
                    message,
                    name,
                    subject
                  }
                }
              `,
              {
                "email": this.email,
                "message": this.message,
                "name": this.name,
                "subject": this.subject
              }
            )

            if (res !== null) {
              this.success = !this.success
            }
          } catch (error) {
            this.error = !this.error
          }
        }
      }
    }
  }
</script>
