import meta from './popover.json'
import template from './popover.html'
import snippet from './snippet.html'
import vsPopover from '../../components/popover'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/popover',
        name: 'popover',
        meta: {
            title: 'Popover',
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
        vsPopover,
        docsDemo,
    },
}
