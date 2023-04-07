# Themes

Theming is done using theme configuration passed to the UnoCSS `presetWyrd`.

`presetWyrd` will create a set of css variables based on the theme configuration, and you can then customize the theme using a simple css file with a list (design token) variable values.

You can also use the [Theme Editor](/design-system/theme-editor.html) to customize and download theme configurations.

The UnoCSS theme will adjust the generated CSS output, and the CSS variables you can then include directly from one of our themes,
or copy one of them, modify and create your own theme by simply changing the CSS variable valus.

These CSS variables all together comprise a system of design tokens.

There are several groups of tokens available

## Typography

```
// Font families
---wui-font-family-base
---wui-font-family-titles
---wui-font-family-caps

// Font sizing
---wui-font-size
---wui-line-height
```


## Examples

Example of Theming with CSS Custom Properties

Here's an example of how you might override the default CSS properties to reflect your brand's primary colors for both light and dark schemes. We also apply a Google font:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
:root {
  --wui-font-family: font-family: 'Roboto', sans-serif;
  --wui-font-size: 1.5rem;
  --wui-line-height: 1.5;
}
```
