# Themes

Example of Theming with CSS Custom Properties

Here's an example of how you might override AgnosticUI's default CSS custom properties to reflect your brand's primary colors for both light and dark schemes. We also apply a Google font:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
:root {
  --agnostic-font-family: font-family: 'Roboto', sans-serif;
  /* In light mode we willl have white text against a dark green background. */
  --agnostic-light-modelight: white;
  --agnostic-primary-modelight: #053337;
  --agnostic-primary-hover-modelight: #0a474c;
  /* In dark mode we'll invert the text color and use a much lighter shade of green */
  --agnostic-primary-modedark: #12adba;
  --agnostic-light-modedark: black;
  --agnostic-primary-hover-modedark: #1ec3d1;
}
```

The above setup will allow --agnostic-primary and --agnostic-light to be set in a color scheme compatible way. As such, be sure to set both the -modelight and -modedark variants for each color you plan to override so you don't unintentionally break color scheme toggling.
