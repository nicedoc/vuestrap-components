// import dependencies
import template from './pagination.html'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            diff: 1,
            showPrev: false,
            showNext: false,
            current: this.currentPage,
        }
    },
    computed: {
        numberOfPages() {
            const result = Math.ceil(this.totalRows / this.perPage)
            return (result < 1) ? 1 : result
        },
        btnSize() {
            return !this.size || this.size === `default` ? `` : `btn-${this.size}`
        },
        pageLinks() {
            let result = this.limit
            if (this.current > this.numberOfPages) {
                this.current = 1
            }
            this.diff = 0
            this.showPrev = false
            this.showNext = false

            // if less pages than limit just show this pages
            if (this.numberOfPages <= this.limit) {
                return this.numberOfPages
            }

            // if at the beginning of the list or at the end show full number of pages within limit - 2
            // -2 is reserves space for two buttons: "..." and "first/last button"
            if (this.current <= this.limit - 2) {
                this.diff = 0
                this.showNext = true
                result = this.limit - 2
            }

            // at the end of the range
            if (this.current > this.numberOfPages - this.limit + 2) {
                this.diff = this.numberOfPages - this.limit + 2
                this.showPrev = true
                result = this.limit - 2
            }

            // if somehere in the middle show just limit - 4 links in the middle
            // and one button on the left with "..."
            // and on button on the right preceeded with "..."
            if (this.current >= this.limit - 2 && this.current <= this.numberOfPages - this.limit + 2) {
                this.diff = this.current - Math.ceil((this.limit-4)/2)
                this.showPrev = true
                this.showNext = true
                result = this.limit - 4
            }
            return result
        },
    },
    methods: {
        btnVariant(index) {
            return (index + this.diff === this.current) ? `btn-${this.variant}` : `btn-secondary`
        },
    },
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        limit: {
            type: Number,
            default: 11,
        },
        perPage: {
            type: Number,
            default: 20,
        },
        totalRows: {
            type: Number,
            default: 20,
        },
        size: {
            type: String,
            default: 'secondary',
        },
        variant: {
            type: String,
            default: '',
        },
    },

    created() {
        let self = this;

        this.$vuestrap.$on('prev::pagination::vuestrap', function () {
            if (self.current > 1) {
                self.current--;
            }
        });

        this.$vuestrap.$on('next::pagination::vuestrap', function () {
            if (self.current < self.numberOfPages) {
                self.current++
            }
        });

        this.$vuestrap.$on('goto::pagination::vuestrap', function (page) {
            if (page >= 1 && page <= self.numberOfPages) {
                self.current = page;
            }
        });
    }
}
