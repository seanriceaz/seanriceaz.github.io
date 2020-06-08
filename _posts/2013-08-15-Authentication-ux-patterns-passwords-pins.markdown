---
layout: post
title:  "Authentication UX Patterns – Passwords & PINs"
date:   2013-08-15 00:00:00
categories: user-experience patterns passwords
excerpt: On many web sites, one of the most-used features is the password reset tool. We UX'ers must design our applications to accommodate the failings of human memory, which is why the password reset function exists. But perhaps we should strive for something higher than the illusion of security at the expense of user experience. In this article, we are going to explore different methods of authenticating, and how human memory limitations collide with security requirements.
redirect_from: "/authentication/passwords-pins-and-patterns/"
schema_images: "[\"https://seanrice.net/media/2013/07/IMG951235-169x300\",\"https://www.seanrice.net/media/2013/07/Screen-Shot-2013-07-19-at-8.36.37-PM-300x178.png\"]"
---

Any time you have an account, you have some sort of sensitive information. That information might be as simple as a list of comments you’ve made, or it may be your banking history. We use passwords and patterns to unlock out smartphones. We might have a gate code to enter our apartment complex.

On many web sites, one of the most-used features is the password reset tool. We UX’ers must design our applications to accommodate the failings of human memory, which is why the password reset function exists. But perhaps we should strive for something higher than the illusion of security at the expense of user experience. In the next couple articles, we are going to explore different methods of authenticating, and how human memory limitations collide with security requirements.

## PINs

Generally, these are a 4 or 5 digit number used to gain access to anything from your voicemail to your bank account. By themselves, they’re insecure. For a 4 digit number, there are only 10,000 different possible combinations.

With PINs, usually there’s some secondary token used to authenticate, such as a physical card (like a bank card) or your phone (you may have to be physically holding your phone to access voicemail)

4 numbers isn’t incredibly difficult for the human brain to recall and entering numbers is fairly simple especially if you use a 10-key pad or the number keyboard on mobile devices.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/07/IMG951235-169x300.png" full="/media/2013/07/IMG951235.png" caption="This is a simple PIN unlock screen on IOS. The big 10-key UI is easy to use." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-18-10-53-56-168x300.png" full="/media/2013/07/Screenshot_2013-07-18-10-53-56.png" caption="This PIN screen on the Simple app is branded to match Simple's style, but the UI is very familiar." %}</li>
</ul>

## Alphanumeric Passwords

Consisting of letters and numbers, these are the most common form of a password available. If you have an 8 character password with letters and numbers, there are 218 trillion possible combinations.

Because 8 random alphanumeric characters is very difficult to remember (and only moderately secure), most users pick a memorable word or combination of words to satisfy the requirements, and sprinkle numbers and caps in occasionally for good measure–usually in a predictable way. This is neither secure, nor particularly easy to remember.

## Adding a little complexity with special characters

Some sites require passwords with special characters, such as punctuation, dashes, underscores, etc. This does increase security somewhat, but increased complexity requires still more cognitive load to recall it. It’s no wonder people need to reset their password so often!

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.23.38-PM-300x194.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.23.38-PM.png" caption="First step to signing in to Bank of America" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.25.01-PM-171x300.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.25.01-PM.png" caption="Bank of America has a &quot;SiteKey&quot; step where you enter your password. (This is not a real SiteKey combination)" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.25.23-PM-300x274.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.25.23-PM.png" caption="The sign in from for Wells Fargo. This is a standard username and password combo." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.22.58-PM-300x179.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.22.58-PM.png" caption="Amazon's standard sign in form" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.34.26-PM-300x258.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.34.26-PM.png" caption="The sign in form for Gmail is a username and password combo." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.22.14-PM-300x54.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.22.14-PM.png" caption="Facebook uses an email/phone number and password combo" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.34.12-PM-300x145.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.34.12-PM.png" caption="Istock uses a standard username and password." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.38.22-PM-300x142.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.38.22-PM.png" caption="Login for Vimeo. Creative background with standard email and password fields" %}</li>
</ul>

## Pass Phrases

{% include galleryitem.html thumb="/media/2013/07/Screen-Shot-2013-07-19-at-8.36.37-PM-300x178.png" full="/media/2013/07/Screen-Shot-2013-07-19-at-8.36.37-PM.png" caption="Simple’s login form looks like the back of a credit card, and requires a passphrase instead of your standard password." %}

I just recently saw a site start to use something called a passphrase to authenticate me. The site is [Simple.com](https://simple.com). A pass phrase is a series of words with spaces and maybe punctuation. It can be easy to remember like lyrics to a song, or a special saying you have. My pass phrase is over 30 characters long, yet it is simple to remember and probably difficult to guess. Talking about possible character combinations is virtually useless at this point. the number is ridiculously high. Now we can calculate the possible word combinations in a five word English phrase to something around 150,000 ^ 5 (actually this is a gross underestimate of possible combinations based on an estimate of 150,000 english words in the dictionary) but that also an incredibly high number. I am oversimplifying these calculations, but suffice it to say, pass phrases appear to be far more secure than any of the previous methods mentioned.

In terms of memory, our brains are built to remember important phrases. Why else can you still recite the Pledge of Allegiance or your country’s national anthem, or the lyrics to that song from your high school days?

So theoretically, pass phrases should be more secure and more memorable and thus superior in many ways. The only drawback I found was difficulty of accurate word entry on mobile devices, especially when masking each character. Simple works around it by only requiring a full login for the device once, but a PIN to unlock the app every time it opens.

## To be continued

Due to the level of complexity of this subject, I’m breaking it into a 2-part series. Next week, we’re going to talk about alternative patterns of authentication such as Screen Unlock patterns, Biometrics, and Multi-Factor Authentication
