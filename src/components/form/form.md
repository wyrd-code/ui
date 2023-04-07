<script setup>
import DemoForm from './demos/DemoForm.vue'
import DemoFormGenerated from './demos/DemoFormGenerated.vue'
</script>

# Form

The `WuiForm` component is a flexible helper for building, maintaining and validating forms.

There are two ways to implement forms, static and dynamic.

## Static

Static forms are created by placing form element components into the form components default slot, just as any other vue components.

:::demo form/demos/DemoForm
<DemoForm />
:::

## Generated

This form is generated using a schema object. It supports detailed
customization of the form layout by allowing html elements and
attributes to be used in the schema.

:::demo form/demos/DemoFormGenerated
<DemoFormGenerated />
:::

## Reading list

[Form UI Design: 36 Tips & Best Practices](https://bootcamp.uxdesign.cc/form-ui-design-36-tips-best-practices-112128c16429)

[Form Design Best Practices by Elisa Viglianese](https://bootcamp.uxdesign.cc/form-design-best-practices-4df6002ae3ce)

- [ ] Refactor
  - [ ] Test driven
  - [ ] Simpler code
  - [ ] A11Y tests
  - [ ] Headless UI
- [ ] Fields
  - [ ] input[type='text']
  - [ ] input[type='password']
  - [ ] input[type='email']
  - [ ] input[type='number']
  - [ ] input[type='url']
  - [ ] input[type='date']
  - [ ] input[type='datetime-local']
  - [ ] input[type='month']
  - [ ] input[type='week']
  - [ ] input[type='time']
  - [ ] input[type='search']
  - [ ] input[type='tel']
  - [ ] input[type='checkbox']
  - [ ] input[type='radio']
  - [ ] select
  - [ ] select[multiple]
  - [ ] textarea
- [x] Customize
  - [ ] Clone validation from formkit
  - [x] Support custom field types
  - [ ] Support overriding field types
  - [x] Support form generation schema
  - [x] Support manually created forms
  - [ ] Support repeatable inputs (returns an array of values)
  - [ ] Validate on change/blur
  - [ ] Restyle form components using css vars ?
  - [ ] [Combobox](https://tailwindui.com/components/application-ui/forms/comboboxes)
  - [ ] Support masking presets
  - [x] Track if form dirty
  - [ ] Prevent navigation if dirty/reset if not
  - [ ] Return focus to input after validation
- [ ] [Input groups](https://tailwindui.com/components/application-ui/forms/input-groups)
  - [ ] inline add-on and trailing dropdown
  - [ ] label
  - [ ] label and help
  - [ ] validation error
  - [ ] disabled state
  - [ ] hidden label
  - [ ] corner hint
  - [ ] leading/trailing icon
  - [ ] add-on
  - [ ] inline add-on
  - [ ] inline leading and trailing add-on
  - [ ] inline leading dropdown
  - [ ] leading icon and trailing button
  - [ ] shared borders
  - [ ] inset label
  - [ ] inset label and shared borders
  - [ ] overlapping label
  - [ ] keyboard shortcut
  - [ ] [contained button](https://ui.mantine.dev/component/input-with-button)
- [ ] [Form Layouts](https://tailwindui.com/components/application-ui/forms/form-layouts)
  - [ ] Two col cards with separate submit
  - [ ] Labels left
  - [ ] Simple stacked
  - [ ] Two col full width cards
  - [ ] Two col cards with sidebar
- [ ] Form extensions
  - [ ] can add hooks to submit/success handlers
  - [ ] can modify definitions
  - [ ] can adjust message formats
  - [ ] Conversational forms
- [ ] Multi-step forms
- [ ] Input status (warn, error, success)
  - [ ] Includes error, success, disabled or loading state
  - [ ] Searchable
  - [ ] Allow create
  - [ ] Validation rules
  - [ ] Keyboard nav
- [ ] Use https://day.js.org for date/time pickers
- [ ] Apply advanced concepts/features from SweetForms (https://github.com/ChronicStone/vue-sweetforms)
- [ ] Flow form  https://github.com/ditdot-dev/vue-flow-form
- [ ] Fork FormKit (https://github.com/formkit/formkit)
- [ ] Make Form component inherit classnames/attributes
- [ ] [Select](https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/select/doc/doc.mdx?p=doc)
- [ ] [Textarea](https://tailwindui.com/components/application-ui/forms/textareas)
  - [ ] Simple
  - [ ] With avatar and actions
  - [ ] underlined with actions
  - [ ] title and pill actions
  - [ ] preview button
- [ ] [Text-field](https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/text-field/doc/doc.mdx?p=stories)
- [ ] [Time-picker](https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/time-picker/doc/doc.mdx?p=doc)
- [ ] [File-upload](https://vuestic.dev/en/ui-elements/file-upload)
- [ ] [Date-picker](https://vuestic.dev/en/ui-elements/date-picker)
- [ ] [Date-input](https://vuestic.dev/en/ui-elements/date-input)
- [ ] [Form](https://vuestic.dev/en/ui-elements/form)
- [ ] [Radio (design)](https://vuestic.dev/en/ui-elements/radio)
- [ ] [Checkbox (error state)](https://vuestic.dev/en/ui-elements/checkbox)
- [ ] [Checkbox with image](https://ui.mantine.dev/component/image-checkboxes)
- [ ] [Select](https://vuestic.dev/en/ui-elements/select)
- [ ] Use [inputmode](https://medium.com/design-bootcamp/the-3-short-october-dev-tips-about-ux-a11y-d9241b809474)
- [ ] [Autocomplete/doc](https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/autocomplete/doc/doc.mdx?p=doc)
