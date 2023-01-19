<template>
    <div>
        <div class="mobile">
            hello mobile
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mobile {
    padding-top: #{scaleValue(380)};
    display: none;

    @media only screen and (max-width: 414px) {
        display: block;
    }
}
</style>