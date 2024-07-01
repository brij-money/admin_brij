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
    client:               null | Client;
    notifications:        any[];
}

export interface Token {
    name:                  string;
    personal_access_token: string | null;
    abilities:             string[];
}


// docs

export interface MerchantDocResponse {
    status:  number;
    data:    DocsData;
    message: string;
}

export interface DocsData {
    documents: Document[];
    client:    Client | null;
}

export interface Client {
    id:                              string;
    account_type:                    AccountType;
    mothers_maiden_name:             null;
    verification_id_url:             null;
    certificate_of_registration_url: null;
    certificate_of_commencement_url: null;
    selfie_url:                      null;
    user:                            User;
    wallets:                         Wallet[];
    payment_requests:                any[];
    chaka_user:                      any[];
    merchant_business_documents:     MerchantBusinessDocument[];
}

export interface AccountType {
    id:          string;
    name:        string;
    description: string;
}

export interface MerchantBusinessDocument {
    id:   string;
    type: string;
    name: string;
    url:  string;
}

export interface User {
    id:                   string;
    firstname:            string;
    lastname:             string;
    dob:                  null;
    address:              null;
    email:                string;
    country_code:         string;
    country_name:         string;
    phone:                string;
    onboarding_stage:     number;
    phone_verified_at:    null;
    third_party_merchant: string;
    tokens:               Token[];
    is_pilot:             number;
}

export interface Token {
    name:                  string;
    personal_access_token: string | null;
    abilities:             string[];
}

export interface Wallet {
    name:                  null | string;
    id:                    string;
    balance:               string;
    debit:                 string;
    credit:                string;
    brijx_escrow_balance:  string;
    currency:              string;
    country_name:          string;
    icon_url:              string;
    exchange_state:        string;
    fund_state:            string;
    can_swap_currency:     number;
    user_wallet_kyc_level: number;
    withdraw_state:        string;
    status:                string;
    colour_code:           string;
    minimum_cashin:        string;
    minimum_cashout:       string;
    wema_ngn_account:      null | string;
    wallet_abilities:      string[];
}

export interface Document {
    id:                string;
    document_type:     string;
    document_file_url: string;
    kyb_status:        string;
    media:             Media;
}

export interface Media {
    id:              string;
    name:            string;
    collection_name: string;
    mime_type:       string;
    disk:            string;
    url:             string;
}


// approve
export interface ApproveMerchantResponse {
    status:  number;
    data:    ApprovedMerchantData;
    message: string;
}

export interface ApprovedMerchantData {
    id:                   string;
    firstname:            string;
    lastname:             string;
    dob:                  null;
    address:              null;
    email:                string;
    country_code:         string;
    country_name:         string;
    phone:                string;
    onboarding_stage:     number;
    phone_verified_at:    null;
    third_party_merchant: string;
    tokens:               Token[];
    is_pilot:             number;
}

export interface Token {
    name:                  string;
    personal_access_token: null | string;
    abilities:             string[];
}
