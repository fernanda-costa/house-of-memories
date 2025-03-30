import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pacient-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule
  ],
  templateUrl: './pacient-form.component.html',
  styleUrl: './pacient-form.component.scss'
})
export class PacientFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['Isabela Lovato', Validators.required],
      rg: ['', Validators.required],
      dominanciaManual: ['Destro', Validators.required],
      fazUsoDeMedicamentos: ['Não', Validators.required],
      dataNascimento: ['2013-09-30', Validators.required],
      peso: [0, [Validators.required, Validators.min(0)]],
      sexo: ['Feminino', Validators.required],
      anoEscolar: ['6º Ano', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      idade: [11, Validators.required],
      altura: ['', Validators.required],
      periodo: ['Manhã', Validators.required],
      pai: ['João Paulo Lovato', Validators.required],
      grauInstrucaoPai: ['Superior Completo', Validators.required],
      cpfPai: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      emailPai: ['', [Validators.required, Validators.email]],
      profissaoPai: ['', Validators.required],
      celularPai: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      empresaPai: ['', Validators.required],
      mae: ['Dayane Carneiro', Validators.required],
      cpfMae: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      grauInstrucaoMae: ['Superior Incompleto', Validators.required],
      emailMae: ['', [Validators.required, Validators.email]],
      profissaoMae: ['', Validators.required],
      idadeMae: [33, Validators.required],
      celularMae: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      empresaMae: ['', Validators.required],
      enderecoResidencial: ['', Validators.required],
      bairro: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      instituicaoEnsino: ['Dom Pedro II', Validators.required],
      tipoInstituicaoEnsino: ['Particular', Validators.required],
      emailInstituicaoEnsino: ['', [Validators.required, Validators.email]],
      contatoInstituicaoEnsino: ['', Validators.required],
      cidade: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern('[0-9]{5}-[0-9]{3}')]],
    });
  }



  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
