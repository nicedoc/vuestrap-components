import meta from './list-group.json'
import template from './list-group.html'
import snippet from './snippet.html'
import {listGroup as vsListGroup, listGroupItem as vsListGroupItem} from '../../components/list-group'
import vsBadge from '../../components/badge'
import docsDemo from '../../components/vuestrap/demo'
import {states} from '../../utils'

export default {
    route: {
        path: '/list-group',
        name: 'list-group',
        meta: {
            title: 'List group',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            state: 'success',
            flush: false,
            states: states.concat([{text: 'info', value: 'info'}]),
            type: 'default',
            types: [{text: 'default', value: 'default'}, {text: 'pill', value: 'pill'}],
        }
    },
    components: {
        vsListGroup,
        vsListGroupItem,
        vsBadge,
        docsDemo,
    },
}
