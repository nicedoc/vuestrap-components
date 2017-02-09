import '../../components/images'
import meta from './images.json'
import template from './images.html'
import snippet from './snippet.html'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/images',
        name: 'images',
        meta: {
            title: 'Images',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            controls: false
        }
    },
    components: {
        docsDemo,
    },
}
