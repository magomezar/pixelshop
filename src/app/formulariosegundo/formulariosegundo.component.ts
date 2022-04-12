import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup | any;
  mipattern = '[a-z]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3),Validators.pattern(this.mipattern)]],
      password: ['', Validators.required]
    });
  }

  onSubmit(_datosForm: any) {
    console.log(_datosForm.value);
  }
}
