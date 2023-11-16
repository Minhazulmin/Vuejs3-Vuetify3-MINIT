import toast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

export default {
    install: function (app) {
        app.config.globalProperties.toast = toast
    }
}