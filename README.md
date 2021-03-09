# Work Day Scheduler

This week I created a daily planner that could store plans during working hours of the current day. These plans will persist even after the user closes the page, even if they are changed. The hour blocks change colors based on the past, present, and future to help the user further keep track of their day. I also included a button to update the time so the user does not have to refresh the page to refresh the time. Included are the criteria which I followed:

https://zchalk.github.io/dailyPlanner/

![my site](assets/images/me.png)


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
