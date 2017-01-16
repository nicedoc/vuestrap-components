import meta from './nav.json'
import template from './nav.html'
import snippet from './snippet.html'
import {nav as vsNav, navItem as vsNavItem} from 'src/components/nav'
import docsDemo from 'src/components/vuestrap/demo'

export default {
    route: {
        path: '/navigation',
        name: 'navigation',
        meta: {
            title: 'Nav',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            vertical: false,
            type: 'default',
            types: [{text: 'default', value: 'default'}, {text: 'pills', value: 'pills'}, {
                text: 'navbar',
                value: 'navbar'
            }],
        }
    },
    components: {
        vsNav,
        vsNavItem,
        docsDemo,
    },
    watch: {
        type(val) {
            if (val === 'navbar') {
                this.vertical = false
            }
        },
        vertical(val) {
            if (val) {
                this.type = 'default'
            }
        }
    }
}
