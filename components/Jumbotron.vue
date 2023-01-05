<template>
    <div>
      <div class="jumbotron">
        <h1 class="jumbotron__copy" id="jumbotron_copy">
            <span>We are a marketing</span>
            <span>agency that focuses</span>
            <span>on strategy and</span>
            <span>design</span>
        </h1>

        <!--<figure class="jumbotron__spiral" id="jumbotrob_spiral1" :class="{
          visible
        }" v-for="item in toggllerArr">
          <img src="@/assets/imgs/spiral.svg"/>
        </figure>-->

        <div class="jumbotron__spiraltra">
          <figure class="jumbotron__spiral">
            <img src="@/assets/imgs/spiral.svg"/>
          </figure>

          <figure class="jumbotron__spiral">
            <img src="@/assets/imgs/spiral.svg"/>
         </figure>

          <figure class="jumbotron__spiral">
            <img src="@/assets/imgs/spiral.svg"/>
          </figure>

          <figure class="jumbotron__spiral">
            <img src="@/assets/imgs/spiral.svg"/>
          </figure>
        </div>

        <div class="jumbotron__spiralcolo">
          <figure class="jumbotron__spiralcolored">
            <img src="@/assets/imgs/coloredspiral.svg"/>
          </figure>

          <figure class="jumbotron__spiralcolored">
            <img src="@/assets/imgs/coloredspiral.svg"/>
         </figure>

          <figure class="jumbotron__spiralcolored">
            <img src="@/assets/imgs/coloredspiral.svg"/>
          </figure>

          <figure class="jumbotron__spiralcolored">
            <img src="@/assets/imgs/coloredspiral.svg"/>
          </figure>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: true,
        togller: 0,
        toggllerArr: [0, 1, 2, 3]
      }
    },
    methods: {
      animateSpiral() {
        setInterval(() => {
          let item = this.toggller;
          item+1;
          this.toggller = item;
          this.toggllerArr.push(this.togller);
        }, 1000);
      }
    },
    mounted() {
      //this.animateSpiral();
    },
    watch: {
      toggllerArr(newval, oldval) {
        if (newval.length >= 8) {
          let arr = newval;
          arr.splice(0,4);
          this.toggllerArr = arr;
        }
      }
    }
  }
  </script>

<style lang="scss" scoped>

.jumbotron {
    background: linear-gradient(180deg, rgba(241, 105, 97, 1) 12.09%, #F16961 93.7%);
    height: #{scaleValue(900)};
    padding-left: #{scaleValue(100)};
    padding-top:  #{scaleValue(170)};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: #{scaleValue(500)};
      z-index: 1;
      background: linear-gradient(0deg,rgba(241, 105, 97, 1),hsla(0,0%,100%,0));
    }

    &__copy {
        color: $jumbotron-black;
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: #{scaleValue(96)};
        letter-spacing: #{scaleValue(0.16)};
        line-height: #{scaleValue(101)};

        animation-duration: .8s;
        animation-name: moveInUp;
        display: none;
    }

    &__spiral {
      position: fixed;
      top: #{scaleValue(150)};
      right: #{scaleValue(10)};
      height: #{scaleValue(1000)};

      &:nth-child(2) {
        animation: spiralanima 4s ease-in-out infinite;
      }

      &:nth-child(3) {
        animation: spiralanima 5s ease-in-out infinite;
      }

      &:nth-child(4) {
        animation: spiralanima 6s ease-in-out infinite;
      }

      &:nth-child(5) {
        animation: spiralanima 7s ease-in-out infinite;
      }
    }

    &__spiralcolored {
      position: fixed;
      top: #{scaleValue(200)};
      right: #{scaleValue(100)};
      height: #{scaleValue(1000)};
    }
}
</style>