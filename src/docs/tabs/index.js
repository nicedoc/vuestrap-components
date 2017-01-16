import meta from './tabs.json'
import template from './tabs.html'
import snippet from './snippet.html'
import {tab as vsTab, tabs as vsTabs} from 'src/components/tabs'
import docsDemo from 'src/components/vuestrap/demo'
import {sizes} from 'src/utils'

export default {
    route: {
        path: '/tabs',
        name: 'tabs',
        meta: {
            title: 'Tabs',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            fade: true,
            size: 'md',
            sizes: sizes,
        }
    },
    components: {
        vsTab,
        vsTabs,
        docsDemo,
    },
}
