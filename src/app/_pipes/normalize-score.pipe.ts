import { Pipe, PipeTransform } from '@angular/core';
import { RankCard } from '../_model/rank-card';

@Pipe({ name: 'normalizeScore', pure: false })
export class NormalizeScorePipe implements PipeTransform {
  transform(card: RankCard): number {
    let totalScore = 0;
    card.ranks.forEach(rank => totalScore += rank.score);
    return totalScore;
  }
}
