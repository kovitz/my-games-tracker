export class RankCard { constructor(
    public categoryItemId: number = -1,
    public ranks: Rank[] = [],
    public bonusDetails: BonusDetails[] = [],
    public metadata: any = {}
){}}

export class Rank { constructor(
    public code: string,
    public score: number
){}}

export class BonusDetails { constructor(
    public increment: number,
    public comment: string
){}}