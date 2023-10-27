---
title: Design tokens
lang: en-US
---

# Design tokens

The `DesignDystem` is built using `DesignTokens`, organized by level of abstraction.

**Sentiment** described the feeling the color was conveying. Options included neutral, primary, info, success, warning, danger.

**Usage** described the element upon which the color is being applied. Options included surface, content, and border. Content appear on surfaces and borders outline surfaces.

**Prominence** described how much attention the color is drawing. Options included default, prominent, disabled, and muted.

**Interaction** described how the user is interacting with a colored element. Options included default, hover, active, and disabled.

Example: `surface-primary-default-hover`

## Naming

Token names follow a strict naming convention that communicates when and where this token is supposed to be used without having to look at its underlying value.

Take the following example:

`wui-color-background-container-primary--hover`

Translated as

`[system/theme]-[category]-[property]-[surface]-[variant]--[state]`

The Token above is a complex one, but it narrates a story. Without looking at the documentation or the value, both designer and developer can tell it is a color token, meant to be used on the background of containers like cards or sections, for example. It also communicates that there might be different variants that convey hierarchy, and it also communicates that it is targeting a specific state of that surface.

## Tokens groups

- [Color](/guide/design-system/color.html)
- [Typography](/guide/design-system/typography.html)
- [Spacing](/guide/design-system/spacing.html)
- [Shape](/guide/design-system/shape.html)
- [Elevation](/guide/design-system/elevation.html)
- [Iconography](/guide/design-system/iconography.html)
- [Animations](/guide/design-system/animation.html)
- [Sound](/guide/design-system/sound.html)
- [Haptics](/guide/design-system/haptics.html)
- Interaction: hover, focus, active
- Shadow
- Borders

### Global tokes

- color
  - background
    - by surface

  - text
    - default
    - pronounced
    - subtle
    - faded
    - interactive
    - hover

- spacing
  - padding
  - margin

  - botton
  - types
    - none
    - tight
    - base
    - loose

- typography
  - families
    - base
    - monospace
    - serif
    - custom
  - font
    - family
    - size
    - line height
    - letter spacing
    - text transforms

- borders
  - border-color
  - border-style
  - border-size
  - border-radius

- transition
  - duration
  - timing
  - property

- layout
  - responsiveness

### Interaction

- hover, focus, active...
  - background color
  - text color
  - box shadow

### Composite token groups

- typographic presets
  - heading
  - intro
  - overhead
  - navigation
`
- surfaces
  - background style
  - text style
  - border style
  - border style
  - shadow style


### Color

```
// Semantic text colors
text
```

## Read more

- [Design tokens cheatsheet](https://uxdesign.cc/design-tokens-cheatsheet-927fc1404099)
- [Naming tokens in design systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)
- [How to define color usage through semantic sets for design systems](https://uxdesign.cc/how-to-define-color-usage-through-semantic-sets-for-design-systems-99445804233d)


## Further reading

[Awesome-Design-Tokens](https://github.com/sturobson/Awesome-Design-Tokens)



## Abstraction levels

In order to keep the design system maintainable, design tokens are separated by abstraction levels into several categories.

#### Value tokens (*think `purple-500`*)

Value tokens are variables are the primitive values in a design language, represented by context-agnostic names. These can be directly used, and are inherited by all other token types.

#### Alias tokens (*think `color-action`*)

Alias tokens relate to a specific context or abstraction. Common tokens help communicate the intended purpose of a token and are effective when a value with a single intent will appear in multiple places.

#### Component tokens (*think `color-disabled-border`*)

Component tokens relate to a specific component using them. Their scope only targets the component they belong to. Component tokens communicate not only the targeted properties but also their states
