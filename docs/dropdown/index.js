import meta from './dropdown.json'
import template from './dropdown.html'
import snippet from './snippet.html'
import vsDropdown from '../../components/dropdown'
import docsDemo from '../../components/vuestrap/demo'
import {sizes, variants} from '../../utils'

export default {
    route: {
        path: '/dropdown',
        name: 'dropdown',
        meta: {
            title: 'Dropdown',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            arrow: true,
            caret: true,
            dropup: false,
            size: 'md',
            sizes: sizes,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsDropdown,
        docsDemo,
    },
}
