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
  mounted() {}
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
      display: none;
    }
  }
}
</style>
