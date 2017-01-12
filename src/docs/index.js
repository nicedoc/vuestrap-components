// import normalize, grid, utilities and
import 'vuestrap/core'
// impoprt styling required for docs
import 'vuestrap/components'

// import modules and pages
import introduction from './introduction'
import docsPages from './docs-pages'
import demo from './demo'
import search from './search'

import accordion from 'src/docs/accordion'
import alert from 'src/docs/alert'
import badge from 'src/docs/badge'
import breadcrumb from 'src/docs/breadcrumb'
import buttons from 'src/docs/buttons'
import buttonGroup from 'src/docs/button-group'
import buttonCheckbox from 'src/docs/button-checkbox'
import buttonRadio from 'src/docs/button-radio'
import card from 'src/docs/card'
import collapse from 'src/docs/collapse'
import dropdown from 'src/docs/dropdown'
import dropdownSelect from 'src/docs/dropdown-select'

export default {
    pages: [
        accordion,
        alert,
        badge,
        breadcrumb,
        buttons,
        buttonCheckbox,
        buttonRadio,
        buttonGroup,
        card,
        collapse,
        dropdown,
        dropdownSelect,

        introduction,
        docsPages,
        demo,
        search,
    ]
}
