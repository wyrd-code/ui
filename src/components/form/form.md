<script setup>
import DemoForm from './demos/DemoForm.vue'
import DemoFormGenerated from './demos/DemoFormGenerated.vue'
import DemoFormFull from './demos/DemoFormFull.vue'
</script>

# Form

A form allows users to enter information into a page.

The `WuiForm` component is a flexible helper for building, maintaining and validating forms.

There are two ways to implement forms, static and dynamic.

## Static

Static forms are created by placing form element components into the form components default slot, just as any other vue components.

:::demo components/form/demos/DemoForm
<DemoForm />
:::

## Generated

This form is generated using a schema object. It supports detailed
customization of the form layout by allowing html elements and
attributes to be used in the schema.

:::demo components/form/demos/DemoFormGenerated
<DemoFormGenerated />
:::

## Static Full

Static form with full range of field types used.

:::demo components/form/demos/DemoFormFull
<DemoFormFull />
:::

## Reading list

[Form UI Design: 36 Tips & Best Practices](https://bootcamp.uxdesign.cc/form-ui-design-36-tips-best-practices-112128c16429)

[Form Design Best Practices by Elisa Viglianese](https://bootcamp.uxdesign.cc/form-design-best-practices-4df6002ae3ce)
