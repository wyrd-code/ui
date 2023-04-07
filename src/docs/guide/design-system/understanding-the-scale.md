---
title: Understanding the color scale
description: How to correctly and systematically use the scales
lang: en-US
---

# Understanding the color scale

Learn which scale step is the most appropriate for each use case.

## Use Cases

There are 12 steps in each scale. Each step was designed for at least one specific use case.

This table is a simple overview of the most common use case for each step. However, there are many exceptions and caveats to factor in, which are covered in further detail below.

| Step | Use case                                 |
| ---- | ---------------------------------------- |
| 1    | App background                           |
| 2    | Subtle background                        |
| 3    | UI element background                    |
| 4    | Hovered UI element background            |
| 5    | Active / Selected UI element background  |
| 6    | Subtle borders and separators            |
| 7    | UI element border and focus rings        |
| 8    | Hovered UI element border                |
| 9    | Solid backgrounds                        |
| 10   | Hovered solid backgrounds                |
| 11   | Low-contrast text                        |
| 12   | High-contrast text                       |

## Steps 1–2: Backgrounds

Steps `1` and `2` are designed for app backgrounds and subtle component backgrounds. You can use them interchangeably, depending on the vibe you're going for.

Appropriate applications include:

- Main app background
- Striped table background
- Code block background
- Card background
- Sidebar background
- Canvas area background

You may want to use white for your app background in light mode, and Step 1 or 2 from a gray or coloured scale in dark mode.

In this case, set up a
[mutable alias](/docs/colors/getting-started/aliasing#mutable-aliases) for
AppBg and map it to a different color for each color mode.

## Steps 3–5: Component backgrounds

Steps `3`, `4`, and `5` are designed for UI component backgrounds.

- Step `3` is for normal states.
- Step `4` is for hover states.
- Step `5` is for pressed or selected states.
