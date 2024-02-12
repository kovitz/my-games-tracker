export class Category {
    categoryId: string;
    items: CategoryItem[];
}

export class CategoryItem {
    itemId: number = -1;       //directly associated with a Rank Card, should be a 1-to-1 relationship
    title: string = 'TITLE';   //when a RankCard is added, this is the value used to determine if corresponding CategoryItem also needs to be added
    metadata: any = {};        //basically anything, who knows!
    thumb: string = 'https://vgboxart.com/boxes/PS2/27126-gamestop-insert.jpg'; //URL of the image used in the view model 
    //TODO: find a googling API that gets this, based on CategoryItem.title
}