import meta from './pagination.json'
import template from './pagination.html'
import snippet from './snippet.html'
import vsPagination from 'src/components/pagination'
import docsDemo from 'src/components/vuestrap/demo'
import {sizes, variants} from 'src/utils'

export default {
  route: {
    path: '/pagination',
    name: 'pagination',
    title: 'Pagination',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      vertical: false,
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
      totalRows: 420,
      currentPage: 5,
      perPage: 10,
    }
  },
  components: {
    vsPagination,
    docsDemo,
  },
}
