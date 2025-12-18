import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis.service';
import { TweetAnalysis } from '../../core/models/tweet-analysis.model';
import{Card} from 'primeng/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [Card],
  styleUrl: './login.css',
})
export class LoginComponent {

  loading = false;

  constructor(
    private analysisService: AnalysisService,
    private router: Router
  ) {}

  loginWithSampleData() {
    this.loading = true;

    const sampleText = `
      I am happy today.
      But sometimes social media makes me angry.
      Still trying to stay positive.
    `;

    this.analysisService.analyzeSampleText(sampleText)
      .subscribe({
        next: (res) => {
          console.log('Analysis result:', res);
          const analysis = [{
            id: 1,
            text: res.analysis.cleaned_text,
            sentiment: res.analysis.sentiment,
            confidence: res.analysis.confidence,
            severity: res.analysis.severity,
            keywords: res.analysis.keywords,
            explanation: res.analysis.explanation
          }];

          this.analysisService.setAnalysis(analysis);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.loading = false;
          alert('Backend not reachable');
        }
      });
  }
}
