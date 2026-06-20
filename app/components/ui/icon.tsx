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