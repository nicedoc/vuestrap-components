import meta from './flash.json'
import template from './flash.html'
import snippet from './snippet.html'
import vsFlash from '../../components/flash'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/flash',
        name: 'flash',
        meta: {
            title: 'Flash'
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            show: true,
            dismissible: true,
            message: '<strong>Note</strong> This is an html message',
            state: 'success',
            states: [
                {text: 'default', value: 'default'},
                {text: 'success', value: 'success'},
                {text: 'danger', value: 'danger'},
                {text: 'warning', value: 'warning'},
                {text: 'info', value: 'info'},
            ],
        }
    },
    components: {
        vsFlash,
        docsDemo,
    },
    created: function () {
        let self = this;

        this.$vuestrap.$on('dismissed::flash', function(){
            self.show = false;
        })
    }
}
