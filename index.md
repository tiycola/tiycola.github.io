---
title: Welcome
layout: default
category: static
---

## Welcome!

{% if site.instructor_photo %}
  <img alt='{{site.instructor_name}}' src='{{site.instructor_photo}}' class='instructor'>
{% endif %}
Hello! My name is {{site.instructor_name}} and I will be your {{site.project_name}} instructor.  I hope you are as excited as I am about getting this class started. It is in the best interest of everyone to make sure you as prepared as possible for the coming twelve weeks. Through large amounts of hard work and determination, you will learn, grow, and achieve.

Remember, we are all in this together. We will have individual assignments and group assignments. Always be willing and ready to help your peers.

Thank you for your commitment and hard work! It will be rewarded.

**There are quite a few tasks and topics that are necessary to take care of before we can actually start learning how to be a developer.** Rather than using class time to get through these, I expect that you can accomplish and learn these things without assistance so that we can spend class time only on those things that are difficult to learn on your own. If you have any questions or confusion about these tasks, please [email me](mailto:{{site.instructor_email}}) so I can help you work through them.

## Objectives

The following are the learning objectives for this prework, all of which are important requirements expected of a professional developer. Though they are not technically "programming" skills, they are crucially important to success both during the class and on the job.

1. Be able to communicate technical accomplishments and struggles.
2. Be able to learn in contexts that aren't necessarily suited to your primary learning style.
3. Adapt to the workflows used by professional developers (using the command line in particular).
4. Describe the importance of mindset on learning and be able to analyze one's own type of mindset.

## What's Next?

Please spend some time reviewing our class policies, and then begin some of the initial prework. These are not short tasks, so please leave yourself lots of time for the entire process. Each step will have some time estimates included so that you can leave yourself enough time on any given day to complete that step.

{% assign sorted_sections = site.sections | where:"order",1 %}
{% if sorted_sections.first %}
  <div class='cta'>
    <a href='{{site.baseurl}}{{sorted_sections.first.url}}' class='btn'>Begin</a>
  </div>
{% endif %}
