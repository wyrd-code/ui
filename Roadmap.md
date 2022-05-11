# Roadmap

[x] Replace icon imports
[x] Fix lint errors
[x] Fix build
[ ] Separate docs from lib
[ ] Optimize build size
[ ] Fix all icon usages
[ ] Fix generating .d.ts files (do we use generated volar.d.ts?)
[ ] Dark mode support
[ ] i18n validator messages (extract them all somehow?)
[ ] Theming support
  [ ] Color tokens
  [ ] Adjust for [dark yellow](https://medium.com/@lodestar-design/the-dark-yellow-problem-in-design-system-color-palettes-a0db1eedc99d)
  [ ] Theme provide/inject
  [ ] [Theme overrides component props](https://mui.com/material-ui/customization/theme-components/)
  [ ] [Pallete tool](https://material.io/resources/color/)
[ ] Import css in components directly ?
[ ] Enforce Conventional Commits
[ ] NPM publish
[ ] Try importing / using in project
[ ] Install vue globals when component is used only
[ ] Provide types for global properties (extend vue instance when loaded in consuming project tsconfig types)
[ ] [Custom transitions builder](https://mui.com/material-ui/customization/transitions/)

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
