# Roadmap

## Fixes

[x] Replace icon imports
[x] Fix lint errors
[x] Fix build
[x] Use https://api-extractor.com/ instead of vue-tsc for typings
[x] Fix generating .d.ts files (do we use generated volar.d.ts?)
[x] Fix all icon usage in consuming apps
[x] Fix checkbox design
[ ] Fix build size / treeshaking & dynamic imports
[x] Fix generating .d.ts files
[ ] Fix missing popover styles (arrow)
[ ] Fix Notifications position
[x] Fix dropdown positioning
[ ] Fix popup positioning
[ ] Fix types & build? https://github.com/Akryum/vue-typegen
[x] Fix floating uis? https://floating-vue.starpad.dev/

## Refactor

[ ] Define Design system tokens
[ ] Design token selection UI
[ ] Collor Pallete tokens
  https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/colors/doc/colors.mdx?p=doc
  https://studio.backlight.dev/edit/RadUTqBDyFX8ZDiIWlhd/color/doc/index.md?p=doc

[ ] Theme customization using css vars?
[ ] Dark mode support
[ ] Use https://dwightjack.github.io/vue-types/
[ ] Cleanup event names (on-close -> close)
[ ] Rewrite component docs a la vuestic
[ ] Notifications stacked in 3d
[ ] Drawer () https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/drawer/doc/doc.mdx?p=stories
[ ] BreadCrumb customization (icons, separator, dropdown, collapsed) https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/breadcrumbs/doc/doc.mdx?p=stories

## Tables

[ ] Replicate Table from https://vuestic.dev/en/ui-elements/table
[ ] Replicate Table from https://github.com/TanStack/table
[ ] Replicate Table from https://www.tailwindtoolbox.com/components/responsive-table
[ ] Replicate Table from https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/table/doc/doc.mdx?p=stories

## Forms

