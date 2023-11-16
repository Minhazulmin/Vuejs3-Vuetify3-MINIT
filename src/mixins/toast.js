export default {
    methods: {
        $toast(message, type, title = "") {
            this.toast[type]({
                title: title ? title : type.toUpperCase(), message,
            })
        }
    },
}