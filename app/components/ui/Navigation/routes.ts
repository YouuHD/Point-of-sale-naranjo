import { IconName } from "../icon"

type Route = {
    name: string
    path: string
    icon: IconName
    sub?: Route[]
}

export const routes: Route[] = [
    {
        name: 'Inicio',
        path: '/',
        icon: 'home',
    },
    {
        name: 'Punto de Venta',
        path: '/pos',
        icon: 'cart',
    },
    {
        name: 'Inventario',
        path: '/inventory',
        icon: 'inventory',
    },
    {
        name: 'Administración',
        path: '/admin',
        icon: 'admin',
        sub: [
            {
                name: 'Usuarios',
                path: '/admin/users',
                icon: 'user',
            },
            {
                name: 'Productos',
                path: '/admin/products',
                icon: 'product',
            },
            {
                name: 'Categorias',
                path: '/admin/categories',
                icon: 'category',
            },
            {
                name: 'Roles y permisos',
                path: '/admin/rol',
                icon: 'rol',
            },
            {
                name: 'Reportes',
                path: '/admin/report',
                icon: 'report',
            },
            {
                name: 'Código de barras',
                path: '/admin/code',
                icon: 'code',
            },

        ]
    }

]
