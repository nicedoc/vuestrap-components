// import dependencies
import '../custom-forms'
import template from './form-radio.html'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            selection: '',
            current: this.model
        }
    },
    computed: {
        inputState() {
            return !this.state || this.state === `default` ? `` : `has-${this.state}`
        },
    },
    props: {
        model: {
            twoWay: true,
            required: true
        },
        name: {
            type: String,
            default: 'options'
        },
        list: {
            type: Array,
            default: [],
            required: true
        },
        custom: {
            type: Boolean,
            default: true
        },
        vertical: {
            type: Boolean,
            default: false
        },
        state: {
            type: String,
            default: 'default'
        },
        returnObject: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        selection: {
            handler() {
                // set the model based on selection
                if (this.returnObject) {
                    this.list.forEach((item) => {
                        if (item.value === this.selection) {
                            this.current = item
                        }
                    })
                } else {
                    this.current = this.selection
                }
                // dispatch an event
                this.$vuestrap.$emit('changed::button-radio', this.current)
            },
            deep: true,
        }
    },
    created() {
        // handle initial selection
        this.selection = this.model.value
    }
}
