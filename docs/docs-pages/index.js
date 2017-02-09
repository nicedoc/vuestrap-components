import snippet from './snippet.html'
import template from './docs-pages.html'
import meta from './docs-pages.json'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/docs-pages',
        name: 'docs-pages',
        meta: {
            title: 'Docs Pages'
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
        docsDemo,
    },
}
