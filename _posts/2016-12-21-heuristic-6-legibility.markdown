---
layout: post
title:  "Heuristic #6: Legibility"
date:   2016-12-30 23:00:00
categories: heuristics user-experience legibility
excerpt: Legibility is the simplest heuristic optimize for. Nevertheless, it is a common issue on many sites and apps.
showcomments: true
schema_images: https://seanrice.net/media/2016/12/heuristic-6-legibility-title.jpg
---

Let's talk about text. Text is the core to any web experience, and in applications, it serves several very important purposes. Since text is so important, it needs to be legible. That's why I grade digital experiences based on the legibility of their text.

## What I look for

### Color contrast

There is a [set of guidelines from the W3C](https://www.w3.org/TR/WCAG20/#visual-audio-contrast) for how much contrast text must have with its background in order to be legible. Experienced UX practitioners can spot too-low contrast fairly quickly, but when in doubt, tools like [Snook.ca's Colour Contrast Check](https://snook.ca/technical/colour_contrast/colour.html) are a very helpful resource. There are several others, but the Snook.ca one seems to have the most helpful features.

Here is an example of non-compliant color contrast from the main navigation on the website for my favorite Phoenix skateboard shop:

![Example of non-compliant color contrast](/media/2016/12/legibility-text-contrast-no.jpg)

To become compliant, they need to swap the white for black (or otherwise dark) text, or darken the navigation background colors a little bit.

### Text on noisy backgrounds

The other main culprit for a negative mark on legibility is text on noisy backgrounds. Often, designers will place a visually appealing, but visually noisy image "full bleed" within an experience. They may then choose to put a title or some descriptive text *on top of* the image. This is especially common with blog content.

Here is an example of difficult-to-read text on a noisy image:

![Example of noisy text background](/media/2016/12/legibility-text-on-image-no.jpg)

On the flipside, [Juxtapoz.com](https://juxtapoz.com) (pictured below) has a good approach to text on top of images. They place a semi-transparent background behind the text.

![Example of noisy background solution](/media/2016/12/legibility-text-on-image.jpg)

### Other issues

There are a bunch of other issues that can make text unreadable such as:

- Poor font choice
- Too-small font sizes (16px is recommended for body text)
- Aggressive type manipulation such as decreasing spacing too much or stretching the letterforms out
- Pixelated letters from some typefaces on some web browsers

## Conclusion

If you have text in your experiences, and chances are, you do, make sure your audience can read it without too much trouble. Remember that people reading your content may have issues with their vision such as colorblindness or blurry vision, so even if you can read it, there may be many who cannot.

## Stay tuned!

Next, I'll post a detailed look at [Heuristic #7: Affordance](/heuristics/user-experience/affordance/2017/01/05/heuristic-7-affordance.html) from [My 10 Heuristics](/heuristics/user-experience/2016/10/07/heuristics-overview.html).
