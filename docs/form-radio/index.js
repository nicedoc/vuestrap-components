import meta from './form-radio.json'
import template from './form-radio.html'
import snippet from './snippet.html'
import vsFormRadio from '../../components/form-radio'
import docsDemo from '../../components/vuestrap/demo'
import {states} from '../../utils'

export default {
    route: {
        path: '/form-radio',
        name: 'form-radio',
        meta: {
            title: 'Form radio',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: {
                name: 'Second',
                value: 'second',
            },
            list: [
                {
                    name: 'First',
                    value: 'first',
                }, {
                    name: 'Second',
                    value: 'second',
                }, {
                    name: 'Third (disabled)',
                    value: 'third',
                    disabled: true,
                },
            ],
            vertical: true,
            custom: true,
            state: 'default',
            states: states,
        }
    },
    components: {
        vsFormRadio,
        docsDemo,
    },
}
