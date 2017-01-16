import snippet from './snippet.html'
import template from './demo.html'
import meta from './demo.json'
import demo from 'src/components/vuestrap/demo'

export default {
    route: {
        path: '/demo',
        name: 'demo',
        meta: {
            title: 'Demo'
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
        'docs-demo': demo,
    },
}
