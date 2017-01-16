import meta from './card.json'
import template from './card.html'
import snippet from './snippet.html'
import vsCard from 'src/components/card'
import docsDemo from 'src/components/vuestrap/demo'
import {variants} from 'src/utils'

export default {
    route: {
        path: '/card',
        name: 'card',
        meta: {
            title: 'Card',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            align: 'left',
            aligns: [{text: 'left', value: 'left'}, {text: 'center', value: 'center'}, {text: 'right', value: 'right'}],
            type: 'default',
            types: [{text: 'default', value: 'default'}, {text: 'inverse', value: 'inverse'}, {
                text: 'image-overlay',
                value: 'image-overlay'
            }],
            variant: 'default',
            variants: variants,
        }
    },
    components: {
        vsCard,
        docsDemo,
    },
}
