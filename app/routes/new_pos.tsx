import type { MetaFunction } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Fragment } from "react/jsx-runtime";
import MainLayout from "~/components/ui/Layouts/mainLayout";
import CardPOS from "~/components/ui/pos/cardPos";
import  {IconComponent, IconName} from "~/components/ui/icon";
import {ScrollArea} from "~/components/ui/general/scrollArea";
import DialogPOS from "~/components/ui/pos/DialogPos";
import CardProduct from "~/components/ui/pos/cardProduct";
import { useState } from "react";
import  Cart from "~/components/ui/pos/cart";
import { Badge } from "~/components/ui/badge";

import { useLoaderData } from "@remix-run/react";
import  prisma  from "prisma/prisma";
import useFilterProducts from "~/hooks/products/useFilterProduct";

export const meta: MetaFunction = () => {
  return [
    { title: "Punto de venta" },
    { name: "description", content: "Aquí puedes realizar las ventas de tus productos." },
  ];
};

export const loader = async () => {
    const categories = await prisma.category.findMany();
    const productsAndCategories = await prisma.product.findMany({
        include: {
            category: true,
        },
    });
    
    return {
        products: productsAndCategories
    }
}




export default function Index() {
    const [productos, setProductos] = useState<any[]>([])
    const { products } = useLoaderData<typeof loader>();
    const { searchTerm, setSearchTerm, filteredProducts } = useFilterProducts(products)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const [nombre, precio, categoria] = button.name.split("/")
    const productId = button.id

    setProductos((prev) => {
        const productoExistente = prev.find(
            (producto) => producto.id === productId
        );

        //Si existe en el card
        if (productoExistente) {
            return prev.map((producto) =>
                producto.id === productId
                    ? {
                        ...producto,
                        cantidad: producto.cantidad + 1,
                    }
                    : producto
            );
        }
        //Si no existe en el card, lo agregamos
        return [
            ...prev,
            {
                id: productId,
                nombre: nombre,
                precio: precio,
                category: categoria,
                cantidad: 1
            }
        ];  
    }   
    )}

    const aumentarCantidad = (id: string) => {
        setProductos((prev) =>
            prev.map((producto) =>
                producto.id === id
                    ? {
                        ...producto,
                        cantidad: producto.cantidad + 1,
                    }
                    : producto
            )
        );
    };

    const disminuirCantidad = (id: string) => {
        setProductos((prev) =>
            prev
                .map((producto) =>
                    producto.id === id
                        ? {
                            ...producto,
                            cantidad: producto.cantidad - 1,
                        }
                        : producto
                )
                .filter((producto) => producto.cantidad > 0)
        );
    };

    //Cantidad total
    const subtotal = productos.reduce((acumulador, producto) => {
        return acumulador + producto.precio * producto.cantidad;
        }, 0);

    //bages para seleccionar la categoria
    const handleQuickCategory = useFilterProducts(products)

    const clearCart = () => {
        setProductos([]);
        
    };



  return (
    // <MainLayout className="flex flex-col bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<Fragment></Fragment>}>
    <MainLayout className="flex flex-col bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<Fragment></Fragment>}>
      {/* grid w-full grid-cols-3 gap-2.5 p-2.5 */}
      <div className="flex w-full gap-2.5 pl-2.5  h-[calc(100vh-80px)]">
        {/* className="col-span-2 h-full" */}
        {/* flex-1 col-span-2 h-full lg:m-1 */}
        <CardPOS id="Punto de venta"
          className="flex flex-1 h-full min-h-0 flex-col"
          textTitle="Punto de Venta" 
          textDescription="Realiza las ventas de tus productos aquí." 
          texContent="" 
          textFooter=""
          iconContent={<IconComponent value="cart" />}
          >
            <Input className="max-w-screen-sm mb-4 " placeholder="Ingresa codigo de barras o el nombre del producto" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* productos del inventario */}
            <div className="flex w-full flex-wrap gap-2 px-1">
                <Badge variant="default" onClick={() => setSearchTerm("")}>Todos</Badge>
                <Badge variant="secondary" onClick={() => setSearchTerm("Sabritas")}>Sabritas</Badge>
                <Badge variant="secondary" onClick={() => setSearchTerm("Refrescos")}>Refrescos</Badge>
                <Badge variant="secondary"onClick={() => setSearchTerm("Galletas")}>Galletas</Badge>
                <Badge variant="secondary"onClick={() => setSearchTerm("Donas")}>Donas</Badge>
                <Badge variant="secondary"onClick={() => setSearchTerm("Jabon")}>Jabon</Badge>
                <Badge variant="secondary"onClick={() => setSearchTerm("Pan")}>Pan</Badge>
            </div>

            <ScrollArea className="flex-1 overflow-auto pt-2">
                <div className="grid grid-cols-2 gap-3  pb-6 pt-1 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

                    {filteredProducts.map((product) => (
                        
                    <button key={product.id} id={product.barCode}
                    name={`${product.name}/${product.price}/${product.category.name}`} onClick={handleClick}>
                        <CardProduct
                            className="rounded-2xl border-2 border-[#e5e5e5] text-left text-color-[#dc932e] dark:text-white text-sm hover:border-[#202020] dark:hover:border-[#dc932e] h-full"
                            textTitle={product.name}
                            textDescription={product.description}
                            texContent=""
                            textFooter=""
                            iconContent={<IconComponent className="w-7 h-7" value={product.category.name} />}
                            price={product.price}
                        >
                            
                        </CardProduct>
                    </button>
                ))}
                </div>
            </ScrollArea>
            
        </CardPOS>
    
        <Cart 
            productos={productos} 
            subtotal={subtotal} 
            aumentarCantidad={aumentarCantidad} 
            disminuirCantidad={disminuirCantidad}
            clearCart={clearCart}
            />
        
      </div>
   </MainLayout> 
    
  );
}
