//Iconos para la UI general de las ventanas
import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegUser, } from "react-icons/fa";
import { RiArchive2Line } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiBarcodeBoxLine } from "react-icons/ri";
//Iconos para la UI del POS para cada producto
import { FiCoffee } from "react-icons/fi";
import { MdOutlineCookie } from "react-icons/md";
import { PiBreadFill } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { PiBowlFoodBold } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiChipsBag } from "react-icons/gi";
import { SlEarphones } from "react-icons/sl";
import { LuSoup } from "react-icons/lu";
import { LuMilk } from "react-icons/lu";
import { LuCupSoda } from "react-icons/lu";
import { FaBottleWater } from "react-icons/fa6";
import { LuApple } from "react-icons/lu";
import { CiIceCream } from "react-icons/ci";
import { PiCarrotBold } from "react-icons/pi";
import { TbCandleFilled } from "react-icons/tb";
import { PiCigarette } from "react-icons/pi";
import { MdError } from "react-icons/md";
import { CiLollipop } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";
import { LuDonut } from "react-icons/lu";
import { FaBowlRice } from "react-icons/fa6";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

const iconsMap = {
    home: FiHome,
    cart: FiShoppingCart,
    admin: RiAdminLine,
    inventory: MdOutlineInventory2,
    user: FaRegUser,
    product: RiArchive2Line,
    category: RiDashboardHorizontalLine,
    rol: RiShieldCheckLine,
    report: RiGitRepositoryLine,
    code: RiBarcodeBoxLine,
    archive: RiArchive2Line,
    
    Cafe: FiCoffee,
    Galletas: MdOutlineCookie,
    Pan: PiBreadFill,
    Salud: MdOutlineHealthAndSafety,
    Frutas: GiFruitBowl,
    Comida: PiBowlFoodBold,
    Rapido: IoFastFoodOutline,
    Sabritas: GiChipsBag,
    Takis: GiChipsBag,
    Audifonos: SlEarphones,
    Sopas: LuSoup,
    Lacteos: LuMilk,
    Refrescos: LuCupSoda,
    Agua: FaBottleWater,
    Fruta: LuApple,
    Helado: CiIceCream,
    Verdura: PiCarrotBold,
    Vela: TbCandleFilled,
    Cigarro: PiCigarette,
    Error: MdError,
    Dulce: CiLollipop,
    Lipstick: GiLipstick,
    Donas : LuDonut,
    Arroz: FaBowlRice,

    Trash: FaRegTrashAlt,
    Plus: FaPlus,
    Minus: FaMinus,
    Card : FaRegCreditCard,
    Cash : BsCash,
    Like : AiFillLike,
    back : IoArrowBack 
}

export type IconName = keyof typeof iconsMap

interface IconProps {
    value: IconName,
    className?: string
}

export function IconComponent( { value, className }: IconProps) {
    const Icon = iconsMap[value]
    
    if(!Icon){
        console.warn(`Icono no encontrado para el valor: ${value}`)
        return null
    }
    return <Icon className={className}/>
}