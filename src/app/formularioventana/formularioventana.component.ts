import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '../validators/email.validator';

@Component({
  selector: 'app-formularioventana',
  templateUrl: './formularioventana.component.html',
  styleUrls: ['./formularioventana.component.css']
})
export class FormularioventanaComponent implements OnInit {

  isDisabled: boolean;
  showModal = false;
  
  formbuilder: FormBuilder | undefined;
  formulario: FormGroup | any;
  mipattern = '[a-z]*';
  miEmail = '[a-zA-Z0-9]*[@]+[a-zA-Z]+[.]+es|[a-zA-Z0-9]*[@]+[a-zA-Z]+[.]+com';

  constructor(private formBuilder: FormBuilder) { 
    this.isDisabled = true;
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.pattern(this.mipattern)]],
      surname: ['', [Validators.required, Validators.minLength(3),Validators.pattern(this.mipattern)]],
      email: ['', [Validators.required, ValidateEmail, Validators.pattern(this.miEmail)]]
    });
  }

  onSubmit(_datosForm: any) {
    console.log(_datosForm.value);
  }
}
