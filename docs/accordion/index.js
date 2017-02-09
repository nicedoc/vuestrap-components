import meta from './accordion.json'
import template from './accordion.html'
import snippet from './snippet.html'
import {collapse as vsCollapse, collapseToggle as vsCollapseToggle} from '../../components/collapse'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/accordion',
        name: 'accordion',
        meta: {
            title: 'Accordion'
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
