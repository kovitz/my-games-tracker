import { CategoryItem } from './category';
import { RankCard } from './rank-card';

export interface AddRankCardRequest extends RankCard {
    activeUserId: string;       //get from UserSessionHandler
    activeListId: string;       //get from UserSessionHandler
    activeCategoryId: string;   //depends on activeListId, gotten from UserSessionHandler
    
    //if this is null, it's because the CategoryItem already exists in Mongo, 
    //and this RankCard's categoryItemId is linked to it
    categoryItem?: CategoryItem;
}
