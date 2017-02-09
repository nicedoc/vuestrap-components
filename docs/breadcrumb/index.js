import meta from './breadcrumb.json'
import template from './breadcrumb.html'
import snippet from './snippet.html'
import vsBreadcrumb from '../../components/breadcrumb'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/breadcrumb',
        name: 'breadcrumb',
        meta: {
            title: 'Breadcrumb'
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            list: [{text: 'Home', link: '/', active: true}, {
                text: 'Breadcrumb',
                link: "/breadcrumb",
                active: true
            }, {text: 'Demo', active: false}],
        }
    },
    components: {
        vsBreadcrumb,
        docsDemo,
    },
}
