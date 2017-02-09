import meta from './collapse.json'
import template from './collapse.html'
import snippet from './snippet.html'
import {collapse as vsCollapse, collapseToggle as vsCollapseToggle} from '../../components/collapse'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/collapse',
        name: 'collapse',
        meta: {
            title: 'Collapse',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
        }
    },
    components: {
        vsCollapse,
        vsCollapseToggle,
        docsDemo,
    },
}
