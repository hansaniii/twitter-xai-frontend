import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-sentiment-chart',
  imports: [ChartModule],
  templateUrl: './sentiment-chart.html',
  styleUrl: './sentiment-chart.css',
})
export class SentimentChart {
data: any;
options: any;

}
