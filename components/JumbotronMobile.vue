<template>
    <div>
      <div class="jumbotron">
        <div class="jumbotron__area">
            <h1 class="jumbotron__copy">
                <span class="jumbotron__copy--line">We are a marketing</span>
                <span class="jumbotron__copy--line">agency that focuses</span>
                <span class="jumbotron__copy--line">on strategy and</span>
                <span class="jumbotron__copy--line">design</span>
            </h1>

            <figure class="jumbotron__spiral">
                <img src="@/assets/imgs/spiralsvg.svg"/>
            </figure>

            <div class="jumbotron__scolltext">
                <p class="jumbotron__weareecho black">We are Echo</p>
                <p class="jumbotron__weareecho transparent">We are Echo</p>
            </div>

            <div class="jumbotron__howwethink">
                <div class="jumbotron__howwethink--header">
                    How we think
                </div>
                <div class="jumbotron__howwethink--copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div class="jumbotron__btn">
                        <NuxtLink to="/howwethink">View details</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>

  <style lang="scss" scoped>
    .jumbotron {
        background: green;
    }
    </style>