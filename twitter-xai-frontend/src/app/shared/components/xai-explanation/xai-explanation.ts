import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { PercentPipe } from '@angular/common';
@Component({
  selector: 'app-xai-explanation',
  imports: [Card, PercentPipe],
  templateUrl: './xai-explanation.html',
  styleUrl: './xai-explanation.css',
})
export class XaiExplanation {
tweet: any;

}
