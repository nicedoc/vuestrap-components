import meta from './buttons.json'
import template from './buttons.html'
import snippet from './snippet.html'
import vsBtn from '../../components/buttons'
import docsDemo from '../../components/vuestrap/demo'
import {sizes, variants} from '../../utils'

export default {
    route: {
        path: '/buttons',
        name: 'buttons',
        meta: {
            title: 'Buttons',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            size: 'md',
            sizes: sizes,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsBtn,
        docsDemo,
    },
}

