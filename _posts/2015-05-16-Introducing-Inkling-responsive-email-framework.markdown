---
layout: post
title:  "Introducing Inkling: A responsive email framework for modern web developers"
date:   2015-05-16 00:00:00
categories: email html responsive mobile user-experience
excerpt: When tasked with building out a few custom responsive email templates, we naturally sought out some ways we could streamline that process. Inkling came about as a by-product of seeking to improve the user experience of coding custom HTML emails.
---

## UPDATE: <a href="https://get.foundation/emails.html">Zurb's Foundation for Email</a> was released some time ago, and now there's no longer a need for my Inkling tool, described below. ##

When I was at Ethology (later, Tallwave), we leveraged a few different web development tools that help us to do our jobs more efficiently – namely, <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> and <a href="https://sass-lang.com/" target="_blank">Sass</a>. So when tasked with building out a few custom responsive email templates, we naturally sought out some ways we could streamline that process. Inkling came about as a by-product of seeking to improve the user experience of coding custom HTML emails.

### Tables all the way down

In our hunt for a responsive email toolkit, we settled on <a href="https://zurb.com/ink/" target="_blank">Zurb’s ink framework</a> because — unlike the many templates from the major email marketing providers — it was pretty bare-bones to begin with, giving us a clean starting point.

<img class="alignnone size-full wp-image-2189" src="{{ site.baseurl }}/media/2015/code-before.jpg" alt="Code Snapshot of an HTML email ">

We discovered very quickly that we still had to rely on tables nested within tables nested within tables to achieve the desired effect. That’s just part of the experience when coding HTML emails.

Inkling doesn’t change this grim reality in the rendered code, but it does make it much easier to deal with by using a system Jekyll includes to create responsive containers, rows, and columns.

<img class="alignnone size-full wp-image-2188" src="{{ site.baseurl }}/media/2015/code-after.jpg" alt="Screenshot of responsive HTML email code using Jekyll">

### Getting sassy

If you’re used to coding styles with Sass, coding vanilla CSS can feel like working with one hand tied behind your back. We sought a way to leverage the power of Sass with its variables and mixins (not to mention improved syntax) to make the coding process even faster.

Zurb’s Ink is not built with Sass, but it was simple to find a <a href="https://github.com/faustgertz/sassy-ink" target="_blank">solid Sass port</a>, which is what we’ve included in Inkling. This way, anyone can change the base styles as easily as changing a Sass variable while experiencing the performance increases associated with Sass, as well.

<img class="alignnone size-full wp-image-2190" src="{{ site.baseurl }}/media/2015/sass.jpg" alt="Screenshot of Sass code for responsive emails">


### Inline skating

The final piece of the puzzle came about as a result of the tedious process of copying and pasting style sheets and code into online HTML email inliner tools. We found that this was not only tedious, but was wasting time as we were testing and tuning the emails.

The old, slow workflow was build &gt; compile &gt; copy/paste &gt; inline &gt; copy to Litmus &gt; test. Go through that a dozen or so times and it will become obvious why we were driven to create a better method.

In the end, our solution was a script that allows us to build using our favorite tools. Then, with one command (rake), it compiles all the code for us using Jekyll and inlines it using a Ruby gem called Premailer. The final, email-ready code is output into a neat HTML file, ready to copy into any email marketing app.

#### <a href="https://github.com/ethology-co/inkling" target="_blank">Download Inkling for free on Github.</a>

We hope it helps you create beautiful, custom responsive emails more quickly so you can focus on the design rather than the foibles of HTML email coding.
