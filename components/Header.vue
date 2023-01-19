<template>
    <div>
        <div class="header">
            <div class="header__logoarea header__area">
                <NuxtLink to="/">
                    <figure class="header__logo">
                        <img src="@/assets/imgs/logo.svg"/>
                    </figure>
                </NuxtLink>
            </div>

            <div class="header__menuarea header__area">
                <div class="header__menuitem">
                    <NuxtLink to="/howwethink">How we think</NuxtLink>
                </div>
                <div class="header__menuitem">
                    <NuxtLink to="/competencies">Competencies</NuxtLink>
                </div>
                <div class="header__menuitem">
                    <NuxtLink to="/howwethink">Who we are</NuxtLink>
                </div>
                <div class="header__menuitem">
                    <NuxtLink to="/howwethink">Billboards</NuxtLink>
                </div>
                <div class="header__menuitem">
                    <NuxtLink to="/howwethink">Say Hello</NuxtLink>
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
.header {
    background: rgba(241, 106, 131, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: #{scaleValue(15)} #{scaleValue(100)};

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 3;


    &__area {
        display: flex;
        align-items: center;
    }

    &__logo {
        height: #{scaleValue(65)};
        display: flex;
        align-items: center;

        & img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }

    &__menuitem {
        margin-left: #{scaleValue(35)};

        & a {
            text-decoration: none;
            color: rgba(255, 255, 255, 1);
            font-size: #{scaleValue(16)};
            font-size: 600;
            text-transform: capitalize;
        }
    }
}
</style>