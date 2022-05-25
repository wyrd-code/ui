# Roadmap

[x] Replace icon imports
[x] Fix lint errors
[x] Fix build
[ ] Use https://dwightjack.github.io/vue-types/
[x] Use https://api-extractor.com/ instead of vue-tsc for typings
[x] Fix generating .d.ts files (do we use generated volar.d.ts?)
[ ] Optimize build size
[ ] Refactor forms (https://github.com/ChronicStone/vue-sweetforms)
[ ] Check/Fix all icon usages (after switching to css based)
[ ] Fix checkbox design
[ ] Cleanup event names (on-close -> close)
[ ] Copy typography example, styles from https://vuestic.dev/en/styles/typography
[ ] Copy vuestic monorepo structure https://github.com/epicmaxco/vuestic-ui/tree/develop/packages
[x] Fix generating .d.ts files
[ ] Dark mode support
[ ] i18n validator messages (extract them all somehow?)
[ ] Theming support
  [ ] Color tokens
  [ ] Adjust for [dark yellow](https://medium.com/@lodestar-design/the-dark-yellow-problem-in-design-system-color-palettes-a0db1eedc99d)
  [ ] Theme provide/inject
  [ ] [Theme overrides component props](https://mui.com/material-ui/customization/theme-components/)
  [ ] [Pallete tool](https://material.io/resources/color/)
[ ] Import css in components directly (scoped css modules in components)
[x] Enforce Conventional Commits
[x] NPM publish
[x] Try importing / using in project
[ ] Install vue globals when component is used only
[x] Provide types for global properties (extend vue instance when loaded in consuming project tsconfig types)
[ ] [Custom transitions builder](https://mui.com/material-ui/customization/transitions/)

[ ] Accessibility https://www.w3.org/TR/wai-aria-practices-1.1/
[ ] Form best practices https://enlear.academy/top-6-vue-related-libraries-that-will-explode-in-2022-889df221c7

[ ] Replicate [micromodal](https://micromodal.vercel.app)
- Toggling aria-hidden attribute on modal
- Trapping tab focus within the modal
- Maintaining focus position before and after toggling modal
- Focusing on the first focusable element within the modal

[ ] Rewrite component docs a la vuestic

[ ] Theme customization using css vars?
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

[ ] Animated underline
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

[ ] Custom font-face example

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

[ ] Debounce search inputs & stuff
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

[ ] Add icon slot to Tags
[ ] Clone https://vuestic.dev/en/ui-elements/button-group
[ ] Clone https://vuestic.dev/en/ui-elements/button-toggle
[ ] Clone https://vuestic.dev/en/ui-elements/button-dropdown
[ ] Clone https://vuestic.dev/en/ui-elements/table
[ ] Clone https://vuestic.dev/en/ui-elements/form
[ ] Clone https://vuestic.dev/en/ui-elements/file-upload
[ ] Clone https://vuestic.dev/en/ui-elements/date-picker
[ ] Clone https://vuestic.dev/en/ui-elements/date-input
[ ] Clone https://vuestic.dev/en/ui-elements/image
[ ] Clone https://vuestic.dev/en/ui-elements/modal (long content)
[ ] Clone https://vuestic.dev/en/ui-elements/rating
[ ] Clone https://vuestic.dev/en/ui-elements/radio (design)
[ ] Clone https://vuestic.dev/en/ui-elements/checkbox (error state)
[ ] Notification color match with button/message/alert

[ ] Clone https://vuestic.dev/en/ui-elements/select approach to things
- Includes error, success, disabled or loading state
- Searchable
- Allow create
- Validation rules
- Keyboard nav

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
