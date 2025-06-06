
const AppRoute={
    Main:'/',
    Login:'/login',
    Favorites:'/favorites',
    Offer:'/offer/:id',
};

const AuthorizationStatus={
    Auth:"AUTH",
    NoAuth:"NO_AUTH",
    Unknown:'UNKNOWN',
}

export {AppRoute,AuthorizationStatus};