import * as HomePage from './home'
import * as PageNotFoundPage from './pageNotFound'
import * as ProfilePage from './profile'

const Pages = {
    ...HomePage.route,
    ...PageNotFoundPage.route,
    ...ProfilePage.route
}

export default Pages