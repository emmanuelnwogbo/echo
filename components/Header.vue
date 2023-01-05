<template>
    <div>
      <div class="header">
        <div class="header__body">
            <div class="header__left">
                <NuxtLink to="/">
                    <figure class="header__logo">
                        <img src="@/assets/imgs/logo.svg"/>
                    </figure>
                </NuxtLink>
            </div>
            <div class="header__right">
                <div class="header__link" :class="{
                    current: $nuxt.$route.name === 'howwethink'
                }">
                    <figure class="header__link--indicator">
                        <img src="@/assets/imgs/circle4deck2.svg">
                    </figure>
                    <NuxtLink to="/howwethink">How We Think</NuxtLink>
                </div>
                <div class="header__link" :class="{
                    current: $nuxt.$route.name === 'works'
                }">
                    <figure class="header__link--indicator">
                        <img src="@/assets/imgs/circle4deck2.svg">
                    </figure>
                    <NuxtLink to="/works">Works</NuxtLink>
                </div>
                <div class="header__link" :class="{
                    current: $nuxt.$route.name === 'bookaboard'
                }">
                    <figure class="header__link--indicator">
                        <img src="@/assets/imgs/circle4deck2.svg">
                    </figure>
                    <NuxtLink to="/bookaboard">Book A board</NuxtLink>
                </div>
                <div class="header__link" :class="{
                    current: $nuxt.$route.name === 'contact'
                }">
                    <figure class="header__link--indicator">
                        <img src="@/assets/imgs/circle4deck2.svg">
                    </figure>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            currentRoute: 'howwethink'
        }
    }
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
        position: relative;

        & a {
            @include link($white);
            font-size: #{scaleValue(22)};
            font-weight: 500;
        }

        &--indicator {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .3s ease-in-out;
            opacity: 0;
            transform: scale(0);
        }

        &:nth-child(1) {

            &.current .header__link--indicator {
                left: #{scaleValue(-23)};
                top: #{scaleValue(-15)};

                & img {
                    object-fit: contain;
                    width: #{scaleValue(200)};
                    height: 260%;
                }
            }
        }

        &:nth-child(2) {

            &.current .header__link--indicator {
                left: #{scaleValue(-38)};
                top: #{scaleValue(-7)};

                & img {
                    object-fit: contain;
                    width: #{scaleValue(150)};
                    height: 300%;
                }
            }
        }

        &:nth-child(3) {
            &.current .header__link--indicator {
                left: #{scaleValue(-28)};
                top: #{scaleValue(-15)};

                & img {
                    object-fit: contain;
                    width: #{scaleValue(200)};
                    height: 300%;
                }
            }
        }

        &:nth-child(4) {
            
            &.current .header__link--indicator {
                left: #{scaleValue(-29)};
                top: #{scaleValue(-8)};

                & img {
                    object-fit: contain;
                    width: #{scaleValue(160)};
                    height: 340%;
                }
            }
        }

        &.current {
            .header__link--indicator {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
}
</style>
  