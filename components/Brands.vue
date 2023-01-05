<template>
    <div>
      <div class="brands">
        <div class="brands__conveyor">
            <figure class="brands__logo">
                <img src="@/assets/imgs/farmfortelogo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/oraimologo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/heinekenlogo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/farmfortelogo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/oraimologo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/heinekenlogo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/farmfortelogo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/oraimologo.svg"/>
            </figure>
            <figure class="brands__logo">
                <img src="@/assets/imgs/heinekenlogo.svg"/>
            </figure>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>

<style lang="scss" scoped>
.brands {
    background: $whitelogoarea;
    position: relative;
    z-index: 2;

    &__conveyor {
        display: flex;
        align-items: center;
        position: relative;
        min-height: #{scaleValue(400)};
        justify-content: center;
        width: 100%;
        background: $whitelogoarea;
    }

    &__logo {
        width: #{scaleValue(450)};
        padding: #{scaleValue(150)} 0;
        flex-shrink: 0;
        position: absolute;
        width: 30%;
        top: 50%;
        left: 50%;
        transform: translate(-30%, -50%);
        animation: slide-item 40s infinite;
        animation-timing-function: linear;
        opacity: 0;
        display: flex;
        justify-content: center;

        & img {
            width: 90%
        }

        &:nth-child(2) {
            animation-delay: 8s;
        }

        &:nth-child(3) {
            animation-delay: 16s;
        }

        &:nth-child(4) {
            animation-delay: 24s;
        }

        &:nth-child(5) {
            animation-delay: 32s;
        }

        &:nth-child(6) {
            animation-delay: 64s;
        }

        &:nth-child(7) {
            animation-delay: 128;
        }

        &:nth-child(8) {
            animation-delay: 256s;
        }

        &:nth-child(9) {
            animation-delay: 512s;
            opacity: 0;
        }
    }
}
</style>