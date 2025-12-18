import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisService } from '../../core/services/analysis.service';
import { TweetAnalysis } from '../../core/models/tweet-analysis.model';

import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,                       // ✅ REQUIRED
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [
    CommonModule,                         // *ngIf, *ngFor, pipes
    PanelModule,                          // <p-panel>
    TagModule,                            // <p-tag>
    ProgressBarModule                    // <p-progressBar>
  ]
})
export class DashboardComponent implements OnInit {

  analysis!: TweetAnalysis;

  positive: any[] = [];
  negative: any[] = [];
  neutral: any[] = [];

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    const data = this.analysisService.getAnalysis();

    if (data.length > 0) {
      this.analysis = data[0];
      this.splitKeywords();
    }
  }

  private splitKeywords(): void {
    this.analysis.keywords.forEach(k => {
      if (k.impact > 0.1) {
        this.positive.push(k);
      } else if (k.impact < -0.1) {
        this.negative.push(k);
      } else {
        this.neutral.push(k);
      }
    });
  }
}
