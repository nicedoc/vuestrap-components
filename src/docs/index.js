// import normalize, grid, utilities and
import 'vuestrap/core'
// impoprt styling required for docs
import 'vuestrap/components/alert'
import 'vuestrap/components/badge'
import 'vuestrap/components/breadcrumb'
import 'vuestrap/components/button-group'
import 'vuestrap/components/buttons'
import 'vuestrap/components/card'
import 'vuestrap/components/carousel'
import 'vuestrap/components/custom-forms'
import 'vuestrap/components/dropdown'
import 'vuestrap/components/forms'
import 'vuestrap/components/images'
import 'vuestrap/components/jumbotron'
import 'vuestrap/components/list-group'
import 'vuestrap/components/media'
import 'vuestrap/components/modal'
import 'vuestrap/components/nav'
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/pagination'
import 'vuestrap/components/popover'
import 'vuestrap/components/progress'
import 'vuestrap/components/tables'
import 'vuestrap/components/nav'
import 'vuestrap/components/tooltip'

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
import formCheckbox from 'src/docs/form-checkbox'
import formInput from 'src/docs/form-input'
import formRadio from 'src/docs/form-radio'
import formSelect from 'src/docs/form-select'
import formTextarea from 'src/docs/form-textarea'

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
        formCheckbox,
        formInput,
        formRadio,
        formSelect,
        formTextarea,

        introduction,
        docsPages,
        demo,
        search,
    ]
}
