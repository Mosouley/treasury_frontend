import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GenericService } from '../../../shared/services/generic.service';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})
export class GenericComponent {
  @Input() formConfig!:any;
  @Input() apiUrl!: string;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: GenericService<any>) {}

  ngOnInit(): void {

    this.buildForm();
  }

  buildForm(): void {
    let formControls: any = {};
    if (this.formConfig) {
      this.formConfig.forEach((field:any) => {
        formControls[field.name] = ['', Validators.required];
      });
      this.form = this.fb.group(formControls);
      
    } else {
      console.log('No form');
      
      
    }
    
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dataService.create(this.apiUrl, this.form.value).subscribe(response => {
        console.log('Created:', response);
      });
    }
  }
}
