import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import PrimeVue from "primevue/config"
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Fieldset from 'primevue/fieldset'
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Fieldset', Fieldset)
app.component('Timeline', Timeline)
app.component('Card', Card)


app.mount('#app')
