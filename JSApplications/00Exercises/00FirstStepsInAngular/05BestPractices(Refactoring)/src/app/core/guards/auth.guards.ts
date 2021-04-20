import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment, Route, CanLoad } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canLoad(route: Route, segments: UrlSegment[]) {
        if (this.authService.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/login']);
        throw false;
    }
}