// import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
// import { StatusBadge } from "../../shared/components/status-badge/status-badge";
// import { SentimentChart } from "../../shared/components/sentiment-chart/sentiment-chart";
// //import { TweetAnalysisTableComponent } from '../../components/tweet-analysis-table/tweet-analysis-table.component';

// @Component({
//   selector: 'app-dashboard',
//   imports: [StatusBadge, SentimentChart],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
//   schemas: [NO_ERRORS_SCHEMA]
// })


// export class DashboardComponent {
//   accountStatus = {
//     status: 'Warning',
//     negative_percentage: 48
//   };
// tweetAnalyses: any;
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetAnalysis } from '../../core/models/tweet-analysis.model';
import { MockTweetAnalysisService } from '../../core/services/mock-tweet';
import { StatusBadge } from "../../shared/components/status-badge/status-badge";
import { SentimentChart } from "../../shared/components/sentiment-chart/sentiment-chart";
import { Card } from "primeng/card";
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { UpperCasePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core/types/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [Card, TagModule, ChipModule, UpperCasePipe, DecimalPipe, StatusBadge, SentimentChart, CommonModule],
})


export class DashboardComponent implements OnInit {

  positiveCount = 0;
  negativeCount = 0;
  neutralCount = 0;

  overallMood = 'Balanced';
  overallRisk = 'Low';
  stabilityScore = 100;
  accountSummary = '';
  riskLevelClass = 'text-green-500';
  analyses: TweetAnalysis[] = [];
  accountStatus: any;
  tweetAnalyses: any;

  constructor(private mockService: MockTweetAnalysisService) { }

  ngOnInit(): void {
    this.calculateAccountState(this.analyses);

  }

  calculateAccountState(analyses: TweetAnalysis[]) {
    this.positiveCount = this.analyses.filter(t => t.sentiment === 'positive').length;
    this.negativeCount = this.analyses.filter(t => t.sentiment === 'negative').length;
    this.neutralCount  = this.analyses.filter(t => t.sentiment === 'neutral').length;

    // Mood
    if (this.positiveCount > this.negativeCount) {
      this.overallMood = 'Positive';
    } else if (this.negativeCount > this.positiveCount) {
      this.overallMood = 'Negative';
    } else {
      this.overallMood = 'Balanced';
    }

    // Risk
    if (this.negativeCount >= 3) {
      this.overallRisk = 'High';
      this.riskLevelClass = 'text-red-500';
    } else if (this.negativeCount >= 1) {
      this.overallRisk = 'Moderate';
      this.riskLevelClass = 'text-orange-500';
    } else {
      this.overallRisk = 'Low';
      this.riskLevelClass = 'text-green-500';
    }

    this.stabilityScore = Math.max(30, 100 - this.negativeCount * 20);

    this.accountSummary =
      this.overallRisk === 'High'
        ? 'Your account shows repeated negative sentiment. Consider taking breaks.'
        : this.overallRisk === 'Moderate'
        ? 'Some negative sentiment detected. Stay aware.'
        : 'Your account sentiment appears healthy.';
  }
}
