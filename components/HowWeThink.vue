<template>
    <div>
      <div class="howwethink">
        <figure class="howwethink__peoplesmiling">
            <img src="@/assets/imgs/peoplesmiling.png"/>
        </figure>

        <div class="howwethink__copy">
            <h2 class="howwethink__copy--h2">
                <figure class="circle">
                    <img src="@/assets/imgs/circle4deck.svg"/>
                </figure>
                <span class="header">How we think</span>
            </h2>
            <figure class="howwethink__copy--arrowright">
                <img src="@/assets/imgs/arrowright.svg"/>
            </figure>
            <div class="howwethink__text">
                <p class="howwethink__text--p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            <div class="howwethink__underlinelink">
                <div></div>
                <div class="howwethink__underlinelink--body">
                    <span>
                        <NuxtLink to="/howwethink">Learn about how we work > </NuxtLink>
                    </span>
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
.howwethink {
    background: linear-gradient(180deg, rgba(241, 105, 97, 1) 12.09%, #F16961 93.7%);
    display: flex;
    align-items: center;
    padding-bottom: #{scaleValue(100)};
    flex-direction: column;
    color: $white;
    position: relative;
    z-index: 2;

    &::before {
        position: absolute;
        content: '';
        background: transparent;
        border-radius: 3rem;
        width: #{scaleValue(1290)};
        height: #{scaleValue(740)};
        border: solid 4px $white2;
        transform: translate(#{scaleValue(40)}, #{scaleValue(0)})
    }

    &__peoplesmiling {
        overflow: hidden;
        border-radius: 3rem;
        width: #{scaleValue(1348)};
        height: #{scaleValue(726)};
        position: relative;
    }

    &__copy {
        padding: #{scaleValue(100)} #{scaleValue(130)};
        margin-top: #{scaleValue(40)};

        &--h2 {
            position: relative;
            & span.header {
                font-weight: 500;
                font-size: #{scaleValue(48)};
                line-height: #{scaleValue(73)};
                letter-spacing: #{scaleValue(0.16)};
                position: relative;
                z-index: 1;
            }

            & figure.circle {
                position: absolute;
                height: #{scaleValue(90)};
                width: #{scaleValue(340)};
                top: 0;
                transform: translate(#{scaleValue(-12)}, #{scaleValue(-40)});

                & img {
                    object-fit: contain;
                    width: 100%;
                    height: auto;
                }
            }
        }

        &--arrowright {
            width: #{scaleValue(70)};
            margin-left: #{scaleValue(150)};
            margin-top: #{scaleValue(50)};
        }
    }

    &__text {
        font-style: normal;
        font-weight: 600;
        font-size: #{scaleValue(48)};
        line-height: #{scaleValue(80)};
        letter-spacing: #{scaleValue(0.16)};
        padding-left: #{scaleValue(180)};
        padding-right: #{scaleValue(120)};
    }

    &__underlinelink {
        display: flex;
        justify-content: space-between;
        margin-top:  #{scaleValue(80)};

        &--body {
            position: relative;

            & a {
                @include link($white);
                font-size: #{scaleValue(30)};
            }

            &::before {
                position: absolute;
                content: '';
                background: $white;
                height: #{scaleValue(2.5)};
                width: 100%;
                bottom: #{scaleValue(-5)};
            }
        }
    }
}
</style>
  