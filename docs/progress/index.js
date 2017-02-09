import meta from './progress.json'
import template from './progress.html'
import snippet from './snippet.html'
import vsProgress from '../../components/progress'
import docsDemo from '../../components/vuestrap/demo'
import {variants} from '../../utils'

export default {
    route: {
        path: '/progress',
        name: 'progress',
        meta: {
            title: 'Progress',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            value: 25,
            animated: true,
            striped: true,
            variant: 'primary',
            variants: variants,
        }
    },
    components: {
        vsProgress,
        docsDemo,
    },
}
