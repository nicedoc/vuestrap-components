import meta from './collapse.json'
import template from './collapse.html'
import snippet from './snippet.html'
import {collapse as vsCollapse, collapseToggle as vsCollapseToggle} from 'src/components/collapse'
import docsDemo from 'src/components/vuestrap/demo'

export default {
  route: {
    path: '/collapse',
    name: 'collapse',
    title: 'Collapse',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    vsCollapse,
    vsCollapseToggle,
    docsDemo,
  },
}
