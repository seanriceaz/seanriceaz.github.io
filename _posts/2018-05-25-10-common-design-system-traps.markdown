---
layout: post
title:  "10 Common design system traps and how to disarm them"
date:   2018-05-25 12:00:00
categories: user-experience design-systems
excerpt: You set out to build a design system, but you fell into a few common traps along the way. Disarm those traps before they put your efforts to a premature end.
showcomments: true
schema_images: http://seanrice.net/media/2018/05/trap.jpg
---

Working on a larger team of designers on a multifaceted application or multiple apps within an ecosystem is the dream of many designers. But how do you keep consistent design quality across applications with different problems and even branding needs?

> “Easy! “We create a design system!” exclaims the team lead.

So, you set out with a engineer or 2 and another designer, or content strategist, to slash through tech debt, increase usability, and bring a new level of sameness to all the disparate apps in your company’s portfolio. This effort will speed up design and development while raising accessibility and usability standards.

You set out with the best of intentions, but you fall into a few common traps along the way. Don’t give up! I’ll walk you through the traps and how to disarm them before they put your efforts to a premature end.


## Trap 1: You only built a UI kit

I used to work at an agency where this was a deliverable we would make for companies just starting a new application. It’s not a bad start, but it’s not a design system. Many of our clients stepped right into this trap in an attempt to  save time or money.

A UI Kit is simply the definition of things like colors, font sizes, and the look of buttons and other interactive controls. It may also define some other rules for typography, spacing, grid systems, and other visual elements. It’s a visual toolkit to help designers keep the different screens in the app looking like they belong together.

A UI Kit is a great start to designing one application. But if your company has a more diverse set of applications, you’re going to need to take this a few steps further.


### Recognizing this trap

You’ll notice that you’re stepping into this trap if:

- You’re only planning for a week or so of design work for the whole “design system” project
- You haven’t engaged any engineers in the process
- You’re only thinking of 1 or 2 similar applications


### Disarming the trap

The easiest way to disarm this trap is to simply *not stop iterating* during the design process. It’s easy to fall into this trap when you’re designing something new. UI kits are great to build while you’re in the early prototyping phases of a project. Just plan to return to it a little later, with the help of a engineer and some other teammates to flesh out the remaining details and documentation.


### Good examples of UI kits

