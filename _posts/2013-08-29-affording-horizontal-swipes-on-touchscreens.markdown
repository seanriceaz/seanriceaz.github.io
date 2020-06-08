---
layout: post
title:  "Affording Horizontal Swipes on Touchscreens"
date:   2013-08-29 00:00:00
categories: user-experience patterns touch gestures mobile
excerpt: With the increasing adoption rate of mobile devices, I have noticed that more and more apps and web sites utilize horizontal swipe gestures on touch screens to access different functionality. Of course, this interaction isn’t very helpful unless the user knows that it’s there.
redirect_from: "/affordances/affording-horizontal-swipes-on-touchscreens/"

---

With the increasing adoption rate of mobile devices, I have noticed that more and more apps and web sites utilize horizontal swipe gestures on touch screens to access different functionality. Of course, this interaction isn’t very helpful unless the user knows that it’s there. The way of indicating that an action is available or that there is a particular way to get a particular result somehow is called an affordance. If we don’t give the user an affordance, they may never know how to access certain functionality. Conversely, if we follow a pattern that looks like an affordance but isn’t, as in the Facebook example to the right, we may frustrate our users as they try to interact and get a puzzling result or no result at all.

Without further ado, Here are the different ways I found that UX designers are affording horizontal swipes:

## Beyond borders

A very common way of indicating that the user can swipe to move the viewport side to side is to have content overlap the edges of the content area or move past the sides of the screen. Sometimes, designers give a peek at what swiping left or right will reveal. Windows Phone is a good early example of this technique being used system wide. Since its release in 2010, settings screens and many other screens across different applications had a built-in method of swiping to traverse tabs.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/Windows_Phone_Store-180x300.png" full="/media/2013/08/Windows_Phone_Store.png" caption="Windows Phone Store shows a peek at the next screen. Used with permission from Microsoft" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Microsoft_Office_Mobile_2010_hub-179x300.png" full="/media/2013/08/Microsoft_Office_Mobile_2010_hub.png" caption="Microsoft Office Mobile 2010 Interface. Used with permission from Microsoft" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-19-15-43-31-168x300.png" full="/media/2013/07/Screenshot_2013-07-19-15-43-31.png" caption="This photo gallery in my Facebook stream affords that I can swipe left and right to see other photos" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-16-07-15-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-16-07-15.png" caption="The Google Plus photo gallery interface crops the images to the viewport indicating that you can use swipe gestures" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-59-16-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-59-16.png" caption="Amazon crops off books at the left and right to indicate users can swipe" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-16-03-27-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-16-03-27.png" caption="Netflix has a horizontal scrolling UX in all of their apps, cropping video covers at the edge of the screen" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-54-51-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-54-51.png" caption="As with other Amazon apps, their app store user experience crops images at the edges of the viewport to indicate scrolling is possible" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-58-34-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-58-34.png" caption="In the Amazon app, users can swipe left and right to view more products" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-16-07-15-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-16-07-15.png" caption="The Google Play App Store shows you can swipe by cropping tabs off at the top." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-29-07-10-04-168x300.png" full="/media/2013/07/Screenshot_2013-07-29-07-10-04.png" caption="Intentional or not, this image overlaps the side of the page, and indicates that you can pan to the right" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-08-09-20-25-29-168x300.png" full="/media/2013/08/Screenshot_2013-08-09-20-25-29.png" caption="Ingress has a coverflow-style interface with a scroll indicator." %}</li>
</ul>

## Dots

Many apps have a user interface design that includes dots at the bottom to indicate multiple screens that users can swipe left and right to get to. This affordance goes all the way back to the original iPhone home screen that used this to let users know there were more apps on subsequent screens.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-34-08-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-34-08.png" caption="Cut the Rope uses dots in its user experience to indicate more. It also crops on the left and right as a secondary affordance." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-56-08-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-56-08.png" caption="The Starbucks App uses dots to show I have more gift cards to select from." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-30-20-33-07-168x300.png" full="/media/2013/08/Screenshot_2013-07-30-20-33-07.png" caption="This intro screen in Wunderlist has several horizontal pages, indicated by dots on their interface." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-27-15-29-07-168x300.png" full="/media/2013/07/Screenshot_2013-07-27-15-29-07.png" caption="Every Android configuration is different, but my app drawer uses dots and a horizontal paging user experience" %}</li>
</ul>

## Arrows

Arrows are far less prominent as a user experience pattern these days as they send a confusing message. An arrow may indicate something to the left or right, but does it tell the user to swipe in the direction of the arrow to get to it? Is it a button that I can tap? Trial and error will surely reveal the answer, but as UX professionals, we want our users to intrinsically know where the content is and how to get to it. Still, there are uses for arrows when interfaces need to be multi-purpose. Not all touch devices support gestures natively, and if you are building an app that needs to be almost the same across multiple platforms, these may be the way to go.

{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-29-20-52-15-300x168.png" full="/media/2013/07/Screenshot_2013-07-29-20-52-15.png" caption="Angry Birds Rio sports an arrow on the right, indicating there is another screen of levels over there." %}

## Summary

<figure class="img-right"><a href="/media/2013/08/Screenshot_2013-07-27-15-57-56.png" class="lightbox" data-caption="Google now allows users to swipe left or right to remove cards"><img  src="/media/2013/08/Screenshot_2013-07-27-15-57-56-168x300.png" alt="Screenshot of poor alignment"></a>
<figcaption>Google now allows users to swipe left or right to remove cards</figcaption>
</figure>

There is no clear cut winner among these affordance methods. However, the Beyond Borders method was more often used for galleries. The Dots method was more often found where there were discrete pages or cards to flip through. The Arrows method was not as popular, but I did find a couple of games that used it paired up with the Dots method.

In my search I also found several apps that allow sideways swiping but didn’t show me that it was there except maybe in an instruction screen when I first ran the app. Google Now uses sideways swiping to “push away” cards that aren’t important at the moment. In IOS, the messages app allows swiping to access a quick delete function, but doesn’t tell you about it as it’s not essential to the experience. Pinterest allows you to swipe between tabs.

The bottom line is if you’re building an app or site that uses horizontal swipe gestures as a key interaction, be sure to inform the user somehow—even if its just a clever hint that there’s more to see to the right or left.
