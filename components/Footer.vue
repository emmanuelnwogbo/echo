<template>
    <div>
      <div class="footer">
        <figure class="footer__logo">
            <img src="@/assets/imgs/logo.svg"/>
        </figure>

        <h2 class="footer__h2">
            <span>We would love</span>
            <span>to hear from you</span> 
        </h2>
        <div class="footer__feelfree">
            <span>Feel free to reach out if you want to collaborate</span>
            <span>with us, or simply have a chat.</span>
        </div>
        <span class="footer__email">info@EchoAfrica.com</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>

<style lang="scss" scoped>
.footer {
    min-height: #{scaleValue(900)};
    background: $footerblack;
    padding: #{scaleValue(130)} #{scaleValue(80)};
    color: $white;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    &__logo {
        margin-bottom: #{scaleValue(50)};
        
        & img {
            height: #{scaleValue(80)};
            width: auto
        }
    }

    &__h2 {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: #{scaleValue(64)};
        line-height: #{scaleValue(73)};
        letter-spacing: #{scaleValue(0.16)};
        margin-bottom: #{scaleValue(20)};
    }

    &__feelfree {
        display: flex;
        flex-direction: column;
        font-weight: 100;
        font-size: #{scaleValue(32)};
        margin-bottom: #{scaleValue(20)};
    }

    &__email {
        font-weight: 500;
        font-size: #{scaleValue(40)};
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            background: $white;
            height: #{scaleValue(2)};
            width: #{scaleValue(133)};
            bottom: #{scaleValue(-2)};
            border-radius: 3rem;
        }
    }
}
</style>
  