---
layout: post
title:  "Styling SVG icons with css"
date:   2018-10-12 00:00:00
categories: code design-system
excerpt: We use a custom SVG icon set in our apps. Here's how I've navigated some of the pitfalls &mdash; and there are a lot of them.
showcomments: true
schema_images: http://seanrice.net/media/2018/10/svg.png
---

For the latest design iteration of Infusionsoft, we chose to use stroke-based icons because of their clean, contemporary look. In implementing these icons across our app, we ran into a number of technical issues. In this article, I will describe these issues in detail and walk you through how we tackled them. I hope to spare you, dear reader, days of trial and error getting your SVG icons to work the way you want them to.

## Why we chose SVG for icons

There are a bunch of different ways to make icons. You can use image files, or icon fonts, or SVGs. We wanted crisp, scalable vectors. So that left us with an icon font or SVG. We also wanted to have stroke-based icons where the stroke thickness doesn't change no matter the size of the icon. This is only possible with SVG. Of course, we could probably do something cool with icon fonts to achieve this effect, it would likely result in bloated file size and less-predictable output.

### Stylable with CSS

One of the great things about this approach is that SVG's are stylable with CSS. You can use CSS to set the stroke thickness. You can use it to set the color. You can even animate these attributes. With an icon font, you're stuck with faking the stroke, and if the browser wants to read your `letter-spacing` or `line-height` wrong, you could be stuck with blurry rendering everywhere. SVG is treated like an image for size and alignment purposes, which has its advantages.

### Only load what you need

We only use a few icons in our app. Each page can include its own subset of icons, and these icons are only loaded one time. This makes our app more speedy with smaller download sizes, as opposed to needing to load an entire collection of icons all at once, coupled with a too-typical flash of random characters that appear before an icon font loads for the first time.

## Design tool problems and solutions

In getting our icons to work in the way described above, I encountered some strange issues across from different design tools.

### Working with Figma

I love Figma. This is where I do the lion's share of my design work. It's more straightforward to build icon vectors in Figma than in Sketch, and stroke-based icons are supported as components (_components_ in Figma are like _symbols_ in Sketch). Unfortunately, it's not a perfect experience for exporting vectors. Seemingly unpredictably, it will *outline the stroke* of an icon when exporting. Figma does this for some icons and not others. An outlined stroke is unusable because it breaks the scalability of the icons the way we want them, and it bloats the SVG markup.

#### Export strangeness workaround

I discovered a workaround to this issue. The short story is you just need to start with a predefiend shape (like a line, circle, or rectangle) instead of the pen tool. From there, you can edit the shape however you want provided you...

- Don't combine it with another shape
- Don't "flatten" it (Figma's way of burning in transforms).

I'm hoping somebody at figma reads this little article and puts in a fix or some kind of export option to make this more predictable.

### Working with Sketch

Sketch does a pretty solid job of exporting the SVGs so far as I can tell, provided you leave the stroke alignment to "centered". It adds some decoration to the markup, and groups things too aggressively, but that's easily resolved with a script like `svgo`, which can be added into the icon build process.

But there's a big problem making it completely unusable, at least for me.

#### Stroke icons won't work as symbols

In symbols, you can't override properties like the stroke thickness or color. You can get a similar effect by outlining your icons and using the shape as a mask on a color swatch. But that's hacky, and you'd need to create separate sets of icons for every size variation to keep the same stroke weight effect at all the different sizes.

## How we made our icons work in code

In any given page within our app, there is an _svg sprite_. This sprite is written directly into the HTML based on the icons in-use on the screen. Simplified to show only one icon, that sprite looks something like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" id="__SVG_SPRITE_NODE__">
    <symbol viewBox="0 0 24 24" id="user">
        <path d="M20.5 21.5v-2a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v2M12 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" class="is-icon-target"></path>
    </symbol>
