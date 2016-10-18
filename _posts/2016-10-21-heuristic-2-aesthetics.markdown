---
layout: post
title:  "Heuristic #2: Aesthetics"
date:   2016-10-21 09:00:00
categories: heuristics user-experience aesthetics
excerpt: The aesthetic quality of a web site or app is subjective. Yet, I use aesthetics as a key heuristic when evaluating these experiences. Find out how.
showcomments: true
---

The aesthetic quality of a web site or app is subjective. Yet, I use aesthetics as a key heuristic when evaluating these experiences. In Jakob Nielsen's [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/), he lists a heuristic for &quot;Aesthetic and minimalist design.&quot; He defines this like so:

> &quot;Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.&quot;

## What I look for

When auditing the usability of a web site or app, my focus on aesthetics pertains to how the look and feel of a site affects its usability. Generally speaking, elements on the screen should look like what they are, and the graphical choices should not impede usability.

### Noise

Noise is the _anti-minimalism_. Digital experiences that are meant to be usable should have very little noise. Noise can take many forms. Generally, interruptive elements, overuse of content-heavy images, and backgrounds that interfere with readability of text on top of them are noisy and should be avoided.

### Alignment

<figure class="img-right"><img  src="/media/2016/10/misalignment.png" alt="Screenshot of poor alignment">
<figcaption>An example of poor alignment</figcaption>
</figure>

Elements should be aligned well. Text should generally align (left/right/or center) with other text on the screen. Usage of a grid system can help with this, though proper implementation of it is critical to elements aligning properly.

Improper alignment makes the design look accidental and unprofessional. This is very distracting to the user.

### Color harmony

<figure class="img-right"><img  src="/media/2016/10/brand-colors.png" alt="Screenshot of poor brand color matching">
<figcaption>An example of poor color matching</figcaption>
</figure>

In a usable experience, colors don't call attention to themselves. There is a lot of science around color theory and perception that we won't cover here in terms of color harmony, but here are a few guidelines:

- Colors that vibrate (like complimentary colors) should not be placed next to each other
- Background and foreground colors should be different enough to make the foreground stand out
- Brand colors should match exactly everywhere (no "close enough")

### Image selection

<figure class="img-right"><img  src="/media/2016/10/lossy.jpg" alt="Lossy image">
<figcaption>Avoid using lossy images like this one.</figcaption>
</figure>

This section doesn't have a lot to do with usability, but it definitely affects the user's perception of the brand. Poorly-selected images diminish the experience. This can take a few different forms.

<figure class="img-right"><img  src="/media/2016/10/squished.jpg" alt="Stretched image">
<figcaption>Don't stretch your images.</figcaption>
</figure>

One is more technical: "lossy" over-compressed images, or images that were stretched to fill the space are visibly low-quality. Lossy images need to be reworked from the original. Stretched images may need to be resized from the original, but more often, the stylesheet or the markup need to be adjusted to make it stretch proportionally, or limit the resizing so that the image doesn't stretch past its native resolution.

The other form image selection issues take is more content-related: Some images draw attention away from the content of the experience for the _wrong reasons_. They're too goofy, or otherwise inappropriate. Other times, they're simply meaningless images. Avoid these images!

## Summary

Aesthetics are pretty important to the success of a digital experience. Customers expect high standards, even from "value" brands.

## Stay tuned!

Next week, I'll post a detailed look at Heuristic #3: Awareness from [My 10 Heuristics](/heuristics/user-experience/2016/10/07/heuristics-overview.html)
