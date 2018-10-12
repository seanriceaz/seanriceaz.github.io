---
layout: post
title:  "My switch to Figma"
date:   2018-06-11 12:00:00
categories: user-experience tools
excerpt: I made the switch from Sketch to Figma a month ago. Here's what I learned.
showcomments: true
schema_images: http://seanrice.net/media/2018/06/Figma-v-sketch.png
---

I've been using [Sketch](http://sketchapp.com) since it was a free beta. It quickly replaced Photoshop in my process because it made pixel-perfect vector (mostly) images and spat out the slices just how my engineers needed them. So, it was with great reluctance that I even tried [Figma](http://figma.com). A coworker at the time basically told me &quot; you've got to try this.&quot; And then he spent some time explaining why it could be worth the switch.

I tried it out on a small project. And then I tried it on another. And another. And now I actually try to avoid opening Sketch. Here's what I've learned.

## What I love about Figma

### Components

I love components. In Sketch, they're called _symbols_. In Adobe, they're _smart objects_. But neither Sketch nor Adobe products get it right the way Figma does. In fact,

> Figma makes Sketch symbols look bad the way Sketch symbols made Adobe smart objects look bad

In Sketch, you need to plan your symbols because only certain things can be overridden, like text or _references to other symbols_. There are [complicated and brittle methodologies](https://medium.com/ux-power-tools/a-quick-start-guide-to-ux-power-tools-773d5b47ac85) for making Sketch symbols flexible enough by using nested (and nested, and nested) symbols in _just the right way_.

You don't need all that in Figma. Just create a component out of something you want to reuse. Then copy and paste it where you want to reuse it.

The magic happens when you want to change something in an instance of your component. And this is where Sketch falls on its face. In Figma, you just edit it like you normally would. That's right Sketch users: there's no need to go to a convoluted side panel to edit it. In Figma, you can even edit things like stroke weight and color. Then when you update the master copy, it cascades down, keeping your overrides. Magic!

### Collaboration

#### File sync

Remember a little over a year ago when [Abstract](http://goabstract.com) came out for Sketch? We designers exclaimed with one voice "Finally! Git for Sketch! Now we can finally share files like engineers!"

> Why would you want to introduce complicated source control and diff merging, when you can just work on the same file simultaneously?

With Figma, that same exclamation is more like "Finally! Google docs for design files!" You can watch people collaborate in real-time on your file. This has been incredibly helpful when our content strategist needed to make some copy changes in some of my mockups. Instead of needing to go through the convoluted branching and merging process with Sketch/Abstract, she just opened my share link and made the changes while I worked in other areas of the same doc. The source of truth stays up-to-date.

#### Commenting and review

[Invision](http://invisionapp.com) is the typical tool used to comment on design files. Abstract has the feature, but it's still rough around the edges. Sketch cloud has commenting as well.

> All of the Sketch tools make the designer deal with comments outside the context of their design.

If I want feedback on a design I'm working on in Figma, I can just send a link to the design and the commenter can simply leave comments while I work. Meanwhile, I can close and respond to comments in Figma without needing to context-switch to a third party application. The commenter sees the up-to-the-second designs (instead of an instantly-outdated snapshot uploaded to Invision). I get up-to-the-second feedback in the tool I'm using to do the work.

Ultimately, this reduces the chances a comment will be missed.

### Cross platform

We can't all have fancy Mac laptops with fancy hi-def screens and swipey touchey bars where our F keys used to be. Figma is web based like Slack and Basecamp and Google Docs are web based. There are apps for it to work natively, but you can always just pull it up in a browser. All I need is a Chromebook or a tablet to work in Figma. That also means non-designers can use Figma to comment and even make adjustments to designs, provided they have the permission.

### Importing Sketch files

Figma does an awesome job of importing Sketch files. I have imported several and haven't had a single problem with them yet. It even converts my crazy nested symbols to components, which only makes it more obvious that the Sketch way of doing them is convoluted.

## What isn't so great (yet)

### Prototyping

Interactive prototypes in Figma are a lot like Invision two years ago. You can link hotspots to screens with simple transitions, but that's about it. No overlays. No hovers. No gesture-interactions.

On top of that, there isn't really a Figma prototype view without Figma branding and paging controls. These additional UI elements on top of your design confuse user test participants, and therefore it's not recommended to use Figma for this.

> Figma prototypes are good enough for sharing ideas around your team, but won't usually work for user testing.

That said, Figma is very, very close to being acceptable for basic user testing. It just needs basic overlay support and, more importantly, a proper shareable prototype view that doesn't break the experience.

### File portability

Figma is great at converting from Sketch or other formats. But it doesn't export back out perfectly. To be clear, this isn't about exporting slices and icons and other graphics out for production. Figma does that rather well (and almost exactly like Sketch).

In specific, if you want an editable vector file from Figma, you can only export SVG. This isn't so bad, but all the text in the SVG is outlined meaning it's not editable as text after you export it. Further, SVG files don't retain the component relationships, so importing these SVG files into another app like Sketch is bound to disappoint.

### Plugins

Sketch lives because of plugins. Most designers have several installed at the same time. They're very easy to write in general (I even wrote a [spell checker plugin](https://github.com/Tallwave/sketch-spellcheck-all-layers) for it) and can be very helpful in speeding up your Sketch process.

Figma doesn't have plugins (yet). That means there's no [Craft](https://www.invisionapp.com/craft) plugin, or [Content Generator](https://github.com/timuric/Content-generator-sketch-plugin) plugin or [Sketch Runner](https://sketchrunner.com/) (or [spell checker](https://github.com/Tallwave/sketch-spellcheck-all-layers)), or any of the other ones that we have become accustomed to using in Sketch.

The good news here is that Figma just opened up a [read-only API](https://www.figma.com/developers). This has given us access to the data structure for the designs. This is a step on the path of opening up a two-way communication over API, which could expose some of the advanced features we Sketch expats were used to in the past.

### Printing

I won't spend much time on this, but suffice to say, you can't print from Figma yet. You can't even export a PDF of your design (though there's an [API integration for it](https://figma-pdf.gweltaz-calori.com/), now). Since this is primarily an interface design tool, this isn't ultra critical, but I ran into the issue trying to create a postcard in Figma, and was disappointed that I had to export a rasterized file to guarantee proper printing.

## Convincing my team to switch

For what it's worth, I haven't convinced my team to switch yet. Most of the designers just got used to using Sketch and Abstract over the last couple years, and Figma doesn't yet have a couple features they need (content generator and a Craft plugin), so they're not yet ready to make the leap. Fortunately, we have some autonomy to choose our tools, and I'm slowly pulling them over.

### Feature parity

Sketch and Figma have a very similar editing experience. You have pages, layers, frames, slices, and other things. These all work in similar ways, and most of the hotkeys are the same. Figma even has shared libraries (of components that work better than symbols) for teams.

### Cost

For us, Abstract is the most expensive piece of our design ecosystem.

> Let that sink in. A third-party tool for Sketch is more expensive than Sketch (annually). And without it, we can't easily collaborate in Sketch.

If my team ditched Sketch for Figma, there would be a solid cost savings over time. We'd still need Invision for awhile, but could stop paying Abstract to do things that are built into Figma.

### Developer handoff

We use [Zeplin](http//zeplin.io) for developer handoff. It's where we store the final mockups for each feature build. Figma connects to Zeplin too. It also has developer documentation built in, which is easier to get to and use than Invision's Inspect mode. But Zeplin still wins here, as it's a purpose-built app for that.

## What's next?

I'm planning to continue using Figma because I find it easier for my workflow despite the drawbacks. It's free for individuals. When my team wants to start using some of the cool team features (like shared component libraries and files) we'll have to pay, but by then Figma will likely have ironed out some of the issues slowing adoption.
