import 'src/components/images'
import meta from './images.json'
import template from './images.html'
import snippet from './snippet.html'
import docsDemo from 'src/components/vuestrap/demo'

export default {
  route: {
    path: '/images',
    name: 'images',
    title: 'Images',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    docsDemo,
  },
}
