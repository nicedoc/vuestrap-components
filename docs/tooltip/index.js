import meta from './tooltip.json'
import template from './tooltip.html'
import snippet from './snippet.html'
import vsTooltip from '../../components/tooltip'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/tooltip',
        name: 'tooltip',
        meta: {
            title: 'Tooltip',
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
        vsTooltip,
        docsDemo,
    },
}
