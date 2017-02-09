import meta from './tables.json'
import template from './tables.html'
import snippet from './snippet.html'
import vsTable from '../../components/tables'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/tables',
        name: 'tables',
        meta: {
            title: 'Tables',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            hover: false,
        }
    },
    components: {
        vsTable,
        docsDemo,
    },
}
