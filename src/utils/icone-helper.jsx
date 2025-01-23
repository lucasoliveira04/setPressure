import { 
    CiApple, CiAlarmOn, CiBookmark, CiBoxList, CiCalendar, CiCamera, CiCloud, CiCoffeeCup, 
    CiCreditCard1, CiDollar, CiDumbbell, CiEdit, CiFaceSmile, CiFlag1, CiGift, CiGlobe, 
    CiHeadphones, CiHome, CiImageOn, CiLock, CiMail, CiMapPin, CiMobile3, 
    CiMusicNote1, CiPen, CiPlane, CiStar, CiTrash, CiVideoOn 
} from "react-icons/ci";

export class IconHelper {
    static icons = [
        <CiApple size={50} />,
        <CiAlarmOn size={50} />,
        <CiBookmark size={50} />,
        <CiBoxList size={50} />,
        <CiCalendar size={50} />,
        <CiCamera size={50} />,
        <CiCloud size={50} />,
        <CiCoffeeCup size={50} />,
        <CiCreditCard1 size={50} />,
        <CiDollar size={50} />,
        <CiDumbbell size={50} />,
        <CiEdit size={50} />,
        <CiFaceSmile size={50} />,
        <CiFlag1 size={50} />,
        <CiGift size={50} />,
        <CiGlobe size={50} />,
        <CiHeadphones size={50} />,
        <CiHome size={50} />,
        <CiImageOn size={50} />,
        <CiLock size={50} />,
        <CiMail size={50} />,
        <CiMapPin size={50} />,
        <CiMobile3 size={50} />,
        <CiMusicNote1 size={50} />,
        <CiPen size={50} />,
        <CiPlane size={50} />,
        <CiStar size={50} />,
        <CiTrash size={50} />,
        <CiVideoOn size={50} />
    ];

    static getRandomIcon() {
        return this.icons[Math.floor(Math.random() * this.icons.length)];
    }
}
