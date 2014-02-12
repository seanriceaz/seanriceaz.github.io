---
layout: post
status: publish
published: true
title: I love/hate Silverlight
author: Sean
author_login: Sean
author_email: seanrice@seanrice.net
author_url: http://www.seanrice.net
wordpress_id: 162
wordpress_url: http://www.seanrice.net/?p=162
date: 2008-07-08 19:48:18.000000000 +04:00
categories:
- Blog
- Thoughts
tags:
- Web
- flash
- Development
- Silverlight
- Microsoft
- Programming
- C#
- nerd talk
comments:
- id: 233
  author: Bob Dickow
  author_email: dickow@turbonet.com
  author_url: http://www.akhal-tekeregistry.com
  date: '2010-01-21 08:17:49 +0300'
  date_gmt: '2010-01-21 15:17:49 +0300'
  content: Ok, good thoughts. So, what can I do to persuade my designer to let me
    implement SilverLight? She's a firm Mac User, thinks MS is Satan, and won't let
    me put SilverLight into anything (though I snuck it in on the website I cite here
    as my site link), won't let me implement caching (she think's it's a MicroSoft
    product I think), and is suspicious of my pages that get rendered with javascript
    and stuff that she says makes the page too huge (28k??).
- id: 234
  author: Sean
  author_email: seanrice@seanrice.net
  author_url: http://www.seanrice.net
  date: '2010-01-21 09:43:46 +0300'
  date_gmt: '2010-01-21 16:43:46 +0300'
  content: |-
    Admittedly, the Silverlight install base is much less than that of Flash. So, many of your users would need to download a plugin... and that's a problem because they have to leave your site to do that.

    I would check the benefits of using Silverlight over Flash or a pure javascript solution to see if its the right technology for what you want to do. your designer needs to get over their anti-micorosoft slant, but you need to make sure that Silverlight really is the best way to do what you want to do.

    Don't forget to count the weight of your javascript files for page load time! (of course, they only get downloaded once, then cached... so its no big deal)
---
I've been working on a project that utilizes <a href="http://www.microsoft.com/silverlight">Microsoft's Silverlight technology</a> for the past month or so. I've been going back and forth about whether I can recommend it to anyone or not. The jury's still out, but I can tell you that it keeps getting better.
<h2>Problems with Silverlight</h2>
Silverlight is currently in version 2.0 beta 2. I had a few small setbacks when they updated to beta 2. First, it did not work on my mac—at all. This issue has since magically fixed itself, though I'm still not sure how Microsoft did it.  I suspect that Microsoft covertly patched it without my knowledge.  In any case, this is no longer an issue. the second issue I had was with the fact that beta 2 will not run Silverlight apps created using beta 1.  I suppose that's why it's "beta" and not a full release.

These are problems that should not happen again. It's good that I haven't been having these problems on a live web site. I can only imagine how frustrating it must be for companies who have Silverlight applications deployed already, like the Hard Rock Cafe Memorabilia site.
<h2>Things I love about Silverlight</h2>
Despite the minor problems I've experienced with Silverlight, There's still plenty to love about it. My absolute favorite part is the way animations can be easily reused.  In Flash, if I want to fade something to grey, I have to create a movie clip that fades it from its original color, to grey. I have to do this for every color I want it to start from.  So, to fade something from red to grey, and later from green to grey, I have to create 2 seperate movie clips. In silverlight, it will make an animation based on what state you want to end the animation at. to use the same example, I need to only create one animation, at the end of which, the object (regardless of its original color) is grey.  Silverlight will do this with all sorts of different parameters, like size, shape, position, angle, or anything else.

I also never thought I'd find myself liking to use XAML, but it really is nice to be able to see under the hood of the animations.  Has Flash ever done something completely bizarre to you and you can't figure out why everything's broken? That doesn't really happen in Silverlight—you can actually see what's not working. furthemore, when doing a build (think of it like <em>publishing</em> in Flash) and you have errors, the errors are generally helpful, and well documented.
<h2>Things I hate about Silverlight</h2>
Now, I can't let Silverlight get off that easy, now can I? There are some serious issues that need to be resolved before Silverlight can call itself a legitimate competator with Flash. The first is that it needs a decent designer tool that can help designers actually start their animations and do some basic scripting. Currently, you have to do this by editing C#, Javascript, or VB code, unless you want all your animations to begin as soon as they load or at a set time after loading; You can't trigger animations on a main timeline, because there is no main timeline. Expression Blend is pretty nice when it comes to creating XAML code, but leaves much to be desired in terms of a code editor. It doesn't even do any sort of intellisense! Flash's Actionscript editor is much easier to use, even as a designer. I don't want to hire a developer every time I need to create something simple in Silverlight, but as it is, it's too difficult to implement for a designer with moderate programming skills, that doesn't want to learn another new language (I had to pick up some C# skills for my latest project).

Secondly, Microsoft really needs to get Silverlight installed on people's machines. This would be much easier if they'd make sure people didn't have problems installing, and if the beta versions would be compatible with each other. I say this because I know several people who were turned off from Silverlight from the get-go because they had installation problems with Version 1. The current version had some issues transitioning between beta 1 and beta 2, but I suppose it's forgivable because they're calling it a beta.
<h2>Conclusion</h2>
I' m not about to give up on Silverlight. I've actually been able to do some good work in it (links coming soon). However, it remains to be seen if it can actually catch up to the Flash install base, and declare itself a legitimate competator to Flash.
