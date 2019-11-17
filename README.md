# TS Contributors React App
## Overview
Super basic app, it accesses the Github API, it then fetches users and populates the app with it. You can search for people and some other features will be added, but it's going to be a quick, simple, React app.

There will not be tests, and this app will be made with plain JavaScript, so no TypeScript.

## Roadmap
### Overview
Since this project is a quicky, the roadmap is super straight-forwards. This is mostly for posterity

### Version 1
- App needs to:
  - render a list of contributors
  - offer links to their Github profile
  - offer the ability to add tags to each user
  - fetch starred repos for a user on click of the expand button
  - offer the ability to search for a user by user name
  - offer the ability to search by tag
- App will be deployed via Github Pages

### Future Releases
- App might:
  - route to a new page showing more user info when you click on the user card heading
  - allow the user to search/ filter by number of contributions or stuff like that

## Endpoints to hit
- [one](api.github.com/repos/microsoft/typescript/contributors)
- [two](api.github.com/users/:username/starred)

## Things to reference
- [API TOS](help.github.com/en/github/site-policy/github-terms-of-sertice#h-api-terms)