---
title: Computer
layout: default
category: prework
order: 7
---

## Computer Setup <time class='estimate'>3-6 hours</time>

### Hardware

All students must bring their own MacBook laptop. Your MacBook should have a minimum of 4 GB of RAM and 128 GB of hard drive space. Those are minimum specs, but I **strongly** recommend getting 8 GB of RAM.

Here are the current [MacBook Air models](http://www.apple.com/macbook-air/specs.html) and [MacBook Pro models](http://www.apple.com/macbook-pro/specs-retina/). Your MacBook MUST be running macOS **Sierra** which is a free upgrade from the mac AppStore.

Do not go with the new, skinny 12" Retina MacBooks. Their processor will be too sluggish in a year or two.

### Operating System

You'll need to install macOS Sierra if your Mac didn't have it pre-installed or you haven't upgraded already.

1. Download the macOS Sierra upgrade from the Apple Store: [download here](https://itunes.apple.com/us/app/macos-sierra/id1127487414?mt=12).
2.  You'll need to sign in to your Mac's 'App Store' with your [Apple ID](https://appleid.apple.com/).
3.  Double-click "Install macOS Sierra" to begin installation.  
*WARNING*: The macOS upgrade can take a bit of time to complete and will require a restart. Plan on doing this in the evening or over a lunch break.

> **Note: macOS Sierra is still relatively new. If you are on El Capitan, the last major version, then you should be fine.**

### Additional Software

_There is no commercial software required for the class._ However, there are many open source software requirements.

As soon as possible after receiving your Mac, run through the following steps. If you've done a lot of your own configuration, some of these steps may have to change. If you run into **any problems**, send me an e-mail at: [{{site.instructor_email}}](mailto:{{ site.instructor_email }}) and I will try to help.

#### Install a code editor (Atom)

You will need a program specifically designed for software development. We typically call this an IDE (an Integrated Development Environment). We recommend using the Atom editor which is made by GitHub.

Atom is not necessarily the best editor, but it has great defaults. If you are already using an editor and are comfortable with it then you may continue to use it. However, there may be times in class when I suggest a shortcut or editor configuration option that may be different for you! Good alternatives include: Sublime Text, Textmate, and MacVim.

To install Atom:

  1. Download Atom from [the Atom website](https://atom.io/).
  1. Install it. If you're not familiar with Mac installations, [read more here](http://www.howtogeek.com/177619/how-to-install-applications-on-a-mac-everything-you-need-to-know/).
  1. Start Atom from your Applications folder.
  1. Click on the "Atom" option in your menu bar (all the way in the upper-left of your screen) and choose "Install Shell Commands."

#### Install Google Chrome

While the end users of our applications will use a variety of browsers, I have found that Google Chrome is currently the best option for developing (and testing) our front end applications.

  1. Download Chrome from [the Chrome download page](https://www.google.com/intl/en/chrome/browser/).
  1. Install and run it.
  1. Optionally, you may want to set Chrome as your [default browser](https://support.google.com/chrome/answer/95417?hl=en).

#### Install iTerm2

The terminal is our text-based interface into the computer. It is much more powerful than graphical user interfaces (GUI's) generally and will be more efficient for us in the long run. MacOS comes with a terminal built in, but many people prefer a program called iTerm2.

  1. Download iTerm2 from [the iTerm2 website](https://www.iterm2.com/downloads.html)
  1. Unzip the downloaded file by double-clicking on it.
  1. Open your Applications directory by clicking on the Finder and selecting it from the left sidebar.
  1. Drag the unzipped iTerm application into the Applications folder.

#### Install Homebrew

Homebrew will make it easier for us to install other applications we will need during class.

  1. Open up the iTerm2 application you installed previously.
  1. Go to this site: http://brew.sh/ and copy & paste the install command into your terminal (it should be the first thing on that page(

#### Install Node.js

Node.js is a technology we will use many times in class. You will learn more about it later.

  1. Open up the iTerm2 application
  1. Run:  
  `brew install nodejs`
  1. Run:  
  `node -v` to see that you have Node.js installed (you should see a version number print out)

#### Install git

  1. Open up the iTerm2 application
  1. Run:  
  `brew install git`
  1. Run:  
  `git --version` to see that you have it installed (you should see a version number print out)
  1. Run:  
  `git config --global push.default simple`
  1. Run:  
  `git config --global credential.helper osxkeychain`

You may want to [add the following applications to your Dock](https://support.apple.com/en-us/HT201730) since we will use them regularly.

  * Atom
  * Chrome
  * iTerm2
