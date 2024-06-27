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


export interface MerchantsResponse {
    status:     number;
    data:       Merchant[];
    pagination: Pagination;
    message:    string;
}

export interface Merchant {
    merchant_id:                 null | string;
    client_uuid:                 string;
    first_name:                  string;
    last_name:                   string;
    dob:                         null;
    business_staff_size:         null;
    status:                      string;
    business_industry:           null | string;
    business_category:           null;
    business_type:               null;
    business_name:               null | string;
    business_logo_url:           null;
    business_address:            null;
    business_description:        null;
    business_city:               null;
    business_region:             null;
    business_website:            null;
    country_name:                string;
    business_email:              null;
    business_phone:              null;
    business_twitter_profile:    null;
    business_facebook_profile:   null;
    business_instagram_profile:  null;
    merchant_business_documents: MerchantBusinessDocument[];
    compliance_approved_at:      Date | null;
    created_at:                  Date;
    onboarding_stage:            number;
}

export interface MerchantBusinessDocument {
    id:   string;
    type: string;
    name: string;
    url:  string;
}

export interface Pagination {
    current_page:   number;
    next_page_url:  null;
    prev_page_url:  null;
    first_page_url: string;
    last_page_url:  string;
    per_page:       number;
    last_page:      number;
    total:          number;
}


export interface Admin {
    status:  number;
    data:    Data;
    message: string;
}

export interface Data {
    id:                   string;
    firstname:            string;
    lastname:             string;
    is_favorite_merchant: number;
    dob:                  null;
    address:              null;
    email:                string;
    country_code:         string;
    country_name:         string;
    phone:                string;
    third_party_merchant: string;
    onboarding_stage:     number;
    phone_verified_at:    null;
    tokens:               Token[];
    client:               null;
    notifications:        any[];
}

export interface Token {
    name:                  string;
    personal_access_token: string;
    abilities:             string[];
}
