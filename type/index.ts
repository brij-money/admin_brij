export interface Menu {
    id: number;
    label: string,
    icon:string,
    url:string
}

export interface OverviewCardData {
    icon:string,
    title:string,
    value:number,
    color:string,
    countData:countData
}

export interface countData  {
    type:string,
    total:number,
    data:cardData[]
}

export interface cardData {
    title:string,
    currency:string,
    count:number
}