---
layout: post
title:  "UX Patterns for Adding To Cart"
date:   2013-09-19 00:00:00
categories: user-experience patterns cart ecommerce conversion funnel
excerpt: Any time a customer wants to buy something, they need to add it to their cart. But what happens when the user clicks that magical button?
#external: https://uxpatterns.org/ecommerce/adding-to-cart/
redirect_from: "/ecommerce/adding-to-cart/"

---
_This article was originally posted on uxpatterns.org, which now redirects here._
<!-- This article was originally posted on uxpatterns.org. [Original Article Link](https://uxpatterns.org/ecommerce/adding-to-cart/)-->

<img class="img-right" src="/media/2013/08/threadless.png" alt="Screenshot of large add to cart button">

Any time a customer wants to buy something, they need to add it to their cart. But what happens when the user clicks that magical button? I sought out several options and have laid them out for you. Most of the sites I checked used one of two strategies for confirming something was added to the shopping cart.

## Keep Customers on the Page

Usually paired up with some related items the customer could buy, I found most online retailers used some sort of inline confirmation that something was added to the cart. Often, this was an overlay of some sort, but Walmart stands out here for actually moving the page content down to make way for a confirmation message and related products.

This helps the user retain the knowledge of where they are in the site and encourages additional purchases.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/ThreadlessCart-300x232.png" full="/media/2013/08/ThreadlessCart.png" caption="Threadless has a cute cart character and a confirmation overlay" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/autozone-300x122.png" full="/media/2013/08/autozone.png" caption="Autozone uses s simple confirmation message" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/walmart2-300x182.png" full="/media/2013/08/walmart2.png" caption="On the product detail page, Walmart pushes the details down to make way for confirmation and related items." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/walmart-283x300.png" full="/media/2013/08/walmart.png" caption="On a product list page, Walmart drops the cart down when something is added to it." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/jcpenney-300x211.png" full="/media/2013/08/jcpenney.png" caption="JCP causes their cart to drop down when something is added." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/gap.png" full="/media/2013/08/gap.png" caption="Gap uses a dropdown cart that appears when something is added." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/dillards-300x130.png" full="/media/2013/08/dillards.png" caption="Dillards shows us its shopping cart in a modal with too much empty space." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/bestbuy-294x300.png" full="/media/2013/08/bestbuy.png" caption="Bestbuy gives a confirmation overlay with some add-on products." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/target-300x264.png" full="/media/2013/08/target.png" caption="Target handles adding to cart with a confirmation and related items in an overlay." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/Screenshot_2013-08-29-21-17-55-168x300.png" full="/media/2013/08/Screenshot_2013-08-29-21-17-55.png" caption="Amazon.Com's mobile app keeps it simple." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/lowes-300x293.png" full="/media/2013/08/lowes.png" caption="Lowes gives us a simple add to cart overlay" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/homedepot-300x270.png" full="/media/2013/08/homedepot.png" caption="Home Depot has an add-to-cart dialog packed with related items." %}</li>
</ul>

## Straight to Cart

A second option in wide use is to take the user straight to the cart page after adding to cart. This may decrease abandonment rates (anyone have data to back this up?), but takes the user out of the context of shopping for items and places them at the checkout. If they intend to buy more than one item, they may have to retrace their steps a little.

This option may work well if your site sells expensive items or your customers typically only buy one item at a time.

<ul class="gallery">
  <li>{% include galleryitem.html thumb="/media/2013/08/amazon-300x124.png" full="/media/2013/08/amazon.png" caption="Amazon drops users straight into their cart, but related items are everywhere." %}</li>  
  <li>{% include galleryitem.html thumb="/media/2013/08/apple-straighttocart-300x145.png" full="/media/2013/08/apple-straighttocart.png" caption="Apple sends customers straight to the cart" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/dell-straighttocart-300x138.png" full="/media/2013/08/dell-straighttocart.png" caption="Dell, after making users run a gauntlet of upsells, mercifully drops users on the cart page" %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/newegg-newpage-300x138.png" full="/media/2013/08/newegg-newpage.png" caption="Newegg drops the user on a confirmation page for upselling." %}</li>
  <li>{% include galleryitem.html thumb="/media/2013/08/thinkgeek-300x142.png" full="/media/2013/08/thinkgeek.png" caption="Think Geek plops people who added to cart on the cart page." %}</li>  
</ul>

## Breaking the mold

<div class="img-right">
{% include galleryitem.html thumb="/media/2013/08/icondock-205x300.png" full="/media/2013/08/icondock.png" %}
</div>

A couple of patterns are out there that are different than the standard UX designs above. Firstly, [Amazon.com](https://www.amazon.com) pioneered ([and patented](https://en.wikipedia.org/wiki/1-Click)) one-click purchases which allow you to skip the cart altogether, provided you already have an account set up for it. Also, [icondock](https://icondock.com/) uses a drag-and drop cart that forgoes the add to cart button and everything with it in favor of a side box that acts like the cart. This works for them because of the simple nature of their products.

## Summary

On sites selling fewer items, or higher-priced, but customized items, it may make sense to just kick the user straight to the cart/checkout page, in an attempt to avoid cart abandonment. However, as we see on sites with a larger breadth of items, perhaps a one-item purchase isn’t as desirable, so upselling must take place to increase average order value at the risk of higher abandonment rates.

## Similar article

[UX FTW: What Happens When You Add an Item to Your Cart?](https://www.aidanbryant.com/post/37053391376/ux-ftw-what-happens-when-you-add-an-item-to-your-cart)
