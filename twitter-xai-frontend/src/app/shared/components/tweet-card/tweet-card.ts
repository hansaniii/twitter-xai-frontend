import { Component, Input } from '@angular/core';
import { TweetAnalysis } from '../../../core/models/tweet-analysis.model';
import { Card } from 'primeng/card';
import { PercentPipe } from '@angular/common';
@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.html',  
  styleUrl: './tweet-card.css',
  imports: [Card, PercentPipe], 
})
export class TweetCard {
  @Input() tweet!: TweetAnalysis;

highlight(text: string) {
  let output = text;

  this.tweet.keywords.forEach(k => {
    const color =
      k.polarity === 'supports_sentiment' ? '#C8E6C9' : '#FFCDD2';

    const regex = new RegExp(`\\b${k.token}\\b`, 'gi');

    output = output.replace(
      regex,
      `<span style="
        background:${color};
        padding:4px 8px;
        border-radius:12px;
        font-weight:600;">
        ${k.token}
      </span>`
    );
  });

  return output;
}
}
