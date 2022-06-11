import blessing from "../assets/blessing.png";
import Ajibade from "../assets/Ajibade.png";
import AJIBADE from "../assets/AJIBADE OLUSOLA 1.png";

export interface ICounsellor  {
    img: string,
    name: string,
    bio: string,
};

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

export const getAllCounsellors = (): ICounsellor[] => {
    return counsellorDatas;
};