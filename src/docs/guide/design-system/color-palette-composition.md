---
title: Color Palette Composition
description: A guide to composing a color palette
lang: en-US
---

# Palette Composition

A guide to composing a color palette.

Note, we are using  [Radix Colors](https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette) and this guide is a simple and humble reuse of their implementation with some customization.

## Choosing a brand scale

There are 20 total scales you could use for your brand or accent color.

15 scales designed for white foreground text.

<ColorsWhiteTextScales />

5 scales designed for black foreground text.

<ColorsBlackTextScales />

### Custom brand colors

These colors are not intended to be customised. They're designed to be accessible, well-balanced, and harmonious. Any customisation would likely break these features.

If you need custom brand colors, we recommend adding custom scales alongside these.

For example, you could use one of these colors for your gray scale and your semantic scales, then add custom brand/accent colors.

## Choosing a gray scale

For most websites and apps, grays are commonly used for text, borders, and backgrounds.

There are six gray scales available.

<ColorGrays />

- `Gray` is pure gray.
- `Mauve` is based on a desaturated purple hue.
- `Slate` is based on a desaturated blue hue.
- `Sage` is based on a desaturated green hue.
- `Olive` is based on a desaturated lime hue.
- `Sand` is based on a desaturated yellow hue.

### Neutral pairing

If you want a neutral vibe, or you want to keep things simple, `Gray` will work well with any hue or palette.

### Natural pairing

Alternatively, choose the gray scale which is saturated with the hue closest to your accent hue. The difference is subtle, but this will create a more colorful and harmonius vibe.

<ColorsGraysNaturalPairs />

:: Note: If your project uses a lot of colorful UI components like Badge, be careful when using saturated grays for your app background, especially in dark mode. Colorful UI components may clash with your saturated gray background
  color.
::

## Choosing semantic scales

For most projects, you will need colors to communicate semantic meaning. Here are some common pairings that work well in Western culture.

- **Error**: Red/Tomato/Crimson
- **Success**: Teal/Green/Grass/Mint
- **Warning**: Yellow/Amber
- **Info**: Blue/Sky/Cyan

In many cases, you might eventually need most of the scales, for one reason or another. Your app may support multiplayer mode, where you assign a color to each user. Your app may have a labelling feature, where your users assign a color to a task. Your app may use badges to communicate "pending" or "rejected" states.

These colors are well-balanced, and designed to work in harmony. So for product communication, most color pairings will work.

## Choosing text scales

Steps 11 and 12 are designed for low-contrast text and high-contrast text respectively. Depending on the vibe you want, you can use your accent scale or your gray scale.

Using your accent scale will result in a more colorful vibe.

<div css="bg-black my-5 flex items-center justify-center">
  <div class="text-lg text-blue-12">
    This text is blue12
  </div>
</div>

Using your gray scale will result in a more functional vibe.

<div css="bg-black my-5 flex items-center justify-center">
  <div class="text-lg text-slate-12">
    This text is slate12
  </div>
</div>

The difference may seem subtle, but it can make a huge difference with a whole page of text.

You may want to experiment with using your accent scale for text in your marketing sites, and your gray scale for text in your apps.

## Reading list

https://ninedegreesbelow.com/photography/lch-vs-hsv-for-picking-colors.html

## Tools

[Lch and Lab colour and gradient picker](https://davidjohnstone.net/lch-lab-colour-gradient-picker)