- [IOS Design Kit](https://iosdesignkit.io/ios-11-gui/)
- [Invision UI Kits](https://support.invisionapp.com/hc/en-us/articles/115000536363-Free-UI-design-kits)
- [Bootstrap UI Kit](https://www.sketchappsources.com/free-source/1768-bootstrap-v4-ui-kit-sketch-freebie-resource.html)
- [Foundation Kitchen Sink](https://foundation.zurb.com/sites/docs/kitchen-sink.html)

## Trap 2: You let the engineers lead the show

Engineers naturally think systematically. They came up with the term DRY (Don't Repeat Yourself). Of course, a design system is just like any other system with a bunch of reusable components. They're not wrong. But if you're not careful, they'll run right over you and just jump right to building it without a lot of design collaboration.

### Recognizing the trap

This one’s tricky to find because there are many engineers who are actually pretty good at software design. Many times&mdash;though they may not admit it&mdash;they think of design as a roadblock to getting software built. Or they may relegate design to merely adding polish and color and branding. One way to recognize that you’re walking into this trap is to look for those attitudes among your engineers.

Another telltale sign that you’ve stumbled into this trap is that your engineers built a component library and documented it in a way that isn’t easy for designers to understand and edit. Remember: your design system should serve your whole product team, and that includes designers as well as engineers (and marketing, and product management, and executives). There should be a simple process for non-engineers to contribute and give feedback on the components themselves as well as the documentation of the system as a whole.

### Disarming the trap

To disarm this trap, you need to get in there and start leading from a design perspective. Conduct workshops involving the engineering team. Start voicing your opinion about the system itself and call them out when the documentation doesn’t make sense to you. Bring in a content person and collaborate on how the design system communicates to people consuming it.

Basically, don’t let your design system become merely engineer documentation on a set of components. Help the engineering team get what they need from the system, but help them empathize with other consumers of it and build it together with them. It may help to learn a thing or two about editing code!


## Trap 3: You made it too rigid

A design system is meant to be comprehensive, but it should also be malleable. If your design system forces different teams into design patterns that don’t suit the needs of their applications you may have made your system too rigid. Designers need to have and defend their reasons for deviating from the norms in the system, but the system should also support some amount of variance between applications, and sometimes even different areas of the same application.

### Recognizing the trap

If you’ve got a design system in place and your app teams are constantly debating the design of certain pieces of the system and how they work for their different apps, you’ve tripped on this trap.

### Disarming the trap

The way to disable this trap is to determine which components may need to be more loosely defined by the larger system so that individual applications can have the flexibility they need to meet their users' needs. It helps to take an inventory of how different apps have solved the same problem and do some ideation on possible solutions. Perhaps you need more variants on components, or perhaps you just need to get mind-share on the right solution. Either way, an ideation workshop might be in your future.

## Trap 4: You made it too inclusive of individual app needs

The opposite of too rigid is too flexible. Your design system may need to accommodate some variation within different applications. However, it should be general-purpose enough to work without modification or override in most instances across all your apps. This requires some amount of discipline from everyone involved to go through the rigor of determining whether or not to include new components or variations in the system.

### Recognizing the trap

Things are going swimmingly. You haven't had a single tough discussion about a new component. All your teams are contributing to the system as they build. A few months later, you take a look through the design system documentation and realize there are a few duplicate, or near-duplicate components in the system. You've sprung the trap.

### Disarming the trap

The way to avoid this trap entirely is to regularly meet about proposed new components to discuss if and how to include them in the system. Not every app needs to be exactly the same. For example, navigation in a complex application may need to be significantly different than a simple one. In these cases, each app may have its own design system that builds on top of a master one.

If you've tripped the trap, and you've gone too long without a good code and design audit, you might be in for a painful refactoring. You will find at the end that it was worthwhile!

## Trap 5: You made it too complicated to implement

Nobody sets out to build something needlessly complicated. But it happens. Often. If your development teams have trouble consuming the design system, it will never get adopted and you've wasted your time. If your design team has too much trouble pulling in the assets and rules they need from your system, they'll just create their own, and soon everything will be out-of sync again.

### Recognizing the trap

You'll know this one if you hear constant complaints from designers and/or engineers about using the design system. These will surpass the grumblings of somebody learning something new.

### Disarming the trap

Remember that designing and building this system is an exercise in user experience. Your engineers are your users, as are your designers (and likely other stakeholders). This system is for them. Make it easy on them! Give them well organized Sketch libraries, or an Omnigraffle palette, or a master PSD that stays up to date. Write a solid readme that can get your engineers up to speed on how to install it in their app and run it on their local system. Build it in such a way that it's easy to set up and consume&mdash;even for an inexperienced engineer.

## Trap 6: You wrote too much documentation

You've written component descriptions that make Leo Tolstoy proud. They eclipse even the most self-important of Amazon reviews. Every little element is described to the minutest detail. But nobody appreciates the care and consideration and the little bits of your soul you've woven into your prose. It took you a long time to roll out your design system and you won't add anything to it unless it's well documented.

### Recognizing the trap

Your engineers jump right to the "good stuff" to just get what they want from the system without really understanding the purpose for each component or pattern. Your designers use components inconsistently and in the wrong places. They have difficulty communicating with the development teams. Turns out, nobody read your intricate UI poetry, or even your haiku on button states. You've walked into the trap of too much documentation.

### Disarming the trap

Work with a content person to get the right amount of content in there. Each component should have a brief description of what it's used for, and when to use certain variants, and when exceptions can be made. Use real examples in your documentation so that you don't have to describe with words something that can be simply observed.

## Trap 7: You leveraged a framework you didn't fully understand

Your team is aching to be ahead of the startup game, so they're building on the most up-to-the-minute framework that all the cool engineers are raving about. Or you're designing your design system to feel like a company you idolize. Or you built a Sketch file based on some famous Sketch user posted on their blog that is full of neat nested symbols and everything.

### Recognizing the trap

You're struggling to make it work. You're fighting the framework more than your user's problems. You find yourselves settling for "how the framework does it" despite what the user needs.

### Disarming the trap

There are two ways out of this trap. The most straightforward, but time consuming solution is to switch frameworks entirely. If you're way too invested in the framework you chose, you may not wish to switch. In this case, consider the components you may want to spin off of it. Override the framework defaults or fork the framework and do what your users need.

## Trap 8: You took too long debating minutae

Development efforts have stalled out. You're behind schedule on releasing your design system because you can't get everyone to agree on some of the little things. Your engineers are frustrated because they need to build with some of the components that are still being debated. Your designers use conflicting design patterns in their prototypes while they wait for details to get determined.

### Recognizing the trap

This is your standard "analysis paralysis" problem. If you're waiting for a design-by-committee approval of every little thing in the design system, you could end up in this trap. Watch for a building list of items and components in a research or approval backlog. Also, watch for how long your team debates non-functional requirements like position of buttons in a modal window or how fast an animation should happen.

### Disarming the trap

Emphasize action. Don't let decisions like these stop development, but be sure that you can return to them after the appropriate amount of research and debate has been done. It may help to take a straw poll of what all the stakeholders think and then assign an owner to individual issues who can determine the direction and defend their choices with research while the development team pushes ahead with the most expedient option.

## Trap 9: You didn't tell the story about the system

Your system has similar looking controls in it. All your colors are picked, icons assigned, and microinteractions mapped. You're ready to launch. But nobody cares, and thus you struggle to get it implemented in your apps. Generally, your teams understand that a design system is something you should have, and they should follow, but they're uninterested when you try to pull them into meetings on it.

### Recognizing the trap

If you don't have a solid &quot;elevator pitch&quot; for your design system that helps others in your organization understand why you need one, you probably tripped this strap.

### Disarming the trap

It's time to write a little bit. Get with your content people and come up with a snappy way of describing what a design system is and why you need it. You might even want to create a presentation around this. Definitely take what you came up with and put it into the documentation for your design system. This is usually good to put right on the homepage of it if you built it into a web site.

## Trap 10: You didn't get organizational support

Just because you embarked on a journey to create a design system doesn't mean it will ever get completed or worked into your apps. You need support from people in your organization to make it happen. Without it, you won't be given time to work on the design system and your development teams won't be encouraged to work with it if you do. In short, you're dead in the water without organizational support.

### Recognizing the trap

You'll know you've fallen into this trap if you keep hearing &quot;No&quot; when you ask for resources to build and integrate the design system.

### Disarming the trap

You've got a long road ahead of you. Start by figuring out how to communicate about your design system to the people in charge of setting the vision for your products. Then get your presentation in front of them. Engage a content person to help you communicate about your project clearly and powerfully. This is important to your organization!

If you can't get people on board quickly enough, it might be time to go rogue. Get a small group of people together to start building your design system off the grid (and off the clock). Get something scrappy stood up, and start asking for input from your other development teams. Once you've got things polished a little bit, bring what you have in front of your product managers, development managers, and executive teams. You may still need their approval to continue, but it's a lot easier for people to approve something when they can see a preview of the results.

## Conclusion

You made it! You have arrived! Your design system is perfect and you're never going to change it again. Congratulations! Give yourself a pat on the back.

Now go back to the drawing board. It's likely been a while since you started down the road of building a design system for your company. You've merely defined vocabulary. At least your teams are communicating about UI components using the same words. Never stop iterating. Test variations on your components. Update the visual style. Build a completely new app and see if the design system can still support it. Try adapting your app to another platform. All of this should be much simpler now that you've established your design system. Now go change the world. *Easy peasy.*
