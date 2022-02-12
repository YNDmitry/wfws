<template>
  <div class="typed-text">{{ typeValue }}</div>
</template>
<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Проект ВсW$ создан, чтобы помогать вам находить прибыльные инвестиционные идеи на биржах. Присоединяйтесь к нашему сообществу и черпайте свежие идеи для своих инвестиций!",
      ],
      typingSpeed: 80,
      erasingSpeed: 20,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style>
.typed-text {
  height: 100px;

  @media (max-width: 480px) {
    height: 170px;
  }
}
</style>
