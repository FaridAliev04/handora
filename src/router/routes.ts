export const Routes = {
    default: '/',
    login:'/login',
    register:'/register'
} as const;

export type RouteKey = keyof typeof Routes;

export const goTo = (route: string, param: string | number) => {
    return `${route}/${param}`;
};

export const goToWithQuery = (route: string, params?: Record<string, string | number | boolean>) => {
    if (!params || Object.keys(params).length === 0) return route;

    const query = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    return `${route}?${query}`;
};

export default Routes;
