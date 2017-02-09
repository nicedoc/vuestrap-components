import meta from './dropdown-select.json'
import template from './dropdown-select.html'
import snippet from './snippet.html'
import vsDropdownSelect from '../../components/dropdown-select'
import docsDemo from '../../components/vuestrap/demo'
import {sizes, variants, positions} from '../../utils'

export default {
    route: {
        path: '/dropdown-select',
        name: 'dropdown-select',
        meta: {
            title: 'Dropdown Select',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: {
                text: 'First',
                value: 'first',
            },
            list: [
                {
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
            caret: true,
            dropup: false,
            forceDefault: false,
            position: 'left',
            positions: positions,
            size: 'md',
            sizes: sizes,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsDropdownSelect,
        docsDemo,
    },
}
