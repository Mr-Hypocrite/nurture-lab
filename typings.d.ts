// LpComp
export interface LComp {
    name: string;
}

export interface Data {
    img: string;
    amount: number;
    asset: string;
    chain: {
        img: string;
        name: string;
    };
    referral_earnings: number;
    state: string;
    type:string;
    user: string;
}