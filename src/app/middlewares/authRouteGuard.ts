
const isAuthenticated = localStorage.getItem("auth");


export function authRouteGuard(to: any, from: any, next: any) {
    if (!isAuthenticated || null) {
        next('/login');
    } else {
        next();
    }
}