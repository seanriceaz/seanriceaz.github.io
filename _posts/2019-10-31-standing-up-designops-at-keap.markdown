---
layout: post
title:  "Standing Up DesignOps At Keap"
date:   2019-10-31 00:00:00
categories: DesignOps
excerpt: DesignOps amplifies the impact of design at scale. In other words, it helps managers, directors, and executives understand and utilize all of the various things design has to offer, while helping designers collaborate and deliver work more effectively.
showcomments: false
schema_images: https://seanrice.net/media/2019/Standing-Up-Design-Ops-1-Title.png
external: https://www.designsystems.io/2019/10/31/standing-up-designops-at-keap/?ref=seanrice.net
---

_This article was originally posted on [designsystems.io](https://www.designsystems.io/2019/10/31/standing-up-designops-at-keap/?ref=seanrice.net)_

## Overview

Design Operations (DesignOps) is a relatively new focus area in design. When I discuss it with people, and I’m feeling a little cheeky, I might say, “I design how designers do design.”

Really, DesignOps is a bit more like organizational and system design. The practices that make it up have been around a long time, and generally fall under a few categories:

- **People**&mdash;Hiring the right people, training them, and helping them grow and work together
- **Process**&mdash;Aligning design teams on tools and activities to get things done
- **Product**&mdash;Measuring and evaluating the impact of design on the company’s product
That may sound a lot like management, but DesignOps is a little differently focused. DesignOps helps managers, directors, and executives understand and utilize all of the various things design has to offer, while helping designers collaborate and deliver work more effectively. In other words,

> Design ops amplifies the impact of design at scale. - Kate Kaplan of NN/G (Paraphrase)

### In this article I’ll discuss

- How DesignOps started at Keap
- Advice for those going through similar things
- Where DesignOps is headed at Keap

<figure><img src="/media/2019/Standing-Up-Design-Ops-2-Mess.jpg" alt="">
<figcaption>Photo by <a href="https://unsplash.com/@randomlies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ashim D’Silva</a> on <a href="https://unsplash.com/s/photos/mess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></figcaption>
</figure>

## The situation before DesignOps

At Keap (at the time, we were called Infusionsoft), before we had an official DesignOps role, I was volunteering time to contribute to the design system, which was created and largely led by engineers. Because of this, I was only making piecemeal updates to our shared design libraries as I was putting components into features. Adding to the problem, our team was using two tools for vector design: Figma and Sketch. And the shared libraries for each were out-of-sync.

> Our engineers were receiving inconsistent handoffs from different designers. We're still repaying the resulting design debt (and tech debt) a year later.

We needed someone to drive the consistency of the design work coming out of our product design team. That is to say, we needed to lay the foundation for a more consistent in-app experience for our users.

<figure><img src="/media/2019/Standing-Up-Design-Ops-3-starting-ALT.jpg" alt="">
<figcaption>Photo by <a href="https://unsplash.com/@randomlies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Josue Isai Ramos Figueroa</a> on <a href="https://unsplash.com/s/photos/construction?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></figcaption>
</figure>

## Early Milestones

The quickest win, we determined, was to have a designer become the “owner” of the design system. This would give developers a point of contact when trying to map design specs to design system components. This would reveal places where the design team could become more aligned.

Look for places where a smaller amount of effort will produce a noticeable change in your organization so you can nail a couple quick wins out of the gate. These areas should be areas of strength for the people on your DesignOps team.

### Design System

When standing up a DesignOps team, look for places where your teams realize they need help, and dive in. We had designers and engineers both mentioning that you could tell different teams worked on different areas of our app because of the different patterns in use. So we chose to tackle that problem first.

From the start, I aligned the design team around colors, fonts, and basic component usage by defining the standards and communicating them out at team meetings. It took awhile for everyone to get in-sync. However, since I was helping with a problem the design team self-identified, I won more and more support for the DesignOps effort.

> We went through a rebrand in early 2019, so this alignment was key to the success of our teams.

As a part of this, I designed the contribution model for both design and engineering. It’s a little more nuanced than this diagram since it doesn’t show how close the actual communication between engineering and design ops is, but it worked to convey the concept to stakeholders.

<img src="/media/2019/design-system-process.png" alt="">

### Tool Stack Selection

As standards were being set and documented, I identified a two-pronged problem resulting from the design team’s misalignment on design tools. I realized that I would be building two copies of our shared design libraries because we had two different vector design tools. Also, our engineers would need to have logins to several different tools to get design specs.

Once the issue was identified, I worked with design management to announce that designers would need to prepare to change their toolset for the following year (we agreed to evaluate again a year later). Together, we worked out the methods we would use to evaluate possible tools.

We would rate our tools based on these criteria:

- Quality of the user experience for designers
- Preference of the design team members
- Capabilities of the tools (and supporting tools/plugins)
- Community support and acceptance
- Cost

It was time to do the research. I needed to find out what members of the team were using which tools. After I found that out, I could map different tool stacks to the needs of the design team.

Design management and I determined that there were six different “jobs” our tools were doing.

- Vector UI design
- Prototype testing
- Developer handoff
- Design file sync
- Internal commenting
- Project tracking

We needed a tool stack that would help us accomplish these “jobs.” Without getting into details, our front running tool stacks were:

#### Assigning tools to jobs

| Job | Sketch-based stack | Figma-based stack |
| --- | --- | --- |
| Vector UI design | Sketch | Figma |
| Prototype testing | Invision | Invision |
| Developer handoff | Gallery.io | Figma |
| Design file sync | Abstract | Figma |
| Commenting | Gallery.io | Figma |
| Project tracking | Jira (Widely used across Keap) | Jira |

Weighing the options, we determined that both stacks would do what we needed equally well. Therefore, we polled the design team regarding their preferences and used that as a deciding factor.

Ultimately, the team chose to move forward with Sketch. The next step was to build a timeline for rolling out the change and announcing it to the team.

Together with design management, I planned and announced that we would end support for Figma. We would expect everyone to work completely in Sketch and its companion tools starting January 1 (the announcement was made in late October), and that we would re-evaluate the choice sometime in the next year.

There was some resistance to the change here. However, aligning on a single tool stack allowed us to move much faster in rolling out our design system libraries. It also enabled me to write and record several how-to documents and videos to help our design team on how we use the tools together.

<figure><img src="/media/2019/Standing-Up-Design-Ops-4-Organized.jpg" alt="">
<figcaption>
Photo by <a href="https://unsplash.com/@barnimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Barn Images</a> on <a href="https://unsplash.com/s/photos/toolbox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
</figcaption>
</figure>

## Gaining Momentum with DesignOps

Beginning in the new year, after I had really established our design system and our tool stack was in use by the entire design team, I needed to find more ways DesignOps could have an impact.

### Design playbook

One problem I identified was that our design team wasn’t consistently participating in essential design and research activities. This is a two-pronged problem. One was that non-designers weren’t aware of the “ideal” design process and all the things that designers can contribute to the product conversation. The other was that designers were commonly skipping steps in order to move faster, at the cost of more thoughtful designs, which conversely, resulted in re-work and longer timelines.

#### Design process alignment

<figure class="img-right"><img width="266" src="/media/2019/Design-process.png" alt="">
</figure>

To create our playbook, we needed to align on what “phases” our design process has in it. We settled on a modified “Design Thinking” framework:

- Discover
- Define
- Ideate
- Prototype
- Test
- Build

I conducted a workshop to draw out the different activities and workshops our designers facilitate at during our process. Each designer has one or more activities where they are the official subject matter expert. This means that other designers looking to learn can lean on them for advice and the team can use them as a resource for facilitating these workshops where applicable. These subject matter experts are also responsible for the content in the playbook for that activity.

#### A place for our documentation

All that content I generated for how to use our tool stack, our process, conventions and other documentation needed a place to live. The Playbook was the perfect spot for it.

### Hiring and onboarding design

Creating the playbook revealed a gap in our hiring and onboarding process. Our recruiters were doing an amazing job representing the company, but our product design organization was not clearly represented. We wanted a world-class experience for our designer candidates and new hires that would give them a better understanding from the very beginning about where they would be working. The playbook provided a solid foundation, but it was only one piece of the experience, and at the time, would only help once the candidate had been hired.

#### Laying foundations

<ul class="gallery">
<li>{% include galleryitem.html thumb="/media/2019/Associate-Product-Designer-1-thumb.png" full="/media/2019/Associate-Product-Designer-1.png" %}</li>
<li>{% include galleryitem.html thumb="/media/2019/Associate-Product-Designer-2-thumb.png" full="/media/2019/Associate-Product-Designer-2.png" %}</li>
<li>{% include galleryitem.html thumb="/media/2019/Associate-Travelling-thumb.png" full="/media/2019/Associate-Travelling.png" %}</li>
</ul>

In order to find out where our product design team could improve our interview process, I conducted workshops designed to create empathy for our design candidates and map their journey through hiring. This gave our recruiters, hiring managers, and designers an opportunity to expose where we could anticipate the needs of our candidates instead of reactively respond to needs as they arose.

We want to enable our candidates to feel comfortable and prepared when interviewing with us. The mantra I adopted for this project was “No surprises.” We imagined ourselves at different points in the hiring process. As a result, we identified with the uncertainty candidates feel when landing in an unfamiliar airport, being driven to an unfamiliar place, and walking into an unfamiliar building.

> Our culture at Keap is warm and inviting, but all the friendliness of our Masters of First Impressions at the front desk could be lost on somebody who is, for example, embarrassed to have been dropped off at the wrong entrance.

#### Outcomes

I designed some handouts to send to our candidates regarding the interview process and what to expect during an on-site interview day. The handouts clarify as many details as possible. That way, our candidates won’t need to guess who will greet them at the door, what to wear, or who will cover certain expenses.

I rapidly iterated on the design based on a tight feedback loop with our hiring team. Together, we tested several versions of these handouts and gathered feedback on them from our interview participants.

<ul class="gallery">
<li>{% include galleryitem.html thumb="/media/2019/interview-booklet-1-Cover-thumb.png" full="/media/2019/interview-booklet-1-Cover.png" %}</li>
<li>{% include galleryitem.html thumb="/media/2019/interview-booklet-3-Timeline-thumb.png" full="/media/2019/interview-booklet-3-Timeline.png" %}</li>
<li>{% include galleryitem.html thumb="/media/2019/interview-booklet-4-Helpful-Info-thumb.png" full="/media/2019/interview-booklet-4-Helpful-Info.png" %}</li>
</ul>

In the end, I made a digital booklet that looked and worked great with on-brand graphics, well-written content, custom maps, and embedded links. This made it easy for candidates to find us or reach out for help using their mobile phone. Because it needed to work this way, we chose PDF format for its flexible portability even without an internet connection. Further, the visual character of the document could clearly display the quality and thoughtfulness of the work we do at Keap beyond what a simple text-based or HTML email can do.

<figure><img src="/media/2019/Standing-Up-Design-Ops-5-Rocket.jpg" alt="">
<figcaption>Photo by <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">SpaceX</a> on <a href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></figcaption>
</figure>

## Where DesignOps is now

Among the design and engineering teams, sentiment about DesignOps and the Design System has improved. Designers that were detractors in the beginning are now pushing others to integrate the design system more effectively while contributing back in meaningful ways.

The Design System kit our engineers use is now aligned with what designers create. We treat it as a product, so it has a dedicated engineer in addition to our community support system. As a result, we are able to evolve and adapt the system much more quickly than before.

### Setting the example

At the time of this writing, DesignOps at Keap is driving or consulting on the creation of playbooks and microsites for other disciplines in the Product Development department (about ¼ of the company) as well as some cross-department initiatives. Soon, we’ll have an intranet designed to help everyone within the Product team understand the way all the different disciplines work. Because of this, we’ll be able to design better ways to work together.

### Revisiting previous decisions

Following up on our design tool stack work from last year, we are researching how effective our current stack is and whether making a change could improve the experience for designers and engineers.

## Where DesignOps is going

DesignOps at Keap is working to amplify the impact of design at the scale of our entire company. Right now, DesignOps is really only affecting Product. There are several other aspects of Keap that can benefit from design thinking exercises and alignment on processes. For example, our Customer Experience and Marketing teams have similar needs as our product design team.

In the near future, we’ll work on building tools around our design system to increase the alignment between design and engineering. As a result, we’ll increase usability, application of code standards, and the speed at which we build prototypes.

Another goal of DesignOps at Keap is to spread knowledge to our community. So, expect to see more Keapers (Keap employees) at local and regional gatherings in the near future.

## Conclusion

It’s a good time to be involved in DesignOps. As Keap grows, there are more and more ways DesignOps can amplify the impact of design. I started with aligning the team around design patterns and tools, and continued with alignment around design processes and innovating on our hiring process. DesignOps has a bright future at large as digital experience design continues to evolve and mature.