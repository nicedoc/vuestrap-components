import meta from './button-radio.json'
import template from './button-radio.html'
import snippet from './snippet.html'
import vsButtonRadio from '../../components/button-radio'
import docsDemo from '../../components/vuestrap/demo'
import {sizes, variants} from '../../utils'

export default {
    route: {
        path: '/button-radio',
        name: 'button-radio',
        meta: {
            title: 'Button Radio',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: {
                text: 'Second',
                value: 'second',
            },
            list: [{
                text: 'First',
                value: 'first',
            }, {
                text: 'Second',
                value: 'second',
            }, {
                text: 'Third',
                value: 'third',
            },
            ],
            size: 'md',
            sizes: sizes,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsButtonRadio,
        docsDemo,
    },
}
