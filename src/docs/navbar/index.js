import meta from './navbar.json'
import template from './navbar.html'
import snippet from './snippet.html'
import {nav as vsNav, navItem as vsNavItem} from 'src/components/nav'
import vsNavbar from 'src/components/navbar'
import docsDemo from 'src/components/vuestrap/demo'
import {variants} from 'src/utils'

export default {
    route: {
        path: '/navbar',
        name: 'navbar',
        title: 'Navbar',
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            fixed: '',
            fixeds: [{text: 'default', value: ''}, {text: 'top', value: 'top'}, {text: 'bottom', value: 'bottom'}],
            type: 'default',
            types: [{text: 'default', value: 'default'}, {text: 'dark', value: 'dark'}],
            variant: 'default',
            variants: variants.concat([{text: 'inverse', value: 'inverse'}]),
            toggle: 'md',
            toggles: [{text: 'default', value: 'md'}, {text: 'extra small', value: 'xs'}]
        }
    },
    components: {
        vsNav,
        vsNavItem,
        vsNavbar,
        docsDemo,
    },
    watch: {
        type(val) {
            if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
                this.variant = 'inverse'
            }
        },
        variant(val) {
            if (val === 'primary' || val === 'inverse') {
                this.type = 'dark'
            }
        },
    }
}
