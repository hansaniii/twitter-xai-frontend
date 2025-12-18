export interface KeywordImpact {
  token: string;
  impact: number;
  polarity: 'supports_sentiment' | 'opposes_sentiment';
}

export interface TweetAnalysis {
  id: number;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral'; 
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  keywords: {
    token: string;
    impact: number;
    polarity: string;
  }[];
  explanation: string;
}