[ ] Fork FormKit (https://github.com/formkit/formkit)
[ ] Make Form component inherit classnames/attributes
[ ] Apply advanced concepts/features from SweetForms (https://github.com/ChronicStone/vue-sweetforms)
[ ] Form best practices https://enlear.academy/top-6-vue-related-libraries-that-will-explode-in-2022-889df221c7
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/autocomplete/doc/doc.mdx?p=doc
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/select/doc/doc.mdx?p=doc
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/toggle-button/doc/doc.mdx?p=doc for Form Editor Toolbars
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/text-field/doc/doc.mdx?p=stories
[ ] Clone https://vuestic.dev/en/ui-elements/form
[ ] Clone https://vuestic.dev/en/ui-elements/file-upload
[ ] Clone https://vuestic.dev/en/ui-elements/date-picker
[ ] Use https://day.js.org for date/time pickers
[ ] Clone https://vuestic.dev/en/ui-elements/date-input
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/time-picker/doc/doc.mdx?p=doc
[ ] Clone https://vuestic.dev/en/ui-elements/radio (design)
[ ] Clone https://vuestic.dev/en/ui-elements/checkbox (error state)
[ ] Notification color match with button/message/alert
[ ] Clone https://vuestic.dev/en/ui-elements/select approach to things
- Includes error, success, disabled or loading state
- Searchable
- Allow create
- Validation rules
- Keyboard nav

## Features

[ ] VueMentions https://vue-mention.netlify.app/
[ ] swiperjs.com https://github.com/Akryum/swiper
    Most modern mobile touch slider with hardware accelerated transitions

[ ] Sync form values to route query
[ ] Sync form values to route query
[ ] Use a type of ReactQuery implementation to reactive watch form/filter/query values
[ ] Extract Layouts&Templates
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/speed-dial/doc/doc.mdx?p=doc for hex nav?
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/dialog/doc/doc.mdx?p=doc
[ ] Clone https://flowbite.com/docs/components/ styles where applicable
[ ] Clone typography example, styles from https://vuestic.dev/en/styles/typography
[ ] Clone vuestic monorepo structure https://github.com/epicmaxco/vuestic-ui/tree/develop/packages
[ ] Clone https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/backdrop/doc/doc.mdx?p=doc
[ ] Clone (customized list) https://studio.backlight.dev/edit/k0DvZztNuwmS6XnXoohE/list/doc/doc.mdx?p=stories
[ ] I18n
[ ] A11y https://www.w3.org/TR/wai-aria-practices-1.1/
[ ] A11y https://backlight.dev/blog/the-importance-of-accessibility-in-design-systems
[ ] Theming support
  [ ] Color tokens
  [ ] Adjust for [dark yellow](https://medium.com/@lodestar-design/the-dark-yellow-problem-in-design-system-color-palettes-a0db1eedc99d)
  [ ] Theme provide/inject
  [ ] [Theme overrides component props](https://mui.com/material-ui/customization/theme-components/)
  [ ] [Pallete tool](https://material.io/resources/color/)
[x] Enforce Conventional Commits
[x] NPM publish
[x] Try importing / using in project
[ ] Install vue globals when component is used only
[x] Provide types for global properties (extend vue instance when loaded in consuming project tsconfig types)
[ ] [Custom transitions builder](https://mui.com/material-ui/customization/transitions/)
[ ] Replicate [micromodal](https://micromodal.vercel.app)
  - Toggling aria-hidden attribute on modal
  - Trapping tab focus within the modal
  - Maintaining focus position before and after toggling modal
  - Focusing on the first focusable element within the modal
[ ] Add icon slot to Tags
[ ] Clone https://vuestic.dev/en/ui-elements/button-group
[ ] Clone https://vuestic.dev/en/ui-elements/button-toggle
[ ] Clone https://vuestic.dev/en/ui-elements/button-dropdown
[ ] Clone https://vuestic.dev/en/ui-elements/image
[ ] Clone https://vuestic.dev/en/ui-elements/modal (long content)
[ ] Clone https://vuestic.dev/en/ui-elements/rating
[] Clone https://vuestic.dev/en/ui-elements/navbar
[] Clone https://vuestic.dev/en/ui-elements/pagination
[] Clone https://vuestic.dev/en/ui-elements/sidebar-item
[] Clone https://vuestic.dev/en/ui-elements/affix
[] Clone https://vuestic.dev/en/ui-elements/app-bar
[] Clone https://vuestic.dev/en/ui-elements/backtop
[] Clone https://vuestic.dev/en/ui-elements/inner-loading
[] Clone https://vuestic.dev/en/ui-elements/parallax
[] Clone https://vuestic.dev/en/ui-elements/progress-circle
[] Clone https://vuestic.dev/en/ui-elements/list
- component structure like <va-list-item-section> and <va-list-item-label>

## Code examples

### Css variables

```ts
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

colors: {
  primary: {
    // Customize it on globals.css :root
    400: withOpacity('--tw-clr-primary-400'),
    500: withOpacity('--tw-clr-primary-500'),
  },
  dark: '#222222',
},
```

### Animated underline
```css
:root {
  /* Customize these variable */
  /* https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo */
  --tw-clr-primary-400: 0, 224, 243;
  --tw-clr-primary-500: 0, 196, 253;

  --clr-primary-400: rgb(var(--tw-clr-primary-400)); /* #00e0f3 */
  --clr-primary-500: rgb(var(--tw-clr-primary-500)); /* #00c4fd */
}

@layer utilities {
  .animated-underline {
    background-image: linear-gradient(#33333300, #33333300), linear-gradient(to
          right, var(--clr-primary-400), var(--clr-primary-500));
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: 0.3s ease;
    transition-property: background-size, color, background-color, border-color;
  }
  .animated-underline:hover,
  .animated-underline:focus-visible {
    background-size: 0 2px, 100% 2px;
  }
}
```

### Custom font-face example

```css
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/inter-var-latin.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
      U+2212, U+2215, U+FEFF, U+FFFD;
  }
```

### Debounce search inputs & stuff
```ts
useEffect(() => {
  const timer = setTimeout(() => {
    const results = nrpData.filter(
      (data) =>
        data.nrp.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(results);
  }, 200);

  return () => clearTimeout(timer);
}, [searchTerm]);
```

### custom onClickOutside

```ts
import { onMounted, onUnmounted } from 'vue';

export const useOnClickOutside = (ref = null, callback = () => {}) => {
  function handleClickOutside(event) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
}
```
Use like this

```vue
<template>
  <div ref="container">View</div>
</template>
<script setup>
import { ref } from 'vue';

const container = ref(null);

useOnClickOutside(container, () => {
  console.log('Clicked outside');
}
</script>
```
