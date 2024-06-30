import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesService } from '../../shared/services/currencies.service';
import { PositionsService } from '../../shared/services/positions.service';
import { ReportComponent } from '../report-template/report.component';
import { DataModel } from '../../model/data.model';

@Component({
  selector: 'app-position-ccy',
  standalone: true,
  imports: [ReportComponent, CommonModule],
  templateUrl: './position-ccy.component.html',
  styleUrl: './position-ccy.component.css'
})
export class PositionCcyComponent implements OnInit {
  currencies: any[] = []
  reportingData!: any[]  ;
  model: DataModel[] = [];
  reportName = 'Position'
  constructor(private ccyService: CurrenciesService,
    private positionServ: PositionsService
  ) {}

  ngOnInit(): void {
    this.loadAllCurrencies()
    // this.model = [
    //   new DataModel('ccy', 'Currencies', 'string', false,  'uppercase'),
    //   new DataModel('position.', 'Op. Position', 'number', false,  '`number:`1.2-2`'),
    //   new DataModel('position', 'Intraday', 'number', false, [], '`number:`1.2-2`'),]
    this.linkedHeaders()
  }

  loadAllCurrencies(): void {
    this.loadCurrenciesPage();
    this.reportingData = [...this.currencies]
    this.fetchPositins()
  }

  loadCurrenciesPage(next?: string): void {

    this.ccyService.listByUrl(next).subscribe(data => {
      this.currencies = [...this.currencies, ...data.results];
         if (this.currencies.length < data.count) {
          this.loadCurrenciesPage(data.next);
         }

    });
    // console.log(this.currencies);

  }
  fetchPositins(){
    this.positionServ.listByUrl().subscribe(data => {
      console.log(data);

    })
  }

  linkedHeaders(){
    this.model = this.currencies.map(ccy => {
      console.log(ccy);

      return new DataModel(ccy.code, ccy.code, 'number', false, [], '`number:`1.2-2`')
    })
    console.log(this.model);

  }
}
