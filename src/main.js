import { createApp } from 'vue'
import './scss/styles.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import 'bootstrap'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const app = createApp(App)

app.use(FloatingVue)

app.directive('bs-tooltip', {
    mounted(el) {
        new bootstrap.Tooltip(el)
    },
    updated(el) {
        const tooltip = bootstrap.Tooltip.getInstance(el)
        if (tooltip) {
            tooltip.setContent({ '.tooltip-inner': el.getAttribute('data-bs-title') })
        }
    },
    beforeUnmount(el) {
        const tooltip = bootstrap.Tooltip.getInstance(el)
        if (tooltip) {
            tooltip.dispose()
        }
    }
})

app.mount('#app')


