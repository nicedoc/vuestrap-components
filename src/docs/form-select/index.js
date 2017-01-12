import meta from './form-select.json'
import template from './form-select.html'
import snippet from './snippet.html'
import vsFormSelect from 'src/components/form-select'
import docsDemo from 'src/components/vuestrap/demo'
import {sizes, states} from 'src/utils'

export default {
  route: {
    path: '/form-select',
    name: 'form-select',
    title: 'Form select',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: 'male',
      options: [
        {
          text: 'Male',
          value: 'male',
        }, {
          text: 'Female',
          value: 'female',
        },
      ],
      size: 'md',
      sizes: sizes,
      state: 'default',
      states: states,
    }
  },
  components: {
    vsFormSelect,
    docsDemo,
  },
}
