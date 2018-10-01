# Portal project
```
> git clone https://github.com/stanimirtt/monorepo-yarn-lerna-react-redux-starter.git
> cd monorepo-yarn-lerna-react-redux-starter
> yarn
> yarn start
```

# Roadmap
## The user can log into the portal using email and password
- [] Implement Redux async action/reducer for authenticating
- [] Handle successful auth
- [] Handle failed auth

## The user should go through the authentication process again when the token has expired
- [] Implement experiation timer async action/reducer for auth experiation

## The user can list and update their “apps”
- [] Implement async action for fetching a list of the users apps
- [] Handle successful fetch
- [] Handle failed fetch

## The user can paginate through a list of “users” associated with an “app”
- [] Implement async action for fetching paged list of users associated with app.
- [] Handle successful fetch
- [] Handle failed fetch

## Optimization
- [] Configure Webpack loader Mini CSS extract plugin
- [] Split bundle
- [] Server-side render initial view

## Configuration
- [x] Add monorepo
- [] Configure Redux
- [] Configure Redux thunk
- [] Configure Jest / Enzyme
- [] Configure Webpack loader SASS

## Components
### UI Library
- [] Button
- [] Image
- [] Icon
- [] Link
- [] Header
- [] Page
- [] Pagination
- [] Tiles
- [] Stage
- [] Profile
- [] Progress bar

### Layout
- [] Page

### Pages
- [] Login
- [] All Apps
- [] Single App