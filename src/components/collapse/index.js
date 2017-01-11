// import dependencies
import template from './collapse.html'
import {csstransitions} from '../../utils/helpers.js'

// for browsers that do not support transitions like IE9 just change immediately
const TRANSITION_DURATION = csstransitions() ? 350 : 0

// export component object
export const collapse = {
    template: template,
    replace: true,
    props: {
        id: {
            type: String,
            default: '',
        },
        group: {
            type: String,
            default: '',
        }
    },
    methods: {
        show() {
            this.$el.classList.remove('collapse')
            const height = this.$el.scrollHeight
            this.$el.classList.add('collapsing')
            this.$el.offsetWidth
            this.$el.style.height = height + 'px'
            this._collapseAnimation = setTimeout(() => {
                this.$el.classList.remove('collapsing')
                this.$el.classList.add('collapse')
                this.$el.classList.add('show')
                this.$vuestrap.$emit('toggled::collapsed', {id: this.id, group: this.group, expanded: true})
                this.$el.style.height = null
            }, TRANSITION_DURATION)
        },
        hide() {
            this.$el.style.height = this.$el.scrollHeight + 'px'
            this.$el.classList.remove('collapse')
            this.$el.classList.remove('show')
            this.$el.classList.add('collapsing')
            this.$el.offsetWidth
            this.$el.style.height = '0px'
            this._collapseAnimation = setTimeout(() => {
                this.$el.classList.remove('collapsing')
                this.$el.classList.add('collapse')
                this.$vuestrap.$emit('toggled::collapsed', {id: this.id, group: this.group, expanded: false})
                this.$el.style.height = null
            }, TRANSITION_DURATION)
        }
    },
    created: function () {
        let self = this;

        // collapse callback
        this.$vuestrap.$on('toggled::collapse', function (data) {
            let shouldPropagate = true

            if (data.id && data.id === self.id && !data.group || data.group && data.group === self.group && !data.id) {
                if ((self.$el.className + ' ').indexOf(' show ') > -1) {
                    self.hide()
                } else {
                    self.show()
                }
                shouldPropagate = false
            }
            return shouldPropagate
        });

        this.$vuestrap.$on('toggled::accordion', function (data) {
            let shouldPropagate = true
            // if id and group id is provided it means it is an accordion and takes priority over all
            if (data.id && data.group && data.group === self.group) {
                // for current element
                if (data.id === self.id) {
                    // collapse if selected item is already opened
                    if ((self.$el.className + ' ').indexOf(' show ') > -1) {
                        self.hide()
                    } else {
                        self.show()
                    }
                } else {
                    // ignore if non-selected item is already closed
                    if ((self.$el.className + ' ').indexOf(' show ') === -1)
                        return shouldPropagate

                    // close all items in the group, and open the one selected
                    self.hide()
                }

                shouldPropagate = false
            }

            return shouldPropagate
        })
    },

    destroyed() {
        clearTimeout(this._collapseAnimation)
    }
}

// export component object
export const collapseToggle = {
    template: '<span v-on:click.stop.prevent="toggle($event)" :class="{collapsed: !expanded}" :aria-expanded="expanded ? \'true\' : \'false\'" :aria-controls="target"><slot></slot></span>',
    replace: true,
    computed: {},
    props: {
        target: {
            type: String,
            default: ''
        },
        targetGroup: {
            type: String,
            default: ''
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            // if both attributes missing, ignore
            if (!this.target && !this.targetGroup) return

            // broadcast accordion toggle if both id and group are set otherwise broadcast collapse
            // we also use dispatch to tell other components about the change
            if (this.target && this.targetGroup) {
                this.$vuestrap.$emit('toggled::accordion', {id: this.target, group: this.targetGroup})
            } else {
                this.$vuestrap.$emit('toggled::collapse', {id: this.target, group: this.targetGroup})
            }
        }
    },
    events: {
        'toggled::collapsed'(data) {
            if (data.id && data.id === this.target && !data.group || data.group && data.group === this.targetGroup && !data.id) {
                this.expanded = data.expanded;
            }
        }
    },
}
