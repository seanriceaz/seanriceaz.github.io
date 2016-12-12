---
layout: post
title:  "Heuristic #5: Interactivity"
date:   2016-12-11 09:00:00
categories: heuristics user-experience interactivity
excerpt: this is the excerpt.
showcomments: true
draft: true
---

How do users interact with a digital experience? And how does the experience respond to the input? Generally, the library of interactions a user can do are click, tap, drag, swipe, pinch, scroll or hover. There are many others, but these form the most widely used ones.

Interactivity as a heuristic is about informing the user about available interactions, and then responding appropriately to them.

## Informing the user

There are many ways to inform the user about how to interact with your experience. You can give them clues to click by making something look like a button, which really only requires surrounding text with a colored box and little else. You can tell users to click and drag using an area that looks grippy. Users know to swipe when something peeks out from the sides of the screen, or is accompanied by slideshow progress dots. You can also inform users with help text on the screen.

### When an interactive element doesn't look interactive

The most common example of this is links that look like plain text, or buttons that have a white, gray, or black background with white, gray or black text. In these cases, it's all about context. Make sure the button has plenty of space around it so that it stands out as something interactive. Also, make sure the button doesn't look _disabled_.

The only way to know for sure if your interactive elements appear interactive enough is to user test them, especially if your experience is pushing the limits of usability to meet a certain aesthetic.

### When an element looks interactive, but isn't

The issue that usually comes up when reviewing for this is when items that look interactive are, in fact, not interactive at all. It's _very easy_ to run into this problem because users will click on just about anything that stands out. Here's a short list:

- Any image
- Headline text
- Anything with a border
- Anything with an underline
- Anything with a drop shadow
- Icons

## Responding appropriately

This is tricky to review in apps because there's no "right" way to do things. There is often convention, but not in all cases. A good metaphor to illustrate this is a door.

A door may open inward or outward when a building is designed. It may slide on a track, or even (in science fiction) up or down. None of these things is prohibits the proper function of the door&mdash;that a user may proceed through it to another area. The experience can be broken a bit if the door looks like a sliding door, but in fact swings inward. Or if it has a horizontal handle bar (implying that it must be pushed open), but slides up instead. Imagine grabbing the handle to open the door, only to be lifted off your feet when it is pulled upward!

### Responses should follow markings

Similarly, a menu with a down icon next to it should slide down when interacted with, not flip or slide up from the bottom of the screen. An image carousel should advance one slide when the user clicks on the "next" button. It should not skip slides or cycle back through all of the slides to the beginning of the slideshow.

### Responses should follow convention

Many times there are no markings indicating _how_ a certain action should happen. In these cases, it's best to follow convention.

Take a modal dialog with a close button for example. If the user clicks the close button, convention states that the dialog should fade out or otherwise disappear from the screen entirely. It's not docked, minimized, or pushed aside.

### Responses should be immediate

When an interaction happens, the response should occur effectively right away. This means that something should happen within about 100-200 milliseconds of interacting for it to work right. If waiting is necessary for the action to complete, then display a loading indicator or something similar to show that the application received the interaction and is processing it.

## Stay tuned!

Next week, I'll post a detailed look at Heuristic #6: Legibility from [My 10 Heuristics](/heuristics/user-experience/2016/10/07/heuristics-overview.html)
