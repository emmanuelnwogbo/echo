<template>
  <div>
    <div class="home">
      <Jumbotron />
      <HowWeThink />
      <Brands />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('jumbotron_copy').style.display = `flex`;
  }
}
</script>

<style lang="scss" scoped>
.home {
}
</style>
