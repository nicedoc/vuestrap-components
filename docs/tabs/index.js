import meta from './tabs.json'
import template from './tabs.html'
import snippet from './snippet.html'
import {tab as vsTab, tabs as vsTabs} from '../../components/tabs'
import docsDemo from '../../components/vuestrap/demo'
import {sizes} from '../../utils'

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
