// import dependencies
import template from './badge.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    labelVariant() {
      return !this.variant || this.variant === `default` ? `badge-default` : `badge-${this.variant}`
    },
    labelType() {
      return !this.type ? `` : `badge-${this.type}`
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: ''
    }
  }
}
