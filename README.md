# CS 98 Hack-a-thing 2
## Joseph Notis, Fall 2020

### What I attempted to build

I built a Chrome extension that follows the ["Getting Started" tutorial from Google](https://developer.chrome.com/extensions/getstarted). 
This extension takes a webpage from developer.chrome.com and changes it to either green, blue, yellow, or red based on the user's setting.

After completing the Getting Started tutorial, I built an extension that counts how many pages are loaded for a specific host URL. The user can choose the host in the extension's options and reset the counter.

### Who did what

I worked on this hack-a-thing alone.

### What I learned

In the Getting Started Tutorial, I learned about the parts the make up a chrome extension an the basics of how to make one. The tutorial and general [overview](https://developer.chrome.com/extensions/overview) also explained the different ways an extension interacts with the browser and webpages and the core APIs made by Google for extensions.

When building the load counter, I learned more about how Chrome extensions can interact with the sites themselves and what the sites do that users might not always see.

### How does this hack-a-thing inspire you or relate to your possible project ideas?

My group is looking into building a Chrome extension that analyzes what data is collected on social media. This tutorial provides me with the basic framework of how a chrome extension works. In this hack-a-thing, I started to look at how I can use chrome extensions to read webpage activity.

### What didn’t work

I was able to get everyting properly functioning, it did take a lot more reading and debugging than I expected. Google is very specific about exactly what you can and cannot do with a Chrome extension, so I had to make sure my project didn't try to use more than what was provided.

### How to see what I built

To see the load counter:
* git clone this repo
* follow the guide below to install in Chrome

To see the ["Getting Started" tutorial from Google](https://developer.chrome.com/extensions/getstarted):
* `git clone` this repo
* `git checkout getting-started-tutorial`
* follow the guide below to install in Chrome

To install the extension in Chrome (or a Chromium-based browser such as Brave):
* Go to chrome://extensions/ and turn on Developer Mode (top right corner of the page)
* On the top left, click on "Load Unpacked"
* Open the extension folder

### Resources

* ["Getting Started" tutorial from Google](https://developer.chrome.com/extensions/getstarted)
* [General overview of a Chrome extension](https://developer.chrome.com/extensions/overview)
* [Chrome Extension API Documentation](https://developer.chrome.com/extensions/runtime)
* [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
* [Medium blog on how to create a Chrome extension](https://medium.com/coding-in-simple-english/how-to-create-chrome-extension-7dd396e884ef)
* [Article on how to make a Chrome extension](https://thoughtbot.com/blog/how-to-make-a-chrome-extension)