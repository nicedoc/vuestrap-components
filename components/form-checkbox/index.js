// import dependencies
import '../custom-forms'
import template from './form-checkbox.html'

// export component object
export default {
    template: template,
    replace: true,
    data: function () {
        return {
            selection: this.model
        }
    },
    computed: {
        inputState() {
            return !this.state || this.state === `default` ? `` : `has-${this.state}`
        },
    },
    props: {
        list: {
            type: Array,
            default: [],
            required: true
        },
        model: {
            type: Array,
            default: []
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
        list: {
            handler() {
                this.selection = []
                this.list.forEach((item) => {
                    if (item.checked) {
                        if (this.returnObject) {
                            this.selection.push(item)
                        } else {
                            this.selection.push(item.value)
                        }
                    }
                })
                // dispatch an event
                this.$vuestrap.$emit('changed::button-checkbox', this.selection)
            },
            deep: true,
        }
    },
    created: function () {
        // handle initial selection
        this.list.forEach((item) => {
            if (this.returnObject) {
                this.selection.forEach((modelItem) => {
                    if (modelItem.value === item.value) {
                        item.checked = true
                    }
                })
            } else {
                if (this.selection.indexOf(item.value) !== -1) {
                    item.checked = true
                }
            }
        })
    }
}
