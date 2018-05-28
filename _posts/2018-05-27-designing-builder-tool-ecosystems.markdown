---
layout: post
title:  "Deigning builder tool ecosystems"
date:   2018-05-27 22:00:00
categories: user-experience information-architecture
excerpt: I design tool sets that need to interact with each other within the context of a larger ecosystem of apps. Here's a framework for describing the different levels involved.
showcomments: true
#schema_images: http://seanrice.net/media/2018/05/trap.jpg
---

As a user journeys through our family of applications at Infusionsoft, they traverse many levels of functionality that they are probably unaware of as they move. In order to design a cohesive experience, we designers need to visualize the different layers of our app and plan for ways to help our users transition between them seamlessly.

That starts with knowing and mapping your layers. From there, you can more easily understand and communicate about the features that exist at each layer and how a user can move between different layers to access those features.

## Defining the layers

When I started at Infusionsoft in 2017, they already had a fairly mature set of functionality. The web app was powerful, but complex with lots of interdependent parts. One of the reasons for comparatively poor engagement at the time was that our more novice users had difficulty finding the key features they would need to become successful. Simple, general-purpose features like email sending were made more complicated because design and automation features were combined into the same tool. Other pieces of functionality that should have been standalone couldn't be accessed at all outside the confines of an automated workflow (called a *campaign*);

We needed to clarify what the layers were in our application.

For Infusionsoft, here's what our layers look like:

- Design system
- App
- Meta builders
- Builders
- Content editors

## Design system and App layers

These are the layers that our users only know as "Infusionsoft". We have several apps, and a handful of interchangeable themes within our design system. Each app may even have its own design system that generally inherits from the main one. This is what makes them separate layers.

## Meta builders

As the user navigates through our apps they encounter ways to set up or automate various things. The simplest one of these to explain is how users may create and send a broadcast email. You set up the subject line, recipients, and AB test settings in what I like to call a *meta builder.* This could take the form of a wizard or automation tool, or even an API call.

For an email broadcast, it's important to note that the email message and design template itself are not what get setup in a meta builder. A meta builder should provide a smooth transition to a builder experience. In the email example, it makes sense that once a subject and other metadata are set up, the user should be able to pick and edit their email templates. This is where the user traverses to the builder level.

## Builders

Builders are about assembling blocks of content, imagery, and other things that are created or otherwise modified in content editors. Builders make enduring and reusable artifacts like email templates and landing pages. Artifacts made in builders shouldn't belong to meta builders, but they can be referenced in them.

## Content editors

Content editors allow users to create rich text, code, or upload and modify images. If you're composing an email or cropping and recoloring an image you're using a content editor. Content editors don't only live on their own, but within the context of other layers. Users traverse to this level briefly to make a change and snap out just as quickly when they're done.

## When is something a layer?

Something becomes a layer when you discover that you have multiple types or versions of a certain piece of your ecosystem that are interchangeable. For example: Infusionsoft has three email builders in the app, and two different ways to create landing pages. These comprise parts of the builder layer.
