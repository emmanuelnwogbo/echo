<template>
    <div>
      <div class="brands">
        <div class="brands__conveyor">
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
            <img src="@/assets/imgs/farmfortelogo.svg"/>
            <img src="@/assets/imgs/oraimologo.svg"/>
            <img src="@/assets/imgs/heinekenlogo.svg"/>
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
        width: 100%;
        background: $whitelogoarea;

        animation: moveleft 30s linear infinite;

        & img {
            height: #{scaleValue(50)};
            margin-right: #{scaleValue(50)};

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>