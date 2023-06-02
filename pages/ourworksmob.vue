<template>
    <div class="ourworks">
        <div class="ourworks__content">
            <section class="ourworks__section" v-for="(item, index) in items"
            :class="{}"
            :style="{}"
            >
                <figure @click="gotolink(item.link)">
                    <div class="ourworks__title">
                        <h1>{{ item.name }}</h1>
                    </div>
                    <img :src="item.img" />
                </figure>
            </section>
        </div>
    </div>
</template>

<script>
import url from '@/mixins/url.js';
export default {
    data() {
        return {
            current: 0
        }
    },
    mixins: [url],
    methods: {
        gotolink(link) {
            window.location.href = `${this.url}/${link}`;
        },
        isElementAtTop(element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 0;
        },
        handleScroll() {
            const sections = document.querySelectorAll('.ourworks__section');

            sections.forEach((section, index) => {
                const section_figure = section.firstElementChild;

                if (this.isElementAtTop(section)) {
                    section_figure.style.position = 'fixed';
                    section_figure.style.top = '0';
                    section_figure.style.left = '0';
                } else if (!this.isElementAtTop(section)) {
                    section_figure.style.position = 'relative';
                    section_figure.style.top = '0';
                    section_figure.style.left = '0';
                }
            } )
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        items: function() {
            return [
                {
                    link: 'moneypigeon',
                    id: 0,
                    name: 'Money Pigeon',
                    img: 'https://rebel-sam.s3.eu-west-2.amazonaws.com/websitelements/workspage/moneypigeon/Slideshow+of+Creatives/CRYPTO.jpg'
                },
                {
                    link: 'oraimo',
                    id: 1,
                    name: 'Oraimo open audio',
                    img: 'https://rebel-sam.s3.eu-west-2.amazonaws.com/websitelements/workspage/ORAIMO+OPEN+AUDIO/SLIDER+CREATIVE/open-audio-newArtboard-2.png'
                },
                {
                    link: 'oraimowaye',
                    id: 2,
                    name: 'Oraimo Waye',
                    img: 'https://rebel-sam.s3.eu-west-2.amazonaws.com/websitelements/workspage/ORAIMO+WAYE/CaseStudy+Images/O-11.jpg'
                },
                {
                    link: 'pernodricard',
                    id: 3,
                    name: 'Pernod Ricard',
                    img: 'https://rebel-sam.s3.eu-west-2.amazonaws.com/websitelements/workspage/PERNOD+RICARD/CASE+STUDY/Screenshot+2023-02-02+at+03.34.22.png'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.ourworks {
    background: $footerblack;
    min-height: 100vh;

    &__title {
        position: absolute;
        top: 0;
        left: 0;
        height: #{scaleValue(3250)};
        width: 100vw;
        background: rgba(0, 0, 0, .6);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        & h1 {
            color: $white;
            text-transform: uppercase;
            font-size: #{scaleValue(170)};
            font-weight: 500;
            transform: translateY(#{scaleValue(-300)});
            text-align: center;
        }
    }
    
    &__content {
        margin-top: #{scaleValue(315)};
        overflow: hidden;
    }

    &__section {
        height: #{scaleValue(3250)};
        position: relative;

        & figure {
            height:  #{scaleValue(3250)};
            width: 100vw;
            position: relative;

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>