---
layout: post
title:  "Styling SVG icons with css"
date:   2018-09-08 12:00:00
categories: code design-system
excerpt: We use a custom SVG icon set in our apps. Here's how I've naviggated some of the pitfalls &mdash; and there are a lot of them.
showcomments: true
schema_images: http://seanrice.net/media/2018/06/Figma-v-sketch.png
---

For the latest design iteration of Infusionsoft, we chose to use stroke-based icons because of their clean, contemporary look. In implementing these icons across our app, we ran into a number of technical issues. In this article, I will describe these issues in detail and walk you through how we tackled them. I hope to spare you, dear reader, days of trial and error getting your SVG icons to work the way you want them to.

## Why we chose SVG for icons

There are a bunch of different ways to make icons. You can use image files, or icon fonts, or SVGs. We wanted crisp, scalable vectors. So that left us with an icon font or SVG. We also wanted to have stroke-based icons where the stroke thickness doesn't change no matter the size of the icon. This is only possible with SVG. Of course, we could probably do something cool with icon fonts to achieve this effect, it would likely result in bloated file size and less-predictable output.

### Stylable with CSS

One of the great things about this approach is that SVG's are stylable with CSS. You can use CSS to set the stroke thickness. You can use it to set the color. You can even animate these attrubutes. With an icon font, you're stuck with faking the stroke, and if the browser wants to read your `letter-spacing` or `line-height` wrong, you could be stuck with blurry rendering everywhere. SVG is treated like an image for size and alignment purposes, which has its advantages.

### Only load what you need

We only use a few icons in our app. Each page can include its own subset of icons, and these icons are only loaded one time. This makes our app more speedy with smaller download sizes, as opposed to needing to load an entire collection of icons all at once, coupled with a too-typical flash of random characters that appear before an icon font loads for the first time.

## Design tool problems and solutions

In getting our icons to work in the way desvribed above, I encountered some strange issues across from different desiggn tools.

### Working with Figma

I love Figma. This is where I do the lion's share of my design work. It's more styraightforward to build icon vectors in Figma than in Sketch, and stroke-based icons are supported as components (components in Figma are like Symbols in Sketch). Unfortunately,it's not a perfect experience for exporting Vectors. Seemingly unpredictably, it will *outline the stroke* of an icon when exporting. It only does this for some icons and not others. An outlined stroke breaks the scalability of the icons the way we want them, and it bloats the SVG markup.

#### Export strangeness workaround

I discovered a workaround to this issue. The short story is you just need to start with a predefiend shape (like a line, circle, or rectangle) instead of the pen tool. From there, you can edit the shape however you want provided you...

- Don't combine it with another shape
- Don't "flatten" it (figma's way of burning in transforms).

I'm hoping somebody at figma reads this little article and puts in a fix or some kind of export option to make this more predictable.

### Working with Sketch

Sketch does a pretty solid job of exporting the SVGs so far as I can tell, provided you leave the stroke alignment to "centered". It adds some decoration to the markup, and groups things too aggressively, but that's easily resolved with a script like `svgo`, which can be added into the icon build process. 

But there's a big problem making it completely unusable, at least for me.

#### Stroke icons won't work as symbols

In symbols, you can't override properties like the stroke thickness or color. You can get a similar effect by outlining your icons and using the shape as a mask on a color swatch. But that's hacky, and you'd need to create separate sets of icons for every size variation to keep the same stroke weight effect at all the different sizes.

## How we made our icons work in code



### Trouble with `<use>`

### Shadow DOM lurking

### SVG markup that works

### CSS that works

## Screen quality issues

### Low DPI monitors hooked up to retina macbooks

### Low DPI monitors in general

## Worth it?

## What about you?

Do you have any war stories about building your sites and apps with SVG? What innovative ways did you solve the problems you encountered?