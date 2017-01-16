import meta from './badge.json'
import template from './badge.html'
import snippet from './snippet.html'
import vsBadge from 'src/components/badge'
import docsDemo from 'src/components/vuestrap/demo'
import {variants} from 'src/utils'

export default {
    route: {
        path: '/badge',
        name: 'badge',
        meta: {
            title: 'Badge'
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            variant: 'primary',
            variants: variants,
            type: 'default',
            types: [{text: 'default', value: 'default'}, {text: 'pill', value: 'pill'}],
        }
    },
    components: {
        vsBadge,
        docsDemo,
    },
}
