<template>
    <div>
        <div class="competencies">
            <h2 class="competencies__h2">
                <span>We Create Memorable Experiences</span>
                <span>that truly move people...</span>
            </h2>

            <div class="competencies__base">
                <div class="competencies__basearea left">
                    <p class="copy">
                        With our strong network of creative talents across the globe, Echo Africa has the best creative minds & tech tools required to evoke strong desire for your product or service, thereby creating a community of people who are strong believers and brand ambassadors in every right. 
                    </p>
                    <p class="copy">
                        Unearthing insights through deep thought research is the first step in creating culture-forward campaigns that tell timeless stories!
                    </p>
                </div>

                <div class="competencies__basearea right">
                    <figure>
                        <img src="@/assets/imgs/sexyblack.avif"/>
                    </figure>
                    <figure>
                        <img src="@/assets/imgs/sexyblack.avif"/>
                    </figure>
                    <figure>
                        <img src="@/assets/imgs/sexyblack.avif"/>
                    </figure>
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
.competencies {
    padding: 0 #{scaleValue(70)};
    padding-top: #{scaleValue(180)};
    padding-bottom: #{scaleValue(180)}; //dev

    &__h2 {
        font-size: #{scaleValue(70)};
        font-weight: 600;
        display: flex;
        flex-direction: column;
        line-height: #{scaleValue(80)};
    }

    &__base {
        display: flex;
        justify-content: space-between;
        //background: red;
        min-height: #{scaleValue(700)};
    }

    &__basearea {

        &.left {
            padding-top: #{scaleValue(80)};
            font-size: #{scaleValue(20)};
            font-weight: 300;

            & p.copy {
                margin-bottom: #{scaleValue(30)};
                width: #{scaleValue(700)};
                line-height: #{scaleValue(30)};
            }
        }

        &.right {
            padding-right: #{scaleValue(80)};
            position: relative;
            transform: translateY(#{scaleValue(-60)});

            & figure {
                height: #{scaleValue(600)};
                width: #{scaleValue(450)};
                position: absolute;
                top: 0;
                left: #{scaleValue(-500)};
                transition: .3s ease-in all;

                &:nth-child(2) {
                    transform: translate(#{scaleValue(40)}, #{scaleValue(40)});
                    z-index: 1;
                }

                &:nth-child(3) {
                    transform: translate(#{scaleValue(80)}, #{scaleValue(80)});
                    z-index: 2;
                }

                //transform: none !important; initial state 

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
}
</style>