﻿import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: "admin.component.html"
})

export class AdminComponent {
    //public username: string;
    //public password: string;
    //public errorMessage: string;

    //constructor(private router: Router, private auth: AuthService) { }

    //authenticate(form: NgForm) {
    //    if (form.valid) {
    //        this.auth.authenticate(this.username, this.password)
    //            .subscribe(response => {
    //                if (response) {
    //                    this.router.navigateByUrl("/admin/main");
    //                }
    //                this.errorMessage = "Authentication Failed";
    //            })
    //    } else {
    //        this.errorMessage = "Form Data Invalid";
    //    }
    //}

    constructor(private auth: AuthService, private router: Router) { }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}