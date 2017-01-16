import template from './introduction.html'
import pkg from 'package.json'

export default {
    route: {
        path: '/',
        name: 'introduction',
        meta: {
            title: 'Intoduction',
        }
    },
    template: template,
    data() {
        return {
            pkg: pkg,
        }
    },
}
