import meta from './button-checkbox.json'
import template from './button-checkbox.html'
import snippet from './snippet.html'
import vsButtonCheckbox from '../../components/button-checkbox'
import docsDemo from '../../components/vuestrap/demo'
import {sizes, variants} from '../../utils'

export default {
    route: {
        path: '/button-checkbox',
        name: 'button-checkbox',
        meta: {
            title: 'Button Checkbox'
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            model: [{text: 'Second', value: 'second'}],
            list: [{
                text: 'First',
                checked: false,
                value: 'first'
            }, {
                text: 'Second',
                checked: false,
                value: 'second'
            }, {
                text: 'Third',
                checked: false,
                value: 'third'
            },
            ],
            size: 'md',
            sizes: sizes,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsButtonCheckbox,
        docsDemo,
    },
    created: function () {
        let self = this;

        this.$vuestrap.$on('changed::button-checkbox', function (model) {
            self.model = model
        })
    }
}
