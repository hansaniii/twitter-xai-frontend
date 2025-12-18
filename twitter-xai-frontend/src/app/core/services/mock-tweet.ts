// import { Injectable } from '@angular/core';
// import { TweetAnalysis } from '../models/tweet-analysis.model';

// @Injectable({ providedIn: 'root' })
// export class MockTweetAnalysisService {

//   getAnalyses(): TweetAnalysis[] {
//     console.log("MockTweetAnalysisService: getAnalyses called");
//     return [
//       {
//         id: 1,
//         text: 'I am happy today!',
//         sentiment: 'positive',
//         confidence: 0.996,
//         severity: 'strong positivity',
//         keywords: [
//           {
//             token: 'happy',
//             impact: 0.76,
//             polarity: 'supports_sentiment'
//           }
//         ],
//         explanation:
//           'The model detected **strong positivity** with very high confidence. \
// The word **happy** strongly contributed to the positive sentiment.'
//       },

//       {
//         id: 2,
//         text: 'This platform is frustrating and slow.',
//         sentiment: 'negative',
//         confidence: 0.91,
//         severity: 'moderate negativity',
//         keywords: [
//           {
//             token: 'frustrating',
//             impact: 0.68,
//             polarity: 'supports_sentiment'
//           },
//           {
//             token: 'slow',
//             impact: 0.44,
//             polarity: 'supports_sentiment'
//           }
//         ],
//         explanation:
//           'Negative sentiment was detected mainly due to words like \
// **frustrating** and **slow**, which pushed the model toward a negative interpretation.'
//       },

//       {
//         id: 3,
//         text: 'The update is okay, nothing special.',
//         sentiment: 'neutral',
//         confidence: 0.62,
//         severity: 'neutral',
//         keywords: [],
//         explanation:
//           'The message contains no strong emotional words, resulting in a neutral classification.'
//       }
//     ];
//   }
// }