</svg>
```

Now, whenever we need this icon, we reference it instead of writing it to the DOM again and again, or pointing at an svg file. We use this method because it allows us to consistently manipulate the icon with CSS while keeping the HTML nice and clean.

Here's what this type of reference looks like:

```html
<svg class="icon">
    <use xlink:href="#user"></use>
</svg>
```

Nice and clean, right?

### Shadow DOM lurking

The trouble with using `<use>` is that with a normal SVG, you can't manipulate the paths with CSS (or anything else). The SVG, in this case, lives in the _shadow DOM_, and is protected by the browser. In order to get an SVG that we could mess around with, we needed to strip out all inline styling on the svg elements and defs such as stroke, color, fill etc.

### SVG markup that works

Our SVG files are minified using the SVG0 script, then we've stripped out all styling, and replaced them with one of two classes that we use to style them based on whether the element has a fill or a stroke. Things like dots needed to be filled. In our case, everything else is a stroke.

Ultimately, our SVG files look like this one:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.5 21.5v-2a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v2M12 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" class="is-icon-target"/></svg>
```

We design our icons to have a starting point of 24x24 pixels. This ensures uniform sizing across icons even when scaled down to smaller sizes.

### CSS that works

For us, we wanted to be able to change all aspects of our icons with CSS. We can change the color, size, or stroke weight of our icons with CSS. Stroke weight was the primary reason we chose to go with SVG icons instead of an icon font. This required some work to keep stroke weight at 1px regardless of the size of the svg. Here's how we did that.

```scss
.icon { /* Styles the parent SVG element */
    @include transition(all);
    cursor: var(--icon-cursor, inherit);
    height: var(--icon-size, #{$font-size-icons}); /* Defaults to the value of our design token, if a local CSS variable isn't defined. */
    width: var(--icon-size, #{$font-size-icons});
    min-height: var(--icon-size, #{$font-size-icons});
    min-width: var(--icon-size, #{$font-size-icons});
    margin: var(--icon-margin, 0);
    fill: var(--icon-color, currentcolor); /* currentcolor is a shortcut which means the current text color */
    stroke: var(--icon-color, currentcolor);
    stroke-width: var(--icon-stroke-width, #{$icon-stroke-width}); /* This is always 1px at the moment */
}

.is-icon-target,
.is-icon-target * {
    stroke-width: inherit;
    fill: none;
    vector-effect: non-scaling-stroke;
}
.is-icon-dot{
    stroke-width: 0;
    fill: inherit;
}
```

See those `inherit` values? This is the shadow DOM workaround. If you set those values to inherit, you can style their parent `<svg>` and those styles will get applied to the icon's child elements.

This is also why it's important to remove all styling from the SVG file itself. CSS will not override an inline style on a shadow DOM element, even with `!important`.

### Try it out!

I've put the code above [in a codepen](https://codepen.io/seanriceaz/pen/YOONRm) so you can style the user icon yourself.

## Screen quality issues

When we first rolled out our new icons, things looked great on our fancy macbook pros with high-DPI displays. Then we took a look at things on lower DPI displays, and uncovered a major problem.

![Bad svg rendering](/media/2018/10/low-quality-svg.png)

Turns out, our icons were drawn on the pixel grid, which is perfect for when you're filling icons and want them to look nice and crisp. What we were doing is adding strokes, and the computer was trying to draw half of the stroke in one pixel, and the other half in the next pixel. These icons looked like 1992.

The solution was to re-tool all our icons to draw our lines on half-pixels, which wouldn't affect our high-DPI monitors much but made things look much better on low-DPI ones.

![Fixed svg rendering](/media/2018/10/high-quality-svg.png)

## Worth it?

Time will tell if our foray into stroke-based SVG icons will be worthwhile. We've had to do quite a bit of hacking to get them working well. Ultimately, we will be creating an icon font and several sizes of flattened-outlined SVGs to support other platforms (and Sketch). It all takes time!

## What about you?

Do you have any war stories about building your sites and apps with SVG? What innovative ways did you solve the problems you encountered?