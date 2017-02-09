import meta from './form-textarea.json'
import template from './form-textarea.html'
import snippet from './snippet.html'
import vsFormTextarea from '../../components/form-textarea'
import docsDemo from '../../components/vuestrap/demo'
import {states} from '../../utils'

export default {
    route: {
        path: '/form-textarea',
        name: 'form-textarea',
        meta: {
            title: 'Form textarea',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: '',
            state: 'default',
            states: states,
        }
    },
    components: {
        vsFormTextarea,
        docsDemo,
    },
}
