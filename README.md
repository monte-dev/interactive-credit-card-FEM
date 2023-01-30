# Frontend Mentor - Interactive card details form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
*

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![desktop solution](/images/desktop-solution.png)
![mobile solution](/images/mobile-solution.png)



### Links

- Solution URL: [solution on FEM](https://www.frontendmentor.io/solutions/interactive-credit-card-form-uNIuydbifE)
- Live Site URL: [live site](https://monte-dev.github.io/interactive-credit-card-FEM/)
- Github Repo: [github repo](https://github.com/monte-dev/interactive-credit-card-FEM)

## My process

For this small project I have started out by positioning left (cards) and right (form) sections. This gave me an opportunity to extensively practice css position property. I then proceeded to design the form and cards looks to get them as close to original solution.

For javascript form validation, I have researched numerous options to achieve this. I decided to use 
```
event.code >= "Digit0"
```
method as this was the only one I found not to be deprecated.
I used switch statement for error handling which allowed me to write code that was easier to read.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript form inputs validation


### What I learned

I am quite happy with progress in my javascript code. I focused on dividing code into blocks and understanding scopes a bit more. I also worked more with functions and calling them out.



### Continued development

When working on next project with form validation I will focus on storing input data, and security around it.

### Useful resources

- [window.location](https://stackoverflow.com/questions/12564999/onclick-page-go-to-homepage-without-any-absolute-path) - go to url onclick in javascript



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

