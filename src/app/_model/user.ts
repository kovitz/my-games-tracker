import { RankCard } from './rank-card';

export class User {
    userId: string;
    config: UserConfig;
    rankCardLists: RankCardList[];
}

export class UserConfig {
    facebookLink: string; //hoping to link Facebook eventually
    lastActiveListId: string; //if user logs in again, the view model automatically displays this listId
}

export class RankCardList {
    listId: string;
    categoryId: string;
    title: string;
    rules: RankCardRule[];
    rankCards: RankCard[];
}

export class RankCardRule {
    constructor(
        public code: string,
        public weight: number,
        public ruleName: string
    ) { }
}