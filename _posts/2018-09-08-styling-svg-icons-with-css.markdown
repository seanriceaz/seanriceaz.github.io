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



### Working with Figma

#### Export strangeness workaround

### Working with Sketch

#### Stroke icons won't work as symbols

## How we mad our icons work in code

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