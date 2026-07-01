import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { useLocation } from '@remix-run/react'
import { IconComponent, IconName } from "../icon";

export default function Header(){
    const location = useLocation();
    
    type PagePaths = 
        '/' | '/pos' | '/new_pos' | '/inventory' | 
        '/admin' | '/admin/users' | 
        '/admin/products' | '/admin/categories' | 
        '/admin/rol' | '/admin/report' | '/admin/code';
    
    type PageNames = 
    'Dashboard' | 'Punto de Venta' | 
    'Inventario' | 'Administración' | 
    'Usuarios' | 'Productos' | 
    'Categorias' | 'Roles y permisos' | 
    'Reportes' | 'Código de barras' | 
    'Página Desconocida';

    const pageName: Record<PagePaths, PageNames> = {
        '/': 'Dashboard',
        '/pos': 'Punto de Venta',
        '/new_pos': 'Punto de Venta',
        '/inventory': 'Inventario',
        '/admin': 'Administración',
        '/admin/users': 'Usuarios',
        '/admin/products': 'Productos',
        '/admin/categories': 'Categorias',
        '/admin/rol': 'Roles y permisos',
        '/admin/report': 'Reportes',
        '/admin/code': 'Código de barras',
    };

    const currentPath  = location.pathname as PagePaths;
    const currentPageName = pageName[currentPath] || "Página Desconocida";
    

    const iconContent: Record<string, IconName> = {
        '/': 'home',
        '/pos': 'cart',
        '/new_pos': 'cart',
        '/inventory': 'inventory',
        '/admin': 'admin',
        '/admin/users': 'user',
        '/admin/products': 'product',
        '/admin/categories': 'category',
        '/admin/rol': 'rol',
        '/admin/report': 'report',
        '/admin/code': 'code',
        
    }

    const curretnIcon = iconContent[currentPath] || 'archive' as IconName;

    return (
        <header className="sticky top-0 z-50 flex h-14 lg:h-[60px] min-h-[60px] items-center justify-between gap-2 border-b  bg-[#fafbfb] px-6 dark:bg-gray-800/40">

            <div className="flex justify-between items-center gap-2">
                <IconComponent value={curretnIcon}/>
                <h1 className="text-lg font-semibold text-gray-800 md:text-2x1">{currentPageName}</h1>
            </div>
            
            <div className="flex items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            </div>
        </header>
    )   
}