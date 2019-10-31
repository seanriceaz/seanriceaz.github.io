---
layout: post
title:  "Authentication UX: Gestures, Biometrics, and Multi-Factor Authentication"
date:   2013-08-22 00:00:00
categories: user-experience patterns authentication
excerpt: For a very long time, we have dreamed of ways to unlock things or gain entry where we don’t need to remember something or carry some kind of token. As computers get better and companies experiment with more powerful hardware and software, this dream edges closer and closer to reality.
#external: https://uxpatterns.org/authentication/authentication-ux-gestures-and-biometrics/
redirect_from: "/authentication/authentication-ux-gestures-and-biometrics/"
schema_images: "[\"https://seanrice.net/media/2013/07/Screenshot_2013-07-18-06-43-12-168x300.png\",\"https://www.seanrice.net/media/2013/08/842938_60675048-300x225.jpg\"]"
---
_This article was originally posted on uxpatterns.org, which now redirects here._

<!--[Original Article Link](https://uxpatterns.org/authentication/authentication-ux-gestures-and-biometrics/) -->


Authentication UX: Gestures, Biometrics, and Multi-Factor Authentication
By Sean Rice On August 22, 2013 · Add Comment
For a very long time, we have dreamed of ways to unlock things or gain entry where we don’t need to remember something or carry some kind of token. As computers get better and companies experiment with more powerful hardware and software, this dream edges closer and closer to reality.

## Gesture Authentication

{% include galleryitem.html thumb="/media/2013/07/Screenshot_2013-07-18-06-43-12-168x300.png" full="/media/2013/07/Screenshot_2013-07-18-06-43-12.png" caption="On Android, you can choose to unlock the screen by connecting the dots with your finger." %}

In recent years, with the advent of touch screen devices, new input methods have paved the way for authentication by drawing a pattern with your fingers. Such patterns should be theoretically easier to remember than a series of numbers and letters (depending on their complexity of course).

Android gives the user an option to use a grid of 9 dots and simply connect them in a unique way. I have found this quite easy to commit to visual and muscle memory, though these are a bit more guessable than a PIN (when connecting 4 points, there are 3024 possible combinations).

Windows 8 gives users a similar option coupled up with a photo. Users can draw their gestures on a photo that may contain special hints to the person drawing but will not exist for people not familiar. In this way, there may even be subtle reminders to help “jog” a person’s memory to unlock their computer. This should be quite secure as there are a nearly infinite number of possible gestures. Stack Exchange has a fairly in-depth post on how secure (or not) this is.


## Biometrics

The concept behind biometric authentication is great: authenticate by just being you and having some identifiable, unique traits. If everything used biometrics, you would never need to remember a password again. In reality, these systems are available, but not used as often (in my experience) as passwords even when the alternative is available.

## Fingerprints

{% include galleryitem.html thumb="/media/2013/08/842938_60675048-300x225.jpg" full="/media/2013/08/842938_60675048.jpg" caption="Microsoft fingerprint scanner hardware" %}

Some computers now come with a fingerprint reader built in. We’ve all seen something like this in our favorite spy movies where the spy does something to duplicate the target’s fingerprint (or just takes their finger) to gain access to something secure. Outside of Hollywood, it is quite unlikely that this will happen. In any case, these should theoretically be fairly secure so long as the devices are configured properly and he user knows how they work. Regardless, unless you’re in some super secret facility somewhere, you will probably be able to fall back on a password in a pinch.

## Facial scanning

{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-07-20-14-11-45-168x300.png" full="/media/2013/08/Screenshot_2013-07-20-14-11-45.png" caption="Photo of me setting up face unlock on my Android" %}

With Android, you can now unlock using just your face. While this makes things easier (but less secure, as noted in several of its own config screens), it doesn’t work in situations that are less than ideal for the front facing camera (like the dark). Still, it’s a wonderful idea and quite usable when it works.

## Voiceprint Recognition

Android also has a neat feature where you can unlock the phone with your voice as well. So your password could be spoken and checked against your voice characteristics to authenticate you with your phone. This adds a layer of protection, but once again the Android OS warns that this is not as secure as it may seem on the surface. I suspect this may have to do with the amount of variation that it has to account for that could feasibly authenticate somebody with a similar voice as you.

## Retinas, blood, and other spy movie authentication systems

While it’s interesting to talk about these systems theoretically, I’ve never seen one in use in real life. They likely suffer the same downfalls as other biometric authentication systems. Still the idea of never needing a password is an enticing one. I hope those authentication engineers can solve the issues with their hardware and software so we can finally remove that “forgot password” option from all our apps!

## Multi-Factor Authentication

Moving back to more traditional forms of authentication, to augment the security of passwords and pins without adding to memory requirements, some companies have implemented a multi-factor system. Before cell phones and text messaging was so prevalent, there used to be these token devices that had a synchronized number generator that would deliver a secure PIN that changed every few minutes. These days, those devices have been replaced by our cell phones. This has made multi-factor authentication available to more people…

## But is it usable?

If you are willing to sacrifice some ease of use and increase the cognitive load on your users in exchange for added security, I suppose it is usable. In implementation, this requires a second password field or a second page that shows up after the unique PIN is sent to the device. It also requires the user to always have their device powered on and ready when they need to sign in and have some fallback method of authentication in case it doesn’t work for any number of reasons like no cell reception or a lost or broken phone.

## Summary

When it comes to authentication, consider how easy it is for a user to remember their credentials. Biometrics are the easiest to use as they require no memory use whatsoever, but with current (consumer grade) technology, these are fairly insecure. Passwords are the standard across web interfaces despite that they are very difficult to remember, while PINs seem to be more prevalent in offline methods like ATMs and gate codes. Pass phrases seem the be the most secure while also being somewhat easy to remember, so they are recommended where keystrokes are not at a premium. Remember, you can always augment your authentication with second factor like a physical card or key, a text message PIN, or some other artifact without hurting the user experience too much.
