import blessing from "../assets/blessing.png";
import Ajibade from "../assets/Ajibade.png";
import AJIBADE from "../assets/AJIBADE OLUSOLA 1.png";
import img from "../assets/woman.png";

export interface ICounsellor  {
    img: string,
    name: string,
    bio: string,
};

export interface ICounsellors {
    img: string;
    job_title: string;
    bio: string;
    name: string;
    id: number;
}


const counsellorDatas: ICounsellor[] = [
    {
        img: blessing,
        name: "Obawomiye Blessing",
        bio: "Obawomiye Blessing is a religious counsellor who has been able to use her counselling abilities to help poeple become better"
    },
    {
        img: Ajibade,
        name: "Ajibade Adeola",
        bio: "Ajibade is an empathetic fellow and a great listener who always keeps an open mind with no bias in his conversations."
    },
    {
        img: AJIBADE,
        name: "Ajibade Olusola",
        bio: "Ajibade Olusola understands how life hurdle can get and uses her positive words of affirmation to encourage people."
    },
]


const AllAvailableCounsellors: ICounsellors[] = [
    {
        id: 1,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
    {
        id: 2,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
    {
        id: 3,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
    {
        id: 4,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
    {
        id: 5,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
    {
        id: 6,
        img: img,
        job_title: "Health Therapist",
        bio: "James Brown is a professional councillor for the university of texas, James Brown is a professional councillor for the university of texas",
        name: "James  Brown",    
    },
];


export const getAllCounsellors = (): ICounsellor[] => {
    return counsellorDatas;
};

export const getAllAvailableCounsellors = () => {
    return AllAvailableCounsellors;
};

export const getsingleCounsellor = (id: number) => {
    const res =  AllAvailableCounsellors.filter(c => c.id === id);
    return res[0];
}