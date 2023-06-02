export default {
    data() {
        return {
            url: `http://localhost:8080`
        }
    },
    computed: {
        brand_link: function () {
            return `${this.url}/`
        }
    }
}