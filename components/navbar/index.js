// import dependencies
import template from './navbar.html'

// export component object
export default {
    template: template,
    replace: true,
    computed: {
        navbarType() {
            return !this.type || this.type === `default` || this.type === `light` ? `navbar-light` : `navbar-inverse`
        },
        navbarVariant() {
            return !this.variant || this.variant === `default` ? `bg-faded` : `bg-${this.variant}`
        },
        navbarfixed() {
            return !this.fixed ? `` : `fixed-${this.fixed}`
        },
    },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        variant: {
            type: String,
            default: 'default',
        },
        fixed: {
            type: String,
            default: '',
        },
        full: {
            type: Boolean,
            default: false,
        }
    },
}
