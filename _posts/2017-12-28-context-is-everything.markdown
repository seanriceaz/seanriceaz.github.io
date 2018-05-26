---
layout: post
title:  "Context is everything in web applications"
date:   2017-12-28 12:00:00
categories: user-experience information-architecture
excerpt: A framework to categorize objects and to what extent they can be accessed in different contexts within an application.
draft: true
showcomments: true
#schema_images: http://33.media.tumblr.com/077a1507e5bdd407c8decf11326c818f/tumblr_nmt01ogheD1u6l9wmo1_r2_500.gif
---

Like you, I am responsible for designing parts of a complex web application with facets that sometimes seem as uncoordinated as a 5 year old's self-chosen outfit. Something that I've been thinking about lately is how to display information from one facet of the application within the context of another area of the app.

## The problem of information types

In my application, we've got several types of information that I'm going to explain in abstract. Let's call them objects:

- Chunks
- Stacks
- Piles

### Chunks

Anything that can be described briefly with plain text is a *chunk*. A list of five items is a *chunk*, provided the five items are not objects in themselves. A form with one or two inputs is a *chunk* (but depending on the complexity, it could be a *stack*). Others include images, files, or other discrete bits of data.

*Chunks* should be able to be **previewed** and **edited** in almost any context.

### Stacks

*Stacks* are a bit more complex. Generally, they are bundles of *chunks*. So, a longer form is probably a *stack*. A gallery of images is a *stack*. A list of contacts is a *stack*. A contact itself may be a *stack*. *Stacks* are generally structured and organizable based on their contents. Their rules are defined by the system's creators.

*Stacks* can generally be **previewed**, but may only be **partially editable** from any context.

### Piles

The most powerful parts of our software deal with *piles*. These are things that can only be described with a complex chart or visualization. A web page is a *pile*, and so is an email. A set of automation instructions is also a *pile*. *Piles* do not have a single defined structure between them as a rule. They are flexible and powerful, but rely on the user that creates them to define their structure.

A *pile* can only be **previewed** from any context. Certain aspects of a *pile* may be editable outside their specific builder, but these functions are limited.

## The problem of contexts

We've also got a few contexts where these pieces of information may be previewed, managed, built, or edited:

- Builders
- Managers
- Lists

### Builders

The most powerful tool for creating an object is a builder. Builders are typically only needed for *piles* and *stacks*, as *chunks* are created on-the-fly in the context of some other function. Builders allow users to access and modify any and all aspects of an object.

### Managers

These tools are for organizing *stacks* of objects. A file system browser is an example of a manager. Users can edit metadata like the name and location of an object (in this case, the object is a *file*), but generally cannot edit the object itself. Managers push users into builders for the individual objects being managed.

### Lists

A list is read-only. Within a list, users can't edit anything about any object, but they can see attributes of one or more of them at once. Sometimes, a list can be converted into a builder or manager by switching into an editable mode.

## The need

Within the context of a builder for one object, users need to access other objects. Also, managers may organize, list, and provide access to several different types of objects. What capabilities should be exposed to the user in different contexts to allow them to accomplish their tasks most easily?

## The proposal

All objects should have interfaces for different tiers of editability:

| | Chunks | Stacks | Piles |
| ---- | ---- | ---- | ---- |
| **Preview** &mdash; For more complex objects, a thumbnail or diagram of the object; For simpler ones, literally the object itself. | Yes | Yes | Yes |
| **In-context editor** &mdash; A way of editing the object or some facets of it either inline or within a modal dialog. | Yes | Yes | Sometimes |
| **Simple editor** &mdash; For very complex objects, a way to edit the most important facets of it outside of the full builder. | No | Sometimes | Sometimes |
| **Full builder** &mdash; The primary way of editing a complex object. | No | Yes | Yes |

### Any context

In any context, a preview of an object should be available. This does not mean that a user should be able to preview an unrelated object. But, for instance, in a builder, where the user may want to reference a certain chunk or *stack* (or even another *pile*!) that user should be able to see a preview of the object they intend to reference.

### Manager context

Within a manager, users should be able to access an in-context editor for any object that has them available. A manager may provide links to a full builder or a simple editor, but if the object is too complex for an in-context editor, the manager is not the best place to edit that object.

### Builder context

Because builders are the specific way to edit a certain object, they should only provide access to in-context editors and previews for other objects. Builders and simple editors for those other objects may be linked-to, but the handoff to the other builder should be clear, and should also provide a clear link back to the original builder.

### List context

A list may provide previews of objects, but generally shouldn't link to ways to edit the objects because this may distract from the purpose of the list.

## Conclusion

As each object in your application has a different level of complexity, consider what tiers of editing those objects are available from different contexts.

- Should a video builder also include a 16 track audio mixer inline?
- What controls should be available for image editing within the context of a web page builder?
- In a text document, how much control should the user have over an embedded table or chart?

There are countless permutations of this problem. This framework provides a way to categorize objects and to what extent they can be accessed in different contexts.
