import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetAnalysis } from '../models/tweet-analysis.model';

@Injectable({ providedIn: 'root' })
export class AnalysisService {

  private analyses: TweetAnalysis[] = [];

  constructor(private http: HttpClient) {}

  analyzeSampleText(text: string) {
    return this.http.post<any>(
      'http://localhost:8000/analyze',
      { text }
    );
  }

  setAnalysis(data: TweetAnalysis[]) {
    this.analyses = data;
  }

  getAnalysis(): TweetAnalysis[] {
    return this.analyses;
  }
}
