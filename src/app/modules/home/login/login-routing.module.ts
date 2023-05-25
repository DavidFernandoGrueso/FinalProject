import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonserveService } from 'src/app/services/jsonserve.service';
import { Router } from '@angular/router';





export class LoginRoutingModule {

    constructor(private jsons: JsonserveService, private router: Router) {}

    public isLoggedIn = false;
 }
