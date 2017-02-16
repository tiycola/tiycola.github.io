---
title: Final Survey
layout: default
category: static
---

## Final Survey

<form class='final-survey' action='//formspree.io/{{site.instructor_email}}' method='post'>

  <p>
    Please fill out this survey to show us what you've learned so far! Please make sure you read each of our policy and prework sections, and that you mark them as "Complete" with the buttons at the top of each page!
  </p>

  <div class='form-group'>
    <label>
      Your Name:
      <input type='text' class='student-name medium' name='student-name' required>
    </label>
  </div>

  <div class='form-group'>
    <label>
      Your GitHub ID:
      <input type='text' class='medium' name='github-id' required autofocus>
    </label>
  </div>

  <div class='form-group'>
    <label>
      Write a little HTML to create a list of 3 navigation links. Be sure to use the proper semantic tags!
      <textarea name='html-example' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      Write a CSS selector to find all &lt;span> HTML elements with a class of "tagline" which are also inside of an &lt;h3> element.
      <input type='text' name='css-selector-example' class='block' required>
    </label>
  </div>

  <div class='form-group'>
    <label>
      Write a CSS declaration that would make a thin, blue line around an element.
      <input type='text' name='css-delcaration-example' class='block' required>
    </label>
  </div>

  <div class='form-group'>
    <label>
      What is program "Control Flow"? What are some examples of code elements that implement flow?
      <textarea name='what-is-control-flow' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      What are the differences between an Array and an Object in JavaScript?
      <textarea name='array-vs-object' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      How do we pass data into a function in JavaScript? How do we get data out of a function?
      <textarea name='js-functions' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      What is "git" and why do we use it?
      <textarea name='what-is-git' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      What two commands do we use within git to add a file to our repository? What if we wanted to send that file to a remote repository like on GitHub?
      <textarea name='git-commands' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <p>
      Write a set of terminal commands which accomplish the following (in this order) and type those commands in the area below.
    </p>
    <ol>
      <li>change directory to your home directory;</li>
      <li>list the contents of your home directory;</li>
      <li>make a new directory called "tiy" inside your home directory;</li>
      <li>change into the "tiy" directory;</li>
      <li>create a blank file inside the "tiy" directory called "test.txt";</li>
      <li>copy the "test.txt" file inside the same directory with a name of "test-two.txt" (do NOT recreate it, COPY it);</li>
      <li>remove both the "test.txt" and "test-two.txt" files from the "tiy directory"</li>
    </ol>
    <label>
      Your commands:
      <textarea name='cli-practice' style='height:10em;' required></textarea>
    </label>
  </div>

  <div class='form-group'>
    <label>
      Which part of the prework did you like the MOST?
      <textarea name='prework-best' required></textarea>
    </label>
  </div>
  <div class='form-group'>
    <label>
      Which part of the prework did you like the LEAST?
      <textarea name='prework-worst' required></textarea>
    </label>
  </div>

  <div class='cta'>
    <input type='hidden' name='_subject' value='Onboarding Survey - {{site.project_name}}' />
    <input type='submit' class='btn' value='Submit Information'>
  </div>
</form>
