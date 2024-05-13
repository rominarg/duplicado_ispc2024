import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  signupForm = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(private FormBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {}

  get name(){
    return this.signupForm.controls.name;
  }
  
  get surname(){
    return this.signupForm.controls.surname;
  }
  
  get email(){
    return this.signupForm.controls.email;
  }

  get password(){
    return this.signupForm.controls.password;
  }

  get repeatPassword(){
    return this.signupForm.controls.repeatPassword;
  }

  signup() {
    if(this.signupForm.valid) {
      console.log ("Iniciar Sesión");
      this.router.navigateByUrl('/');
      this.signupForm.reset();
    }
    else {
      this.signupForm.markAllAsTouched();
      alert("Para registrarse debe completar todos los campos");
    }
  }

}
