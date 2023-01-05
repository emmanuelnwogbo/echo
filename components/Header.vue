<template>
    <div>
      <div class="header">
        <div class="header__body">
            <div class="header__left">
                <figure class="header__logo">
                    <img src="@/assets/imgs/logo.svg"/>
                </figure>
            </div>
            <div class="header__right">
                <div class="header__link">
                    <NuxtLink to="/howwethink">How We Think</NuxtLink>
                </div>
                <div class="header__link">
                    <NuxtLink to="/howwethink">Works</NuxtLink>
                </div>
                <div class="header__link">
                    <NuxtLink to="/howwethink">Book A board</NuxtLink>
                </div>
                <div class="header__link">
                    <NuxtLink to="/howwethink">Contact</NuxtLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>

<style lang="scss" scoped>
.header {
    background: $header-pink;
    color: $white;
    padding: #{scaleValue(25)} #{scaleValue(100)};

    &__body {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        
        & img {
            height: #{scaleValue(70)};
            width: auto
        }
    }

    &__right {
        display: flex;
        align-items: center;
    }

    &__link {
        margin-left: #{scaleValue(55)};

        & a {
            @include link($white);
            font-size: #{scaleValue(22)};
            font-weight: 500;
        }
    }
}
</style>
  