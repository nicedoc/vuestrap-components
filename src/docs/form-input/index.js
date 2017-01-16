import meta from './form-input.json'
import template from './form-input.html'
import snippet from './snippet.html'
import vsFormInput from 'src/components/form-input'
import docsDemo from 'src/components/vuestrap/demo'
import {sizes, states} from 'src/utils'

export default {
    route: {
        path: '/form-input',
        name: 'form-input',
        meta: {
            title: 'Form input',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: '',
            custom: true,
            vertical: true,
            size: 'md',
            sizes: sizes,
            state: 'success',
            states: states,
            stateIcon: true,
        }
    },
    components: {
        vsFormInput,
        docsDemo,
    },
}
