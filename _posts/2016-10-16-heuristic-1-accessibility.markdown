---
layout: post
title:  "Heuristic #1: Accessibility"
date:   2016-10-16 09:00:00
categories: heuristics user-experience accessibility
excerpt: Accessibility is the first of the ten heuristics I use to evaluate digital user experiences. The reason it is number one because it is the baseline. It's table stakes. If your experience isn't accessible to your customers (including the disabled), at minimum you're leaving money on the table and may be opening yourself up for lawsuits.
showcomments: true
draft: false
---

Accessibility is the first of the ten heuristics I use to evaluate digital user experiences. The reason it is number one because it is the baseline. It's table stakes. If your experience isn't accessible to your customers (including the disabled), at minimum you're leaving money on the table and may be opening yourself up for lawsuits.

The problem with pointing out accessibility issues is that they're largely invisible to people without an impairment. I also generally categorize the issues that are visible within other heuristics such as _legibility_ and _reactivity_. That means that accessibility issues, as I categorize them, generally have to do with the _markup_ of a web page as it is rendered to a screen reader.

## What I look for

### Links

I start with the navigational features. First off, a web page should have a "skip to content" link first thing in the markup. This allows a non-sighted user prevent their screen reader from re-reading the navigation links over and over again. This is like calling your bank and dialing _zero_ until you speak to a representative as opposed to listening to two or three levels of phone tree navigation menus before getting to the right department.

An issue I see somewhat frequently is that links have ambiguous text such as "click here". Link text or title attributes should tell the user where they are going to go or what is going to happen when they click. This is good for sighted as well as non-sighted users.

### Images

Images need to have "alt" attributes. Images with text in them _especially_ need to have "alt" attributes defined. Images for decoration don't need to have anything there. `<img alt="">` is fine in that case, but a user that comes across it may still wonder what the contents of the image are.

### Images as links

When images are used as links, it is very important that there be some text alternative to the image. Often, a site may have the logo link to the homepage. If the logo is a background image on some element, the element needs to have text inside it with the company name. If the logo is an image, it's alt attribute should be the company's name. This principle applies to all other navigation images.

### Text hierarchy

Like any properly formatted document, there ought to be headlines dividing up major and minor sections. Sighted users can rely on font sizing and styling alone to derive this hierarchy. Non-sighted users need the proper markup: `<h1>`, `<h2>`, `<h3>`, etc. to navigate a document.

### Availability of HTML or plain text documents

PDF is a very typical file format on the web. However, it can be problematic for someone using a screen reader to work with a PDF file alongside a web browser. PDF file contents should always be available as plain text or HTML as well. Generally, I recommend converting PDF files into html pages and not using PDF at all.

### Form elements

Forms are a passion of mine. They're almost never implemented well when I first encounter them. As it pertains to accessibility, mostly what I look for in forms is that every form element should be appropriately labelled &mdash; preferably with a `<label>` element.

## Diving deeper

This list is not by any means exhaustive. There are several other issues that impact accessibility and compliance with standards (ADA &sect;508). When doing an audit of an experience for the first time, I typically cover the more approachable issues listed above and leave some of the more complex ones below for a more detailed accessibility-specific audit:

 - Heavy use of javascript to render the page
 - Implementation of aria
 - Tab order
 - Custom interactive elements

## Further reading

Much has been written about accessibility on the web. Here are a few sites/articles to get you started:

- [Google Accessibility Course](https://www.google.com/accessibility/)
- [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag.php)
- [US law: Americans with Disabilities Act &sect; 508](https://www.section508.gov/)

## Stay tuned!

Next week, I'll post a detailed look at Heuristic #2: Aesthetics from [My 10 Heuristics](http://seanrice.net/heuristics/user-experience/2016/10/07/heuristics-overview.html)
