<template>
    <div>
        <footer class="footer">
            <div class="footer__left">
                <figure class="footer__logo">
                    <img src="@/assets/imgs/logo.svg"/>
                </figure>

                <h2 class="footer__h2">
                    <span>We Would Love</span>
                    <span>To Hear From You</span>
                </h2>

                <p class="footer__feelfree">
                    Feel free to reach out if you want to collaborate
                </p>
                <p class="footer__feelfree">
                    with us, or simply have a chat
                </p>

                <span class="footer__email">
                    info@culturefoundryco.com
                </span>

                <span class="footer__bbe">
                    A B-BBEE Level 2 contributor
                </span>
            </div>

            <div class="footer__right">

                <div class="footer__rightarea">
                    <div class="footer__rightarea--header">
                        <span class="footer__small">Follow Us</span>
                    </div>

                    <div class="footer__socialitems">
                        <!--<figure class="footer__socialitems--svg">
                            <img src="@/assets/svgs/icon-linkedin1.svg"/>
                        </figure>
                        <figure class="footer__socialitems--svg">
                            <img src="@/assets/svgs/icon-instagram.svg"/>
                        </figure>
                        <figure class="footer__socialitems--svg">
                            <img src="@/assets/svgs/icon-facebook1.svg"/>
                        </figure>-->
                    </div>
                </div>

                <div class="footer__rightarea">
                    <div class="footer__rightarea--header">
                        <span class="footer__small">Address</span>
                    </div>

                    <div class="footer__addresses">
                        <span class="footer__small">The Culture Foundry Co</span>
                        <span class="footer__small">C/0 Workshop17</span>
                        <span class="footer__small">146 Campground Rd</span>
                        <span class="footer__small">Newlands Cricket Grounds, Gate 24 Entrance</span>
                        <span class="footer__small">3rd Floor Snakepit Building</span>
                        <span class="footer__small">Newlands</span>
                        <span class="footer__small">7700</span>
                        <span class="footer__small">South Africa</span>
                    </div>
                </div>

                <div class="footer__rightarea">
                    <span class="footer__yellow">
                        <NuxtLink to="/privacy"></NuxtLink>
                    </span>
                </div>

                <div class="footer__rightarea">
                    <span class="footer__yellow">
                        <NuxtLink to="paia"></NuxtLink>
                    </span>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background: #000;
    color: $white2;

    display: flex;
    justify-content: space-between;
    padding: #{scaleValue(100)} #{scaleValue(200)};

    z-index: 2;

    &__left {
        display: flex;
        flex-direction: column;
    }

    &__logo {
        height: #{scaleValue(65)};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: #{scaleValue(10)};

        & img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            transform: translateX(#{scaleValue(-102)});
        }
    }

    &__feelfree {
        opacity: .6;
        margin-bottom: #{scaleValue(7)};
    }

    &__email {
        text-decoration: underline;
        font-size: #{scaleValue(14)};
        margin-top: #{scaleValue(17)};
    }

    &__bbe {
        font-size: #{scaleValue(17)};
        margin-top: #{scaleValue(20)};
    }

    &__h2 {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: #{scaleValue(35)};
        line-height: #{scaleValue(47)};
        margin-bottom: #{scaleValue(15)};
    }

    &__right {
        display: flex;
        flex-direction: column; 
    }

    &__rightarea {
        display: flex;
        flex-direction: column; 
        margin-bottom: #{scaleValue(30)};

        &--header {
            font-size: #{scaleValue(14)};
            margin-bottom: #{scaleValue(16)};
        }
    }

    &__socialitems {
        display: flex;
        align-items: center;

        &--svg {
            width: #{scaleValue(35)};
            height: #{scaleValue(35)};
            display: flex;
            justify-content: center;
            align-items: center;
            background: $white2;
            border-radius: 100%;

            cursor: pointer;

            margin-right: #{scaleValue(40)};

            & img {
                object-fit: cover;
                height: 60%;
                width: 60%;
            }
        }
    }

    &__addresses {
        display: flex;
        flex-direction: column; 
        line-height: #{scaleValue(25)};
        font-size: #{scaleValue(14)};
    }

    &__small {
        opacity: .8;
    }
}
</style>