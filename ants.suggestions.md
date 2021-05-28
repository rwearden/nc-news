# Robert Wearden - FE Feedback (28/05/2021)

​

## README - write your own and make sure that it:

​

- [✓] has a link to the deployed version
- [✓] provides general info about your app
- [✓] includes links to your back end repo
- [✓] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [✓] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
  ​

## UX

​

- [✓] Responsive design: @600px wide, the article cards become very narrow
- [✓] Responsive design: Below 600px wide, the nav text wraps and makes the nav cover the title
- [✓] Clear the comment input once comment has successfully been posted
- [ ] Plain button looks a bit out of place with all the lovely Material UI styles going on
- [ ] Posts / Deletions give user indication of loading (can be done by disabling button & styling)
- [✓?] Make sure vote buttons are accessible for people using screen readers - ADDED ALT PROP TO BUTTONS
- [?] Sometimes two loading indicators appear at once
- [ ] Could you make a reuseable loading component that looks pretty? Maybe Material UI comes with one?
- [✓] Typo in order dropdown: "Ascdening" -> "Ascending"
  ​

## Functionality

​

### Login

​

- [?] Give some indication of who is logged in
- [ ] If time, allow people to switch user
      ​

### Individual Article (Review) / Comments

​

- [??? DOES BACKEND ALLOW THIS? ADD IT!] Can only delete comments of logged in user
- [ ] Deleted comments don’t re-appear on re-render/refresh
      ​

## Error Handling

​

- [ ] Bad url - show not found page (check `react-router` docs for ways to do this)
- [ ] Bad topic slug in url - display error to user
- [ ] Bad article id in url - display error to user
      ​

## Code

​

- [ ] Delete any unused variables (e.g. willMatchTopics)
- [ ] Seems like topics could be stored lower down the component tree?
- [ ] Handle errors in individual components, rather than at top level
- [ ] Get rid of any linting warnings from terminal
- [✓] Don't need curly braces to use string literals in jsx:
  ​

```
// path={'/articles/topics/:topic'}
path="/articles/topics/:topic"
```

​

- [?] I recommend changing the routing slightly to represent the hierarchy of things. You could even use `/smh/cooking` etc.
- [✓] Can destructure on one line if you don't need a full object:
  ​

```
// const params = useParams();
// const { topic } = params;
​
const { topic } = useParams();
```

​

- [ ] `/articles/:id` on back end is giving you an array, which you have to work around on the front end. Best to fix this if possible.
- [ ] Remove `console.log`s / comments
- [ ] remove unnecessary files (e.g. old logo.svg)
      ​

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

​

### Additional functionality:

​

- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles
