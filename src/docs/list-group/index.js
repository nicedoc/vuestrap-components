import meta from './list-group.json'
import template from './list-group.html'
import snippet from './snippet.html'
import {listGroup as vsListGroup, listGroupItem as vsListGroupItem} from 'src/components/list-group'
import vsBadge from 'src/components/badge'
import docsDemo from 'src/components/vuestrap/demo'
import {states} from 'src/utils'

export default {
  route: {
    path: '/list-group',
    name: 'list-group',
    title: 'List group',
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
