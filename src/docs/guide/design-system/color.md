# Color

> Research reveals people make a subconscious judgment about a product within 90 seconds of viewing and that between 62% and 90% of that assessment is based on color alone.
>
> [Shannon Cabeen](https://medium.com/@shannon.cabeen/how-to-actually-implement-your-ui-color-palette-a5a7e266dc6f)

::: info
The 60–30–10 rule is a very simple rule for creating well-balanced color palettes. The idea is simple, when you choose a new color palette, the 60% of the palette should be dedicated to one color (usually, it’s a neutral color), another (primary) color makes up 30% of the palette, and a third color (accent) is used for the remaining 10% of the design.
:::

## Structure

Source: [ColorAndContrast.com](https://colorandcontrast.com/)

### Color psychology

Colors are generally associated with descriptive or emotional or psychological meaning.

**How it effects UI design**

- Color can be used to reinforce brand and affect user experience for sighted users by leveraging common psychological color meaning.
- Not all cultures interpret color in the same way. Be sure your colors convey appropriate meanings for your audience's locale.

Use [Color psychology](https://colorandcontrast.com/#/color-psychology) tool to check the emotional effects of the colors you are working with.


### Color Scale

A sequence of colors used for a variety of elements in a user interface, such as text, icons, interactive elements, states, and decoration.

**How it effects UI design**

- UI color scales need to provide options that meet or exceed WCAG 1.4.3 (contrast minimum).
- When creating color scales, interpolating in various color spaces will result in different colors or appearance. Use a color appearance model if trying to make your color scale perceptually balanced.

#### Sequential scale

A sequence of colors for representing numeric data from low to high.

Sequential color scales are quantitative.

**How it effects UI design**

- When creating color scales, interpolating in various color spaces will result in different colors or appearance. Use a color appearance model if trying to make your color scale perceptually balanced.
- Do not rely on color choice alone to make data visualizations accessible. Additional considerations beyond color and contrast may be necessary.

#### Diverging scale

A data visualization scale similar to sequential, except with a neutral midpoint to demonstrate polarity.

Diverging color scales are quantitative.

**How it effects UI design**

- When creating color scales, interpolating in various color spaces will result in different colors or appearance. Use a color appearance model if trying to make your color scale perceptually balanced.
- Do not rely on color choice alone to make data visualizations accessible. Additional considerations beyond color and contrast may be necessary.
- Diverging scales may be more prone to color conflicts for people who have a color vision deficiency.

#### Color scale step

#### Color scale group

Colors are organized into several groups by their utility.

### Color theme

A collection of color scales applied to an user interface design system.

Color themes can be used to support light mode, dark mode, increase contrast mode, or different brands.

**How it effects UI design**

- A light theme and dark theme can be helpful for supporting light and dark modes using the prefers-color-scheme media query.
- A unique theme can be used to support increase contrast mode using the prefers-contrast media query.
- Do not create custom themes for windows hight contrast mode. This mode is intended to provide end-user control over color.
- Not all people have the same contrast sensitivity. WCAG 1.4.3 (contrast minimum) provides a general threshold for making text & components percievable to most sighted users.
- In some cases, users may benefit from higher contrast than recommended minimums, whereas other users may be negatively impacted by high contrast interfaces. Consider personalization settings to give users the ability to adjust contrast to meet their needs.

### Adaptive color theme

A color theme with options that can be adjusted by people using the interface. Options affect every color in the theme such as contrast, lightness, and saturation.

**How it effects UI design**

- Adaptive themes can provide higher contrast for users who need more contrast than WCAG 1.4.3 (contrast minimum).
- Adaptive themes can provide lower contrast and lightness controls for users with light sensitivity.
- Adaptive themes can provide lower saturation for users who may benefit from lower saturated colors.



## Choosing colors for your user interface

For a uniform set of colors with not much contrast between them, use analog colors.

> Analog colors are right next to each other on the color wheel. By choosing analogous colors you stay in the same color space and create a uniform scheme instead of using contrasts. How many adjacent colors you use is up to you, of course. But the more colors you include, the more unsettled your color palette will become again.

For layers of accents and decor, use Complimentary Colors.

> These are directly opposite each other on the color wheel and create strong contrasts. When you use different tints and shades, you can easily stretch the spectrum from two complementary colors without bringing a third color into play.


When you’re creating a color palette for your product or website, you do best when choosing your primary color and depending on this, select all other colors.

So your secondary color could be the complementary color in a lighter or darker shade. But you should also create your colors for backgrounds, headlines, links, or texts based on your primary color.

To do so and to generate a consistent color scheme for your user interface, it is recommended to use the hue of your primary color for colors like shadows and backgrounds. This will create a more harmonized appearance than relying on black or white for these colors.


### https://colors.artyclick.com/ -> color names dictionary

## Dark mode

> - For OLED displays, dark mode requires less energy and thus significantly extends the battery life
> - Dark mode is a relief for the eyes in low ambient light conditions
> - Dark mode increases accessibility for light sensitive users
> - With a light-dark toggle you give your users the freedom to decide for themselves
>
> **Checking for contrast** — Make sure that the contrast between dark background and light text is high enough so that the text is easy to read and icons stand out well.
>
> **How dark is dark** — Pure white (#FFFFFF) on pure black (#000000) is not very user-friendly, because the contrast is too hard and this can lead to problems in visual perception.
>
> Switch to a dark gray (e.g. #242424) for the background and a very light gray (e.g. #F7F7F7) for the font color. This will reduce the contrast and simplify the perception.
>
> **Elevation through contrast** — In dark mode, you can’t use shadows to make elements stand out from each other. But there is another way to bring hierarchy into your design. That’s because in dark mode designs, you work with brightness. So an element that overlays another would have a lighter background than the one below it.
>
> **Fitting colors** — The same colors often look different on light and dark backgrounds. Therefore, when you design a dark mode, you should not only change the layout, but also check the effect of the colors used and possibly create your own color palette for the dark mode design.
>
> [How to design for Dark Mode? 🖤](https://marinakraus.medium.com/how-to-design-for-dark-mode-ae1fb14aadc2)


> Just keep in mind that the contrast calculation algorithm used in WCAG 2 is rather unreliable and one should not mindlessly optimize for the numbers. When possible, use WCAG 3 APCA instead.
>
> [Thinking colors: balancing between visual and abstract](https://uxdesign.cc/thinking-colors-91da5c61e79b)

### Further reading

[Color & Contrast.com](https://colorandcontrast.com/)
  This website is for designers to learn about color, contrast, and how it can affect experiences of a user interface. It provides quick access to relevant information at any point in the design process.

  The content is thorough, but concise, and provides contextual insight to assist you in making educated decisions about color and contrast.

[How to actually implement your UI color palette](https://medium.com/@shannon.cabeen/how-to-actually-implement-your-ui-color-palette-a5a7e266dc6f)

[Power In The Grays by LightPonderings](https://www.youtube.com/watch?v=21mPduQsm1g)
