import meta from './alert.json'
import template from './alert.html'
import snippet from './snippet.html'
import vsAlert from '../../components/alert'
import docsDemo from '../../components/vuestrap/demo'

export default {
    route: {
        path: '/alert',
        name: 'alert',
        meta: {
            title: 'Alert'
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
        vsAlert,
        docsDemo,
    },
    created: function () {
        let self = this;

        this.$vuestrap.$on('dismissed::alert', function(){
            self.show = false;
        })
    }
}
