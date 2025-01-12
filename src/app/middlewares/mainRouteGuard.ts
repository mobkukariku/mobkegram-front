
const isAuthenticated = localStorage.getItem("auth");


export function mainRouteGuard(to: any, from: any, next: any) {
    if (isAuthenticated) {
        next('/main');
    } else {
        next();
    }
}