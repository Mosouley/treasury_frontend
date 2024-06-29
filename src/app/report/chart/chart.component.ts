import { StreamService } from './../../shared/services/stream.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


// We have to supply the plotly.js module to the Angular
// library.

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit{

  liveData$: any
// Bar Chart
graph1 = {
  data: [
    { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
  ],
  layout: {title: 'Some Data to Hover Over'}
};
// Line chart
graph2 = {
  data: [
    { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
    { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
    { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
  ],
  layout: {title: 'Some Data to Highlight'}
};
transactions$ = this.service.messages$.pipe(
  map(rows => rows),
  catchError(error => { throw error }),
  tap({
    next: message=> {

      this.liveData$ = message.data

    },
    error: error => console.log('[Live Table component] Error:', error),
    complete: () => console.log('[Live Table component] Connection Closed')
  })
).subscribe();

constructor(private service: StreamService) {
}
ngAfterViewInit() {
  this.service.connect();
  }
}

// ngOnInit(): void {


//   this.service.messages$.pipe(
//     tap(data => console.log('Received data:', data)),
//     catchError(error => {
//       console.error('WebSocket error:', error);
//       throw error;
//     })
//   ).subscribe({
//     next: (data: any) => {
//       // Handle the received data here
//       console.log('i reached here');

//       this.liveData$ = data;
//       console.log('Updated live data:', this.liveData$);
//     },
//     complete: () => {
//       console.log('WebSocket stream completed.');
//     }
//   });
// }

