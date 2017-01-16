import meta from './button-group.json'
import template from './button-group.html'
import snippet from './snippet.html'
import vsButtonGroup from 'src/components/button-group'
import vsButton from 'src/components/buttons'
import docsDemo from 'src/components/vuestrap/demo'

export default {
    route: {
        path: '/button-group',
        name: 'button-group',
        meta: {
            title: 'Button Group',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            vertical: false
        }
    },
    components: {
        vsButton,
        vsButtonGroup,
        docsDemo,
    },
}
