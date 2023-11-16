import validation from 'simple-vue-validator';
const Validator = validation.Validator

export default {
    install: function (app) {
        app.config.globalProperties.Validator = Validator
    }
}