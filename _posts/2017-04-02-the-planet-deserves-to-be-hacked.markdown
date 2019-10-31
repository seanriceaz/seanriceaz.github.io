---
layout: post
title:  "This planet deserves to be hacked - or - Why I hacked a better spellchecker for Sketch"
date:   2017-04-02 14:00:00
categories: user-experience sketch code
excerpt: This article is about why I hacked a better spell checker into Sketch, and why the world needs designers to get hacking
showcomments: true
schema_images: https://seanrice.net/media/2017/04/sketch-hack.jpg
---

The gift of a designer isn't merely the ability to make or change things. It's _seeing_ what needs to be made or changed.

Seeing is easy right? As a designer, I see numerous problems to solve every day. When I encounter a problem that causes enough of a "rub", I know it's time to get hacking.

This article is about why I hacked [a better spell checker into Sketch](https://github.com/ethology-co/sketch-spellcheck-all-layers), an app I use every day.

## Feeling the rub

Spell check in Sketch was an exercise in tedium.

1. Select the layer you want to check
2. highlight the text within it
3. Open the spell check dialog
4. Check spelling
5. Do this for **every other text layer**

I was working on a project with hundreds of text layers per page, and several pages. Going through that process several hundred times would have taken _days_. It was large print project. At some point I found a few typos, and wondered how many I was missing.

I determined that even if I spent 10 hours building the plugin, it would be a net savings in time spent on the project, and would increase the quality of our deliverables.

I didn't ask my boss for permission (sorry, Jen!). I went ahead and got hacking.

## The hack

### Understanding the problem

The problem, in short, was that Sketch could only spellcheck one layer at a time. I wanted it to spell check all layers at one time. You may wonder, like I did, why it was built this way.

To start, Sketch uses OSX's built-in spell checker. This spell check feature works great for most things, like documents, emails, and other long-form text formats.

Sketch is a fundamentally different type of application from these. Those types of apps feature *one giant text container*. Sketch's documents contain several, perhaps hundreds of these text containers. The OSX spell checker only knows how to check one text container at a time, which is why the default functionality in Sketch works this way.

### V 0.5 - Minimum Viable Whatever

At first, I just needed to know if a layer had a misspelling in it.

The first version of the plugin simply followed this algorithm:

1. Loop through all the layers on a page (recursing through groups etc)
2. Check if the layer was text (as opposed to a graphic or something else)
3. Run the built-in spell checker on the text
4. Return the text of any layer with a mis-spelling so I could find it and fix it.
5. Pop an alert with all the the offending text in it.

To make this work, I needed to [scrape code from other people's projects](https://gist.github.com/abynim/04f88d5e4fe47118bfe3) (also credited on the [readme](https://github.com/ethology-co/sketch-spellcheck-all-layers)!)] to loop through laters and check layer types. I also needed to figure out how to use Apple's system spell checker within Sketch by reading the developer manuals.

Worked like a charm, but I wasn't done.

### V 1.0 - Legit release

In order to really fix Sketch's spell checker, I needed to make a plugin that could actually fix the text once it found a misspelling. Along with fixing a few bugs, I set about to doing just that.

To get this done, I needed a custom popup UI that looked similar to the system spell checker window people are familiar with. I also had to build some of those features to work properly on this type of document.

To build the UI, I used Apple's Interface Builder and a [Sketch library to make it work with my plugin](https://github.com/romannurik/Sketch-NibUITemplatePlugin_).

The other tricky part to getting this working was actually altering the text in the document. Text layers don't work like HTML. You can't just change the text.

1. You have to target the layer
2. Make it editable
3. Overwrite the text
4. Then make it uneditable again.

It wasn't real complicated in the end, but it took a few hours of hacking to figure it out.

I now had a working spell checker, but I still wasn't done.

### V1.1 - Extending to symbol overrides

At [Tallwave](https://www.tallwave.com), we use symbols and overrides fairly extensively, and my plugin still couldn't spell check these.

It turns out symbol overrides are an *entirely different animal* than plain old text layers. A symbol exposes overrides from itself and every nested symbol within it in a single panel in Sketch. Fortunately, this made looping through them fairly easy once I figured out how to find them with code.

The other tricky thing with symbol overrides is you can't edit them directly with code. You have to actually

1. Loop through overrides
2. Check if they are text (or something else)
3. Make a &quot;mutable&quot; copy
4. Spell check that
5. Replace the text with the corrected text
6. Overwrite the old overrides (something you can do with code even though you can't just change the text directly)

This discovery necessitated some refactoring. I had to abstract the spell checker loop into a separate function that I could access from both the plain text layer loop and the new, crazier nested loops of symbol overrides.

After some hacking to figure out some of the intricacies of meddling with symbol overrides (see above), I had a really solid spell checker I could really be proud of.

## But, I'm a designer!

You may be reading this thinking &quot;I can't do this. I'm a designer!&quot; I felt the same way. Actually, I had encountered the problem over a year ago, and submitted a request to Bohemian Coding for a better implementation... And waited... And waited...

It turns out there were [a few others with the same request](https://twitter.com/search?q=sketchapp%20spell&src=typd).

I don't want to denigrate Bohemian Coding. I'm sure the spell checker is in the backlog somewhere, behind a bunch of other really awesome stuff that's about to come out&mdash;Seriously guys, keep up the good work!

But I couldn't wait for them. Their priorities are elsewhere.

You've probably encountered this at some point. A problem that affects you more than everyone else, or an idea that you _know_ could change the world, but you can't seem to convince anyone to help you.

Designers, it's time to accept it. You can't solve the world's problems by merely talking and drawing. You've got to get your hands dirty and start hacking.

## I'm a hacker, and so can you

You don't have to code to hack. Some hackers work best with wood, or 3D printers, or cardboard, or electrical circuits. Whatever you choose to hack with, be ready to screw it up a few times and to learn some new techniques on the path to a solution.

When you find that solution, release it to the wild for the benefit of the community. Give it away or sell it, but don't keep it to yourself.

There are a lot of problems out there in the world. As a designer, you see what other people don't see. The people living on this planet deserve solutions to their problems, especially the ones they don't see or can't fix for themselves. This planet deserves to be hacked.

I guess what I'm trying to say is...

<img src="https://media.giphy.com/media/HAonhTZTaQE24/giphy.gif" alt="hack the planet">
