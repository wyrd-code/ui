# Components

Components are the basic building blocks of a design system, and in `wyrd-ui` they are built to remove as much complexity from consuming repositories.

Extracting behavior and style into specialized components:
- keeps our code focused on business logic
- incurridges code reuse
- improves maintainability
- helps create visual and functional consistency across products

## Naming

- `Wyrd` prefix is used for interfaces and types
- `Wui` prefix is in component names

We currently don't follow a strict atomic project structure, as the project is still changing often. We may introduce similar conventions as the code matures and our understanding of clear concepts evolves.

## Simplicity

We strive to keep individual components as simple as possible, while providing all the functionality you may need from them. There is always a tradeoff, but we strive. Simple and clean code is as important as simple and clean implementation code in consuming repositories.

## Composability

Components are meant to be used for building custom, higher order components and templates, while providing an easy way to control the styling of both the predefined components as well as your own. The final goal here being to be able to completely remove UI code from consuming repositories.

## Flexibility

To maximize flexibility and reuse, components often have interchangeable and identically named `prop` & `slot` definitions.

For example, you can render a list by providing an array of `WyrdNavItem` elements as it's `items` prop value or by manually rendering `WuiListItem` children into it's default slot.


## Styling

WyrdUI components apply design system tokens and best practices to provide everything you need when building user interfaces for the modern web.

You can style the components in several ways:

- include one of our prebuilt themes
- build your own theme manually
- build your own theme using our theme configurator
