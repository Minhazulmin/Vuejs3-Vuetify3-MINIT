// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify(
    {
        icons: {
            defaultSet: 'mdi', // This is already the default value - only for display purposes
        },
    }
)
