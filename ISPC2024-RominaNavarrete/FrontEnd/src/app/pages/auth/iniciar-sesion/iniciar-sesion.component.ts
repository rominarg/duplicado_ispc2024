import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent implements OnInit {
  
    loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(5)]],
    })
  
    constructor(private formBuilder: FormBuilder, private router:Router) { }
  
    ngOnInit(): void {}
  
    get email(){
      return this.loginForm.controls.email;
    }
  
    get password(){
      return this.loginForm.controls.password;
    }
  
    login() {
      if(this.loginForm.valid) {
        console.log ("Iniciar Sesión");
        this.router.navigateByUrl('/');
        this.loginForm.reset();
      }
      else {
        this.loginForm.markAllAsTouched();
        alert("Para iniciar sesión debe completar todos los campos");
      }
    }
  
  }
