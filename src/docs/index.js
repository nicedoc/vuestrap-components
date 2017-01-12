// import normalize, grid, utilities and
import 'vuestrap/core'
// impoprt styling required for docs
import 'vuestrap/components'

// import modules and pages
import introduction from './introduction'
import docsPages from './docs-pages'
import demo from './demo'
import search from './search'

import accordion from './accordion'
import alert from './alert'
import badge from './badge'
import breadcrumb from './breadcrumb'
import collapse from './collapse'

export default {
    pages: [
        accordion,
        alert,
        badge,
        breadcrumb,
        collapse,

        introduction,
        docsPages,
        demo,
        search,
    ]
}
