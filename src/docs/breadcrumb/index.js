import meta from './breadcrumb.json'
import template from './breadcrumb.html'
import snippet from './snippet.html'
import vsBreadcrumb from 'src/components/breadcrumb'
import docsDemo from 'src/components/vuestrap/demo'

export default {
  route: {
    path: '/breadcrumb',
    name: 'breadcrumb',
    title: 'Breadcrumb',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      list: [{text: 'Home', link: '/', active: true}, {text: 'Breadcrumb', link: "/breadcrumb", active: true}, {text: 'Demo', active: false}],
    }
  },
  components: {
    vsBreadcrumb,
    docsDemo,
  },
}
