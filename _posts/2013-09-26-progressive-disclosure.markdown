---
layout: post
title:  "Progressive Disclosure"
date:   2013-09-26 00:00:00
categories: user-experience patterns progressive disclosure ux
excerpt: When designing something with a lot of information that the user may not need to know all at once, you need progressive disclosure. Users see something and decide they want more information about it, or to see things related to it. So they “zoom in.”
redirect_from: "/affordances/progressive-disclosure/"
---

When designing something with a lot of information that the user may not need to know all at once, you need progressive disclosure. Actually, progressive disclosure is woven into the nature of the internet and many applications. Users see something and decide they want more information about it, or to see things related to it. So they “zoom in.”

Commonly, this takes the form of clicking a “more” link. Other times it could be an accordion or some sort of other expanding and collapsing control. Progressive disclosure also includes things like tool tips and info boxes. The idea is that the app allows the user to  indicate that they are interested in learning more about something by some sort of input—generally a click or a tap.

## Common Methods

### Content Toggles and accordions

Content toggles allow the user to click or hover on a heading to expand and collapse information. This is most common on control panels and dashboard-type views. Sometimes this method takes the form of a tree view as well, but we’ll group that all into the same category. If using content toggles or accordions in your UX design, avoid using hover to expand/collapse and consider allowing multiple sections to be open at once.

<ul class="gallery">
  <li>
    {% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.41.02-PM-209x300.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.40.46-PM.png" caption="Click the comments link to show comments on Google Plus" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.40.46-PM-281x300.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.40.46-PM.png" caption="Click the comments link to show comments on Google Plus" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/msdn-149x300.png" full="/media/2013/09/msdn.png" caption="The MSDN web site uses a tree view for progressive disclosure UX" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/gmail2-96x300.png" full="/media/2013/09/gmail2.png" caption="Gmail uses a &quot;more/less&quot; toggle that slides more email categories out and back." %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/istock-83x300.png" full="/media/2013/09/istock.png" caption="Istock uses little triangles to show where there are more controls" %}
  </li>
</ul>

## Peek a Boo

Peek a Boo content can take many shapes. Sometimes, it’s a tooltip that appears on rollover, and other times its an instructional overlay. This can be an engaging way of connecting users to your content, or bringing more information at exactly the time when it is most relevant.

<ul class="gallery">
  <li>
    {% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.39.50-PM-300x197.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.39.50-PM.png" caption="Resound Creative uses tooltips to describe their projects" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.54.52-PM-300x161.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.54.52-PM.png" caption="100 Ans De Tour requires a click to launch an overlay" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.54.58-PM-300x167.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.54.58-PM.png" caption="100 Ans de tour Info overlay" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/amazon-300x230.png" full="/media/2013/09/amazon.png" caption="Amazon has whole content areas that switch out on rollover" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/amazon2-300x227.png" full="/media/2013/09/amazon2.png" caption="Amazon Prime has a &quot;tooltip&quot; with a sales pitch" %}
  </li>
  <li>
    {% include galleryitem.html thumb="/media/2013/09/homedepot-300x167.png" full="/media/2013/09/homedepot.png" caption="To drill down into Home Depot’s categories, you can use their department dropdown." %}
  </li>
</ul>

## Drilling Down

Countless apps use a drill-down methodology for progressive disclosure. Often, this the first step is a list of things. The user then selects one, and may get some details about their selection on a separate screen, and sometimes another list of finer details to drill down into. This is very much like the “zoom” idea described above. Unlike the others, it drilling down requires multiple pages or views. One could browse a series of encyclopedia articles this way: World > Country > State > City > Neighborhood > House > Room, and so forth.

These are easy to come by on just about any ecommerce site or any reports-based site. Think Google analytics or  mint.com. If you have a lot of complicated data that spans a wide area of topics to zoom into, this may be the way to go.

## Iconography of Progressive Disclosure

I found some different patterns for how to indicate that clicking on something provides more information about what was clicked on

### Plus and Minus

Most common in tree views, some applications use a plus or a minus to indicate clicking will hide (minus) or show (plus) additional information.

### Triangles

The orientation of a triangle may indicate what will happen when you click or the state of a content box. Triangle use was inconsistent. Sometimes the closed state had the triangle pointing to the right. Other times it either pointed in the direction the content would go if it was clicked, or it indicated the state of it. So, up or down pointing triangles don’t have a standard use.

I think (but admittedly have no data) that if you’re using a triangle, the simplest way is to have it point in the direction that content will move: down if it will slide down, right if it moves right, etc.

### Right chevron

Right chevrons indicate that the user can tap to go to a more detailed screen. Generally, it will slide the “viewport” over. But sometimes chevrons are used interchangeably with triangles

## Interesting Approaches

### Twitter

Twitter does something really nice with their applications to progressively disclose available interactions. It starts with your feed. Each item has an “expand” link.

{% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.14.59-PM-300x157.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.14.59-PM.png" caption="" %}

After clicking anywhere on the tweet, you get a full timestamp and a text area where you can compose a reply.

{% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.15.26-PM-300x211.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.15.26-PM.png" caption="" %}

When you give the text field focus (by clicking on it), you get some options for uploading attachments and geotagging. you also get a count of how many characters remain in your tweet.

{% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.15.48-PM-300x273.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.15.48-PM.png" caption="" %}

So, twitter progressively reveals more functionality as you interact with it.

### Google Plus

Much like Twitter, Google Plus reveals more functionality as you interact.

{% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.41.24-PM-300x190.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.41.24-PM.png" caption="Google Plus before interacting" %}

{% include galleryitem.html thumb="/media/2013/10/Screen-Shot-2013-09-12-at-10.41.32-PM-300x295.png" full="/media/2013/10/Screen-Shot-2013-09-12-at-10.41.32-PM.png" caption="Google Plus with visible comment box after interacting" %}

## Further Reading

- [Microsoft Developer guidelines for progressive disclosure](https://msdn.microsoft.com/en-us/library/windows/desktop/aa511487.aspx)
- [Nielsen Norman on Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
