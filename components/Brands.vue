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
    background: $white2;
    position: relative;
    z-index: 2;
    margin-top: #{scaleValue(100)};

    @media only screen and (max-width: 414px) {
         overflow-y: hidden;
     }

    &__conveyor {
        display: flex;
        align-items: center;
        position: relative;
        min-height: #{scaleValue(400)};
        width: 100%;
        background: $white2;

        animation: moveleft 30s linear infinite;

        & img {
            height: #{scaleValue(50)};
            margin-right: #{scaleValue(50)};

            @media only screen and (max-width: 414px) {
              height: #{scaleValue(120)};
              margin-right: #{scaleValue(70)};
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>