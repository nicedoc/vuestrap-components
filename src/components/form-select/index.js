// import dependencies
import {uniqueId} from '../../utils/helpers.js'
import template from './form-select.html'

// export component object
export default {
    template: template,
    replace: true,
    data(){
        return {
            selection: this.model
        }
    },
    computed: {
        allOptions(){
            if (this.defaultOption.text && this.defaultOption.value) {
                return [this.defaultOption].concat(this.options)
            }
            return this.options
        },
        inputState() {
            return !this.state || this.state === `default` ? `` : `has-${this.state}`
        },
        inputSize() {
            return !this.size || this.size === `default` ? `` : `form-control-${this.size}`
        },
    },
    props: {
        model: {
            twoWay: true,
            required: true
        },
        multiple: {
            type: Boolean,
            required: false
        },
        options: {
            type: Array,
            default: [],
            required: true,
        },
        id: {
            type: String,
            default: uniqueId
        },
        label: {
            type: String,
            default: false
        },
        defaultOption: {
            type: Object,
            default() {
                return {}
            }
        },
        description: {
            type: String,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
    },
    watch: {
        model(val, oldVal) {
            if (val === oldVal) return
            // Dispatch an event from the current vm that propagates all the way up to it's $root
            this.$vuestrap.$emit('selected::option', val)
        }
    }
}
