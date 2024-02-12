import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as Highcharts from 'highcharts';
import { Rank, RankCard } from '../_model/rank-card';
import { RankCardRule } from '../_model/user';
import { UserSessionHandler } from '../user-session-handler';
import { CategoryItem } from '../_model/category';

@Component({ selector: 'user-rating-card', templateUrl: './user-rating-card.component.html' })
export class UserRankCardComponent {
  constructor(private userSessionHandler: UserSessionHandler) {}

  //this should ONLY trigger from the Home component
  //if I loaded this with the constructor or ngOnInit, it could cause a race condition with Home
  @Input() set cardInput(value: RankCard) {
    this.dumbCard = value;
    this.categoryItem = this.userSessionHandler.getCategoryItem(value.categoryItemId);
    this.listRules = this.userSessionHandler.activeList.rules;
    this.listRules.forEach(rule => { this.ruleNames.push(rule.ruleName) });
    this.listRules.forEach(rule => { 
      let linkedRank = value.ranks.find(rank => rank.code == rule.code);
      this.scores.push(linkedRank.score); 
    });
    
    this.triggerCardLoaded(value);
  }

  listRules: RankCardRule[] = [];
  categoryItem: CategoryItem = null;
  ruleNames: string[] = [];
  scores: number[] = [];
  dumbCard: RankCard; //this is the stupidest thing ever
  Highcharts: typeof Highcharts = Highcharts;
  chartUpdateFlag = false;
  
  //onCardLoaded event
  private cardLoaded = new Subject<RankCard>();
  public onCardLoaded = this.cardLoaded.asObservable();
  private triggerCardLoaded(event: RankCard) { this.cardLoaded.next(event); }

  getName(code) { return this.listRules.find(x => x.code == code).ruleName; }

  chartOptions: Highcharts.Options = {
    exporting: { buttons: { contextButton: { enabled: false } } },
    title: { text: null },
    tooltip: { enabled: false },
    credits: { enabled: false },
    yAxis: { visible: false, min: 0, max: 12, tickInterval: 1 },
    plotOptions: { 
      bar: { dataLabels: { enabled: true } } ,
      series: { animation: false, dataLabels: { style: { textOutline: 'none' } } }
    },
    chart: { 
      style: { fontFamily: "'Open Sans Condensed', sans-serif", fontSize: '16pt', fontWeight: 'bold'},
      type: 'bar',
      backgroundColor: 'transparent',
      // margin: 0,
      height: '210rem',
      width: 340 //TODO: add window size dependency: https://stackoverflow.com/questions/39888768/how-to-get-height-and-width-of-device-display-in-angular2-using-typescript
    },
    xAxis: {
      // minPadding: 0,
      // maxPadding: 0,
      title: { text: null },
      gridLineWidth: 0,
      categories: this.ruleNames,
      plotLines: [{ width: 0 }]
    },
    series: [{
      borderRadius: 10,
      pointWidth: 5,
      showInLegend: false,
      type: 'bar',
      data: this.scores
    }]
  };

}

//based on mouseenter and mouseleave
//https://www.positronx.io/useful-list-of-angular-7-event-types-for-event-binding/
// show = false;
// showDetails(choice) { 
//   if(choice) this.chartUpdateFlag = true;
//   this.show = choice;
// }