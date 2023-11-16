import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

//Third party plugin
import validation from 'simple-vue-validator';
import validate_plugin from './utils/validate_plugin';
import toast_plugin from './utils/toast_plugin'
// mixin
import toast_mixin from "./mixins/toast"

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(validation)
app.use(validate_plugin)
app.mixin(toast_mixin)
app.use(toast_plugin)

app.mount('#app')
