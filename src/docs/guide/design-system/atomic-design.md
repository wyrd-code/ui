# Atomic Design

Components are organized into a hierarchy as described in **[Atomic design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)**

## Atoms

::: tip RULE
Atoms are small bits of Interfaces that can’t be broken down any further
:::

Atoms include basic HTML elements like form labels, inputs, buttons. In the context of a pattern library, atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system.

## Molecules

::: tip RULE
Molecules are simple groups of Atoms combined together but working as a single component.
:::

For example, a form label, search input, and button can join together to create a search form molecule. Creating simple UI molecules makes testing easier, encourages reusability, and promotes consistency throughout the interface.

## Organisms

::: tip RULE
Organisms combine molecules together into reusable components, giving them proper context.
:::

**Relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms that form discrete sections of an interface**

A header organism might consist of dissimilar elements such as a logo image, primary navigation list, and search form. The product grid organism can be employed anywhere a group of products needs to be displayed, from category listings to search results to related products.

Organisms can consist of similar or different molecule types. Building up from molecules to more elaborate organisms provides designers and developers with an important sense of context.

## Templates

::: tip RULE
Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.
:::

Templates are larger and more complex UI components assembled for specific purposes. Example templates may be `BlogLayout`, `Homepage` or `LoginPage`

## Pages

**Specific instances of templates that show what a UI looks like with real representative content in place.**

Building on our previous example, we can take the homepage template and pour representative text, images, and media into the template to show real content in action.

In addition to demonstrating the final interface as your users will see it, **pages are essential for testing the effectiveness of the underlying design system**.

**Pages also provide a place to articulate variations in templates**, which is crucial for establishing robust and reliant design systems. Here are just a few examples of template variations:

- A user has one item in their shopping cart and another user has ten items in their cart.
- A web app’s dashboard typically shows recent activity, but that section is suppressed for first-time users.
- One article headline might be 40 characters long, while another article headline might be 340 characters long.
- Users with administrative privileges might see additional buttons and options on their dashboard compared to users who aren’t admins.

In all of these examples, the underlying templates are the same, but the user interfaces change to reflect the dynamic nature of the content.
