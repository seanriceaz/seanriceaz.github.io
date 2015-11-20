---
layout: post
title:  "Creating User Patience with Loading Indicators"
date:   2013-08-08 00:00:00
categories: user-experience patterns widgets loading progress
excerpt: No matter how zippy we make our applications and sites, there will often be something that takes time to process. Loading indicators, often those swirly circle graphics like these , generally show up when something takes longer than a second or two to process.
#external: http://uxpatterns.org/progress/loading-indicators/
redirect_from: "/progress/loading-indicators/"

---

_This article was originally posted on [uxpatterns.org](http://uxpatterns.org/progress/loading-indicators/)_

No matter how zippy we make our applications and sites, there will often be something that takes time to process. Loading indicators, often those swirly circle graphics like these <img src="/media/2013/08/standard-spinner.png" alt="Standard loading spinner"> generally show up when something takes longer than a second or two to process. Most of the time, this is for a complex query such as a reservation search on a travel web site or for something like a file upload.

It is a solid practice to use loading indicators in these cases so that the user knows that the action they invoked had some effect. Otherwise, they may assume something is broken or that perhaps that they never invoked the action at all–necessitating another click (and restarting the query).

In my search for progress indicators and loading animations, I found that most applications center their loading concept on some or all of the following themes

## Tell the user what is happening

Many times, if the user is informed, they may be more patient. After all, something they asked for is coming–it’s just taking awhile. But be careful about giving an information overload!

If this was initiated by a query from the user, it may be helpful to remind the user about the details in case they made a mistake. No sense in making them wait only to have useless results!
<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-15-23-36-33-168x300.png" full="/media/2013/08/Screenshot_2013-07-15-23-36-33.png" caption="While it's finding my location, Ingress treats me to a neat animation" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-18-20-16-40-168x300.png" full="/media/2013/08/Screenshot_2013-07-18-20-16-40.png" caption="Pano gives me a nice little progress bar telling me exactly what its doing. It's merging my shots into a panorama." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-18-at-8.20.40-PM-300x211.png" full="/media/2013/08/Screen-Shot-2013-07-18-at-8.20.40-PM.png" caption="In LINUX, we have the Yum updater. It's maybe a little too verbose for the average user, but then again, LINUX users are more used to this sort of thing." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-18-at-8.28.23-PM-300x155.png" full="/media/2013/08/Screen-Shot-2013-07-18-at-8.28.23-PM.png" caption="Orbitz tells us it’s searching flights. and shows a generic spinner" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-19-at-10.39.56-AM-300x101.png" full="/media/2013/08/Screen-Shot-2013-07-19-at-10.39.56-AM.png" caption="OSX tells us what is happening as it opens a .dmg file" %}</li>
</ul>

## Show real progress

Sometimes this isn’t technically feasible. Databases don’t know when they’ll be done processing your query, and even if they did, it would take another series of queries to ask for the remaining time. However, for things like file transfers this is much more simple. If you take the amount uploaded and divide it by the total file size, you have the percentage of progress.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/wordpress-uploading.png" full="/media/2013/08/wordpress-uploading.png" caption="Wordpress shows this for file upload progress" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/filecopy-300x148.png" full="/media/2013/08/filecopy.png" caption="The way Windows 7 displays a pending file transfer progress" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-15-23-40-40-168x300.png" full="/media/2013/08/Screenshot_2013-07-15-23-40-40.png" caption="Zeptolab tells us how far along Cut the Rope is in loading" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-16-at-11.05.50-PM-300x49.png" full="/media/2013/08/Screen-Shot-2013-07-16-at-11.05.50-PM.png" caption="Vimeo's Loading indicator is colorful" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-16-at-11.02.22-PM-300x221.png" full="/media/2013/08/Screen-Shot-2013-07-16-at-11.02.22-PM.png" caption="While Kayak results load, the flipboard gives marketing and status update messages" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-19-at-10.42.07-AM-300x211.png" full="/media/2013/08/Screen-Shot-2013-07-19-at-10.42.07-AM.png" caption="Adobe tells us what is happening and an estimate for how long it will take to complete" %}</li>
</ul>

## Give users something to do

Hipmunk did something surprising with their loading screen: They gave me the opportunity to sign up for fare updates (and probably their email newsletter). Since these searches usually take upwards of 30 seconds, I had plenty of time to digest what I was seeing and fill the form out.

Vimeo allows me to edit my video details while it uploads.

Kayak surprised me also by loading results as they came in. This allowed me to start planning as it finished loading.

Other companies showed ads for third parties.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/hipmunk-272x300.png" full="/media/2013/08/hipmunk.png" caption="Hipmunk gives us something to do while we wait" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-16-at-11.06.20-PM-300x263.png" full="/media/2013/08/Screen-Shot-2013-07-16-at-11.06.20-PM.png" caption="Vimeo gives you access to edit video details as it uploads and processes" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-16-at-11.02.22-PM-300x221.png" full="/media/2013/08/Screen-Shot-2013-07-16-at-11.02.22-PM.png" caption="While Kayak results load, the flipboard gives marketing and status update messages" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/expedia-242x300.png" full="/media/2013/08/expedia.png" caption="Expedia shows advertisements while loading results" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/travelocity-300x114.png" full="/media/2013/08/travelocity.png" caption="Travelocity displays ads while users wait" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-18-20-41-06-168x300.png" full="/media/2013/08/Screenshot_2013-07-18-20-41-06.png" caption="While Chrome Racer loads, the game tells us about itself in an interesting way" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-08-14-16-46-22-168x300.png" full="/media/2013/08/Screenshot_2013-08-14-16-46-22.png" caption="Expedia’s app lets me tilt the phone, and open/close the window shutter while it loads flights" %}</li>
</ul>

## Highlight Your Brand

You’ve got your users’ eyeballs for a few seconds on this screen. Make the most of it! Most sites took this waiting time to give the user a taste of their brand, or highlight a competitive advantage of their system. Others went more minimalist and simply animated their logo.

<ul class="gallery" data-slick='{"infinite":false}'>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screen-Shot-2013-07-16-at-11.01.39-PM-300x174.png" full="/media/2013/08/Screen-Shot-2013-07-16-at-11.01.39-PM.png" caption="Priceline takes the time in between to tell you what’s happening in a way that promotes their brand" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-15-23-39-53-168x300.png" full="/media/2013/08/Screenshot_2013-07-15-23-39-53.png" caption="Connecting to Netflix is simple. They just have a branded load screen" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/usairways-loading-300x157.png" full="/media/2013/08/usairways-loading.png" caption="US Airways animates their logo to indicate processing" %}</li>
</ul>

## Summary

There are plenty of different things you can do to keep the user on your site or in your app while something loads. As always, balance the business needs (revenue from advertisement, cross promotion, etc.) against user fatigue and interest and promoting your brand. Wherever possible try to reduce load times altogether.
