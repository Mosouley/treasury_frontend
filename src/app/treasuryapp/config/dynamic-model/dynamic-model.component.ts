import { log } from 'node:console';
import { API_URLS } from './../../../shared/config/app.url.config';
import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../../shared/services/generic.service';
import { GenericComponent } from '../generic/generic.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dynamic-model',
  standalone: true,
  imports: [GenericComponent, CommonModule],
  templateUrl: './dynamic-model.component.html',
  styleUrl: './dynamic-model.component.css'
})
export class DynamicModelComponent implements OnInit{
  formElement!: any[];
  apiUrl!: string;
  models: any[] = []

  constructor(public genericDataService: GenericService<any>,
  
  ) {}
  ngOnInit(): void {
      this.genericDataService.getAll(API_URLS.MODEL_METADATA_ALL).subscribe( (data: any) => {
        this.models= data   
        
      })
     
      
  }
  selectModel(model: any) {

    
    const selectedModelName = (model.target as HTMLSelectElement).value;
    const selectedModel = this.models.find(model => model.model === selectedModelName);

    
    if (selectedModel) {
      this.formElement = selectedModel.fields;
      console.log(this.formElement);
      
      this.apiUrl = `/api/${selectedModelName.toLowerCase()}/`;
    }
  }
}
