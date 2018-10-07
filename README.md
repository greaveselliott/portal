# Portal project
## Get started
```
> git clone https://github.com/greaveselliott/portal.git
> cd portal
> yarn
> yarn start
```

# Roadmap
## The user can log into the portal using email and password
- [x] Implement Redux async action/reducer for authenticating
- [x] Handle successful auth
- [x] Handle failed auth

## The user should go through the authentication process again when the token has expired
- [x] Implement experiation timer async action/reducer for auth experiation

## The user can list and update their “apps”
- [x] Implement async action for fetching a list of the users apps
- [x] Handle successful fetch
- [ ] Handle failed fetch

## The user can paginate through a list of “users” associated with an “app”
- [x] Implement async action for fetching paged list of users associated with app.
- [x] Handle successful fetch
- [ ] Handle failed fetch

## Optimization
- [ ] Configure Webpack loader Mini CSS extract plugin
- [ ] Split bundle
- [ ] Server-side render initial view

## Configuration
- [x] Add monorepo
- [x] Configure Redux
- [x] Configure Redux thunk
- [x] Configure Jest
- [x] Configure Enzyme
- [x] Configure Enzyme matchers
- [x] Configure Webpack loader SASS

## Components
### UI Library
- [x] Button
- [x] Image
- [x] Input
- [ ] Icon
- [ ] Link
- [ ] Header
- [ ] Pagination
- [ ] Tiles
- [x] Stage
- [ ] Profile
- [ ] Progress bar

### Layout
- [x] Page

### Pages
- [x] Login
- [x] All Apps
- [ ] Single App
- [ ] Edit App page
