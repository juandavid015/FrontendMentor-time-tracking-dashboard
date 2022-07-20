# Frontend Mentor - Time tracking dashboard solution

Note: if anyone reads this, please excuse my English. I am learning as I write this.

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./src/design/Desktop%20result.png)


### Links

- Live Site URL: [Vercel](https://frontend-mentor-time-tracking-dashboard-nine.vercel.app/)

## My process

### Built with

- HTML
- CSS, grid, flexbox
- Javascript, fetch.
- [React](https://reactjs.org/) - JS library


### What I learned

This work end up a bit messy, i still have problem with pre-structuring and don't have clearence on how
compact the layout or the design. CSS.

I started thinking only in the desktop design and didn't preview how it will affect the mobile design because of the sizes. Finally, i tried to correct some points, changing the sizes of all the text parts using "em" as reference. In that manner it change the maining containers and its font size, so big part of the text adjust when get smaller. This allows me correcting some issues, but not all. In the media query i corrected from changing every content an its font sizes, because was a big difference and it wasn't rendering proportionally.

In the part of "React" or working with components, practicing with this makes me understand a little, the ability to recycle components and how useful it can be with large applications. Essentially, I wrote a lot of code for this, more than I would if I did it with just html and javascript, but I understood more of what I was doing and it makes it easier for me to know what's next just by structuring what the components are going to be and their purpose from the start. Also using the same functions for different parts of the App makes it worth if i want to add more similar components to it or change some functionality. 

```js
<div className="daily-container timecards-grid">
        
            {day.map(activity => {
                return(
                <TimeCard 
                    title = {activity.title}
                    current = {activity.timeframes.current}
                    previous = {activity.timeframes.previous}
                    key = {activity.title}
                />
                )
            })}
```

At some point I considered using redux to have a global state and maybe I could extract from the global state only the part I wanted, instead I assigned each part and sent it to each component... I still don't know if it can be done in a better way way without even the redux part. 

Map for each one doesn't seems pretty good considering the data fetched can be so much bigger.

```js
<div className="daily-container timecards-grid">
        
            ...
            .then(data =>  {
        
        let daily = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.daily};
          
        })
        let weekly = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.weekly};
          
        })
        let monthly = data.map(time => {
          return {title: time.title, timeframes: time.timeframes.monthly};
          
        })
        setData({daily: daily, weekly: weekly, monthly: monthly});
        return(daily, monthly, weekly)
      }); 
      ...
```

React was definitely fun, especially when it let you see more clearly the purpose of each part of the app and its flow.


### Continued development

I will practice more with javascript since it allows me to have more flexibility with some specific things like sending the obtained data and finding better solutions as the case when I mapped the analyzed data three times. Maybe redux is a solution. I'm going to check.


## Author

- Frontend Mentor - [juandavid015](https://www.frontendmentor.io/profile/juandavid015)
