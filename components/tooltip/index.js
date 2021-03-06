// import dependencies
import Tether from 'tether'
import template from './tooltip.html'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            show: false,
        }
    },
    computed: {
        tooltipAlignment() {
            return !this.position || this.position === `default` ? `tooltip-top` : `tooltip-${this.position}`
        }
    },
    props: {
        position: {
            type: String,
            default: 'top'
        },
        triggers: {
            type: Array,
            default() {
                return ['hover']
            }
        },
        text: {
            type: String,
            default: ''
        },
    },
    methods: {

        /**
         * Toggle 'show' state
         * @param  {Object} e
         * @param  {Boolean} newState (if set use it's value)
         */
        toggle(e, newState) {
            // change state
            this.show = (typeof newState !== 'undefined') ? newState : !this.show

            // Dispatch an event from the current vm that propagates all the way up to its $root
            // element is shown
            if (this.show) {
                let position = {
                    attachment: 'bottom center',
                    targetAttachment: 'top center'
                }
                if (this.position === 'bottom') {
                    position = {
                        attachment: 'top center',
                        targetAttachment: 'bottom center'
                    }
                }
                if (this.position === 'left') {
                    position = {
                        attachment: 'middle right',
                        targetAttachment: 'middle left'
                    }
                }
                if (this.position === 'right') {
                    position = {
                        attachment: 'middle left',
                        targetAttachment: 'middle right'
                    }
                }

                // let tether do the magic, after element is shown
                this._tooltip.style.display = 'block'
                this._tether = new Tether({
                    element: this._tooltip,
                    target: this._trigger,
                    attachment: position.attachment,
                    targetAttachment: position.targetAttachment,
                })
                this.$vuestrap.$emit('shown::tooltip::vuestrap')

                // element gets hidden
            } else {
                // remove the tether reference from the element
                if (this._tether) {
                    this._tooltip.style.display = 'none'
                    this._tether.destroy()
                }
                this.$vuestrap.$emit('hidden::tooltip::vuestrap')
            }
        },

        /**
         * Handle multiple event triggers
         * @param  {Object} e
         */
        _eventHandler(e) {
            // stop propagation to avoid accidental closing on hide::popover event
            e.stopPropagation()

            // if both click and hover are set, on desktop devices click will take precedence
            if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
                return
            }

            // TODO
            // if both click and focus are set, focus will take precedence
            // if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
            //   return
            // }

            // hide popover
            if (e.type === 'click') {
                this.toggle(e)
            } else {
                if (e.type === 'mouseenter' || e.type === 'focus') {
                    this.toggle(e, true)
                } else {
                    this.toggle(e, false)
                }
            }
        }
    },
    created() {
        let self = this;

        this.$vuestrap.$on('hide::tooltip::vuestrap', function(){
            self.toggle(null, false)
        })
    },
    mounted() {
        // TODO
        // animations
        // configure tether
        this._trigger = this.$refs.trigger.children[0]
        this._tooltip = this.$refs.tooltip
        this._tooltip.style.display = 'none'
        const _this = this

        // add listeners for specified triggers anb complementary click event
        this._trigger.addEventListener('click', (e) => _this._eventHandler(e))

        if (this.triggers.indexOf('hover') !== -1) {
            this._trigger.addEventListener('mouseenter', (e) => _this._eventHandler(e))
            this._trigger.addEventListener('mouseleave', (e) => _this._eventHandler(e))
        }
        if (this.triggers.indexOf('focus') !== -1 && this._trigger.tagName.toLowerCase() === 'input') {
            this._trigger.addEventListener('focus', (e) => _this._eventHandler(e))
            this._trigger.addEventListener('blur', (e) => _this._eventHandler(e))
        }
    },

    beforeDestroy() {
        // clean up listeners
        this._trigger.removeEventListener('click', () => _this._eventHandler())
        this._trigger.removeEventListener('mouseenter', () => _this._eventHandler())
        this._trigger.removeEventListener('mouseleave', () => _this._eventHandler())
        this._trigger.removeEventListener('focus', () => _this._eventHandler())
        this._trigger.removeEventListener('blur', () => _this._eventHandler())
    }
}
