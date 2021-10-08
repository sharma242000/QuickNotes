import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mouseoverLogin: any

  constructor(private router:Router) { }
  login() {
    this.router.navigate(['/quicknotes'])
  }

  ngOnInit(): void {
  }

}
