import Agala from "../assets/contact/agalabapics.png";
import Banji from "../assets/contact/banjipics.png";
import Bunmi from "../assets/contact/bunmipics.png";
import cisca from "../assets/contact/ciscapics.png";
import ife from "../assets/contact/ifepics.png";
import miracle from "../assets/contact/miraclepics.png";
import ola from "../assets/contact/olapics.png";
import tridwan from "../assets/contact/tridwanpics.png";
import victor from "../assets/contact/victorpics.png";
import vitus from "../assets/contact/vituspics.png";
import will from "../assets/contact/willpics.png";

export interface IMembers {
    id: number,
    name: string,
    pos: string,
    fLink: string,
    tLink: string,
    inLink: string,
    img: string,
};


const teamMembers : IMembers[] = [
    {
        id: 0,
        name: "Onifade Ifeoluwa",
        pos: "Team Lead",
        fLink: "",
        tLink: "",
        inLink: "",
        img: ife,
    },
    {
        id: 1,
        name: "Ewenla Olabanji",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: Banji,
    },
    {
        id: 2,
        name: "Amuzie Francisca",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: cisca,
    },
    {
        id: 3,
        name: "Agalaba Precious",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: Agala,
    },
    {
        id: 4,
        name: "Olufisoye Olawale",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: ola,
    },
    {
        id: 5,
        name: "Sylvester Miracle",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: miracle,
    },
    {
        id: 6,
        name: "Okonkwo Victor",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: victor,
    },
    {
        id: 7,
        name: "Tijani Ridwan",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: tridwan,
    },
    {
        id: 8,
        name: "Bello Bunmi",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: Bunmi,
    },
    {
        id: 9,
        name: "Obinwa Vitus",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: vitus,
    },
    {
        id: 10,
        name: "Williams Williams",
        pos: "Team Member",
        fLink: "",
        tLink: "",
        inLink: "",
        img: will,
    },
]


export const getAllTeamMemebers = (): IMembers[] => {
    return teamMembers;
};