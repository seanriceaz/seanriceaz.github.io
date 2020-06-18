---
layout: post
title:  "I told our designers their Sketch files were full of trash—Here’s what happened"
date:   2020-06-17 00:00:00
categories: DesignOps Sketch
excerpt: In this article, I discuss how I brought the team around to cleaning up their Sketch files, and the results the team achieved form teh effort
showcomments: true
schema_images: https://seanrice.net/media/2020/Cleaning-Up-Our-Sketch-Files.jpg
---

In this article, I’ll explain how I got to the point of telling [Keap](https://www.keap.com)’s design team that their Sketch files were full of trash—In reality, I compared them to a hoarder’s collection of empty pizza boxes—and how I brought the team around to taking positive action about it. I’ll walk through the cleanup process. And I’ll discuss the results of the whole enterprise (Spoiler: They were quite positive).

## I led our design team on a two-day “Sketch Spring Cleaning” journey.

Our design team dedicated two full days to cleaning up our Sketch files and Abstract projects. The result was:

- Reduced file size by 47%
- Archived 61 files (41% of our files)
- Archived 8 projects
- Removed 435,322 layers (61% of our layers)
- Nearly doubled Design System coverage - from 25% to 44%.

I surveyed the team afterward. Here’s how they felt about the experience:

- Half of designers thought that the exercise was a good use of their time. The other half had a more tepid (but not negative) response.
- 63% of the team said they would do the work again, given the choice.
- 75% felt that they weren’t done after the two days (half of those felt strongly about this)

A small amount of negative sentiment and comments were about the timing of the two days. I planned this working session with other design leaders to minimize impact. Some designers had unanticipated setbacks in their normal project work that made the cleanup effort inconvenient.

The results were undeniably positive. I’ll rewind a bit and discuss how I got here.

## Measuring Design Debt

### Design System Coverage

After building [Sleuth](/designops/sketch/2020/01/24/introducing-sleuth-for-sketch.html), I began tracking our Design System’s usage on a monthly basis. I noticed a gradual increase in coverage, but it was taking longer than I had planned. After some investigation, I found these issues to be the root causes for the slow improvement in the Sleuth measurement:

- Several large, old projects didn’t use our Design System
- Some current projects had old designs in them that didn’t use our Design System
- A gap in knowledge around using our Design System in Sketch

### Performance issues with Abstract

In a typical week, I received at least one complaint from designers per week about Abstract, our Sketch version control tool, being slow to sync. Upon further inspection, I surmised that this poor performance was due to:

- Large file size
- Presence of large screenshots and other raster imagery in files
- A large number of layers in some files and some projects

### Difficulty sharing projects

Having helped other designers on their projects from time to time, I noticed that few of our designers had built their files to help someone else to ramp up and work in them.

- Few layers at the “root” of pages were grouped or named helpfully
- Old mockups were mixed with current ones
- Page and artboard naming conventions were inconsistently applied

## Convincing Leadership

The next step was to convince leadership of the need to “pay back” some of our design debt. Fortunately, the product team at large was on a mission to take care of tech debt in our apps. Fortunately, design debt and tech debt are very similar. Both:

- Are the result of rapid innovation
- Require a dedicated cross-team effort to resolve
- Prevent our teams from continuing to rapidly innovate over time

Based on the overall sentiment of our product team against tech debt and the data points I was able to provide, it was straightforward to propose and schedule my two-day all-designers-on-deck cleaning effort.

## Delivering the message to designers

Nobody wants to hear that some of their creative work needs to be archived, refactored, or otherwise cleaned up. Imagine, as a child, your parent coming into your room, and instead of seeing your masterpiece of a block tower, they immediately mention the mess you’ve made of the blocks on the floor. Naturally, I wanted to avoid that sentiment.

Instead of mentioning all the things that were broken and wrong currently, I spoke of the value of the effort. Together, we’d

- Make our work in Abstract faster
- Make it easier to share our work with each other
- Better prepare our designs for import into another tool (Figma)

It was important to relieve the team of blame or guilt. I pointed out some issues even in my own work. The way to frame the “mess” we made was to point out that everyone makes a mess when they’re in high productivity. It’s completely natural—even a good thing.

But we had left the mess lying around for a little too long. This is when I jokingly compared our old designs still present in our files to a hoarder’s collection of empty pizza boxes. The team was laughing along with me. It was time to clean house. And all of us needed to do it.

## Go time

The day before the cleanup day, I took a baseline measurement. I downloaded all our files from Abstract and measured their sizes. I ran a [Sleuth](/designops/sketch/2020/01/24/introducing-sleuth-for-sketch.html) report. I constructed a spreadsheet to attribute these measurements and projects to individual designers for giving accolades later.

The first day of our cleanup effort came. I had broken up the two days into 4 themes to keep us focused.

1. Archive the old
2. Naming and grouping
3. Symbols
4. Layer Styles

I gave a quick, lighthearted presentation to kick it off. We met each morning and afternoon to discuss the focus area for the next few hours. The goal was to teach the techniques a little bit at a time so the team didn’t feel overwhelmed. The whole time, I emphasized my availability to help. I had a couple of designers reach out for one-on-one help throughout the effort. In the end, I was able to give a little direction and encouragement as well as help out in a couple of other designers’ projects.

After we were done, I took another measurement and calculated the changes in our spreadsheet. It was time to celebrate.

## Wrapping up

During a team meeting the following week, I gave a short presentation to the team about what we had accomplished together. I also highlighted the individual contributions from our designers. In some cases, we had a light banter about some negative-seeming metrics. These were mostly due to quirks in how the numbers were calculated, so we had a good laugh about it. I chose to highlight the top 3 in each category because one designer (who had by far the most to clean up) would have otherwise won nearly every category.

Here are the “awards” I used to highlight our individual designers:
- The Archivists (most archived projects)
- Filing Clerks (Most files archived)
- Pizza Delivery! (Most files added)
- Honey, I Shrunk the Files! (Biggest file size reduction)
- Costco Size-It (file size increases)
- Flaky, Layered Biscuits (layer reduction)
- Under Cover Operatives (Coverage percentage)
- Uhmmm… (Design System Coverage Reduction) <i>I won this distinguished anti-award due to the above-mentioned quirks, which gave everyone a good laugh.</i>
- Purple Artboard Eater (Old-branding artboards removed)

## Resources

Here are anonymized versions of the files I used to for this effort. I hope they’re helpful for you.

- [“Spring Cleaning Daze” - Presentation (PDF)](/media/2020/Spring_Cleaning_Daze-Anonymized.pdf)
- [“Spring Cleaning Daze” - Tracking Spreadsheet](/media/2020/Spring_Cleaning_Daze-Anonymized.xlsx)
- ["Spring Cleaning Daze" - Survey](https://forms.gle/bV7GWFzAs5PAQsa79)
