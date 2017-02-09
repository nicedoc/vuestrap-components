// import dependencies
import template from './dropdown.html'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            show: false
        }
    },
    computed: {
        btnVariant() {
            return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
        },
        btnSize() {
            return !this.size || this.size === `default` ? `` : `btn-${this.size}`
        },
        dropdownToggle() {
            return this.caret ? 'dropdown-toggle' : ''
        },
    },
    props: {
        caret: {
            type: Boolean,
            default: true
        },
        arrow: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'default'
        },
        variant: {
            type: String,
            default: 'default'
        },
        dropup: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        toggle(e) {
            // hide the dropdown menu
            this.show = !this.show
            // Dispatch an event from the current vm that propagates all the way up to its $root
            if (this.show) {
                this.$vuestrap.$emit('shown::dropdown')
                e.stopPropagation()
            } else {
                this.$vuestrap.$emit('hidden::dropdown')
            }
        }
    },

    created () {
        let self =this;
        this.$vuestrap.$on('hide::dropdown', function() {
            self.show = false
        })
    }

}
