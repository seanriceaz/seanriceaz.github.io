---
layout: post
title:  "Mobile Navigation Menus"
date:   2013-09-12 00:00:00
categories: user-experience patterns touch navigation mobile
excerpt: Mobile navigation menu UX has been a hot topic the last few years. There are a couple of UX patterns that have emerged recently and some things that appear on their way out.
#external: http://uxpatterns.org/affordances/mobile-navigation-menus/
redirect_from: "/affordances/mobile-navigation-menus/"

---
_This article was originally posted on uxpatterns.org, which now redirects here._
<!-- This article was originally posted on uxpatterns.org. [Original Article Link](http://uxpatterns.org/affordances/mobile-navigation-menus/) -->

Mobile navigation menu UX has been a hot topic the last few years. There are a couple of UX patterns that have emerged recently and some things that appear on their way out. For our purposes today, we’re talking about mobile navigation in terms of menus. Some apps and sites don’t use menus, opting instead for tabs or a home screen, etc., but we can cover those options in a later post.

## The Menu Button

One of the primary parts of mobile navigation is the menu button. The design of it matters, as does its placement.

### The Word Menu

Until recently, mobile navigation often contained the word “menu” to tell users that tapping would open up some kind of menu. This is much less common these days. I only found it in a few places. Also, typically this pattern is paired with a dropdown navigation that pushes the content down as it opens.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/09/babycenter-300x266.png" full="/media/2013/09/babycenter.png" caption="BabyCenter uses a dropdown triggered by a menu button." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/bbc-300x266.png" full="/media/2013/09/bbc.png" caption="The BBC uses the word &quot;menu&quot; and the menu drops down." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/burton-300x266.png" full="/media/2013/09/burton.png" caption="Burton used a standard select box for their menu up until a few weeks ago." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/whitehouse-300x266.png" full="/media/2013/09/whitehouse.png" caption="Whitehouse.gov uses the word menu paired up with a drop down." %}</li>
</ul>

### Three Horizontal Lines (&quot;Hamburger&quot; Menu Icon)

Three Horizontal LinesProbably one of the most common patterns for a menu button is the use of three horizontal lines. This has become even more commonplace as frameworks like Twitter Bootstrap and Foundation are more widely used to launch responsive web applications. Curiously, I found this pattern to be most prevalent on IOS applications, even where Android applications use a different pattern. I dug into the IOS Human Interface Guidelines a bit, but didn’t find anything indicating a specific pattern for menu buttons was preferred over another.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/09/image-169x300.png" full="/media/2013/09/image.png" caption="Even YouTube uses a standard menu button on IOS." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/image-2-169x300.png" full="/media/2013/09/image-2.png" caption="On IOS, Netflix uses a standard menu button" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/image-4-169x300.png" full="/media/2013/09/image-4.png" caption="Wunderlist on IOS Uses a standard 3 line menu button." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/image-1-169x300.png" full="/media/2013/09/image-1.png" caption="ON IOS, Redbox uses a menu button." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/image-3-169x300.png" full="/media/2013/09/image-3.png" caption="View of opened menu on IOS." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/photo-169x300.png" full="/media/2013/09/photo.png" caption="Youversion Bible App on IOS Menu Button" %}</li>
</ul>

### Three lines and a logo

In many newer apps and sites, particularly on Android, those three horizontal lines are married to a logo where they are now much thinner so as to give the logo prominence, but also to indicate a menu is one tap away.

Usually, when the menu was open, the three lines receded slightly to the left becoming even thinner.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/09/flixter.png" caption="Flixter" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/gmail.png" caption="Gmail Menu" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/googleplaymusic.png" caption="Google Play Music" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/gplus.png" caption="Google Plus" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/linkedin.png" caption="LinkedIn Menu" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/redbox.png" caption="Redbox menu" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/simple.png" caption="Simple App Menu" %}</li>
</ul>

## Button positioning

The menu button’s position is important too as it is indicative of what type of menu will appear and what type of movement to expect.

### Menu Button on the Right

Early on, it was a common pattern to place the logo on the left and menu button on the right. This worked well because for right-handed people (most of the world–sorry southpaws!), this placed the menu within easy reach of their thumb, while giving the logo a traditionally prominent position. Also, in IOS, the left area was generally reserved for a back button.

A menu button on the right usually tells the user that the menu will slide in from the top, or from the right.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="QQ’s menu comes in above with their menu icon on the right." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="The Smashing menu drops in from the top" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Flipboard’s menu slides in from the right." %}</li>
</ul>

### Menu Button on the Left

At some point, the menu button started appearing on the left. This usually tells the user that the menu will slide in from the left. I found this to be the most popular option in newer apps, and on many web sites. This is almost always paired up with an off-canvas layout to the left that pushes the content over as the menu opens.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Flixter's menu slides in from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Gmail's menu comes in from the left with a darkened overlay." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="When logged in, this Google menu appears from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="The Google Play Music app menu comes in from the left" %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Google Plus's menu has an overlay and comes in from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="LinkedIn's menu slides in from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Redbox has a left menu" %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Simple's menu slides from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="The menu in the Spotify app appears from the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="The Trip Advisor menu is on the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="For Wikipedia, once you're in an article, there is a menu on the left." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="The Wordpress App has a menu on the left.
" %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Wunderlist has a menu on the left that comes out like a drawer.
" %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Yahoo (Currently testing alternate logos) has a menu that slides down over the content on the page." %}</li>
<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="Burton's new menu drops in from the top." %}</li>
</ul>

## Different Strokes

A few apps are doing different things with menus that you, my dear readers may want to pay attention to.

### Path

When Path launched, it gained some notoriety for this feature. To post something, you tap their menu (a plus icon) and the items come out around it in a circle.

<li>{% include galleryitem.html thumb="/media/2013/09/path-300x266.png" full="/media/2013/09/path.png" caption="" %}</li>
Path Menu UX

### Google Maps

Google Maps (on Android) has moved their menu button to the lower left of the screen. This clears some room up top, but is otherwise a curious choice.

<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="" %}</li>
Google Maps Menu UX

### Facebook

Facebook has two different menus that serve different functions. The left one is for navigation and other tools. The right one is for finding your friends

<li>{% include galleryitem.html thumb="/media/2013/09/" full="/media/2013/09/" caption="" %}</li>
Facebook app menu

## More reading

One of my favorite authors, [Luke Wroblewski](http://lukew.com/) ([@lukew](https://twitter.com/lukew)), has written on some topics covered in this article:

- [Responsive Navigation: Optimizing for Touch Across Devices](http://www.lukew.com/ff/entry.asp?1649)
- [Off Canvas Multi-Device Layouts](http://www.lukew.com/ff/entry.asp?1569)
