<template>
  <div>
    <div class="home">
      <div class="home__body">
        <Jumbotron />
        <Brands />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const home = document.querySelector('.home__body');
    const x = window.matchMedia("(max-width: 414px)")

    if (x.matches) {
      home.style.display = `none`;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  
  &__body {
    position: relative;
    z-index: 2;
    margin-bottom: #{scaleValue(800)};
    background: $white;

    @media only screen and (max-width: 414px) {
      margin-bottom: 0;
    }
  }
}
</style>
