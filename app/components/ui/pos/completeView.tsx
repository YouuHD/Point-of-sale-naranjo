import { useState } from "react";
import { Button } from "../button";
import TabsPos from "~/components/ui/pos/tabsPos";
import { Input } from "../input";
import { Badge } from "../badge";
import { IconComponent, IconName } from "../icon";

type Props = {
    subtotal : number;
    onNewSale :() => void;
    clearCart : () => void;
    productos: {
        id: string;
        nombre: string;
        precio: number;
        cantidad: number;
        category: IconName;
    }[];
    cashReceived: number;
    cambio: number;
    paymentMethod: "cash" | "card";
}


export default function CompleteView({subtotal, onNewSale, productos, clearCart, cashReceived, cambio, paymentMethod}: Readonly<Props>) {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    
    const handleCompleteSale = async () => {

    const venta = {
            fecha: new Date(),
            total: subtotal,
            productos: productos.map(p => ({
                productId: p.id,
                cantidad: p.cantidad,
                precio: p.precio
            }))
        };

        // // POST o action de Remix
        // await registrarVenta(venta);

        // setCheckoutStep("completed");
    }


    return (

        <>
            <section className="flex h-full min-h-0 flex-col px-4 py-3">
            
            <div className="flex flex-col items-center gap-2 pb-4 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent">
                    <IconComponent value="Cash"/>
                </span>
                <h2 className="text-lg font-semibold text-foreground">Compra realizada correctamente</h2>
                <p className="text-sm text-muted-foreground">
                    Orden #12345. {date.toLocaleDateString()}. {formattedTime}
                </p> 
            </div>

            <section className="min-h-0 flex-1 overflow-y-auto pt-3">

                <div className="rounded-2xl border border-dashed border-border bg-card p-4">
                     
                    <ul className="flex flex-col gap-2">
                        {productos.map((producto) => (
                            <li key={producto.id} className="flex items-center justify-between text-sm">
                                <p>{producto.nombre}</p>
                                <p className="text-muted-foreground">
                                    {producto.cantidad} x $
                                    {producto.precio}
                                </p>
                                <span className="font-medium">
                                    $
                                    {(
                                        producto.precio *
                                        producto.cantidad
                                    ).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-3 border-t border-border pt-3">
                        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                            <span>Tipo pago: </span>
                            <span className="tabular-nums">{paymentMethod === "cash" ? "Efectivo" : "Tarjeta"}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                            <span>Dinero recibido: </span>
                            <span className="tabular-nums">${cashReceived.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                            <span>Cambio: </span>
                            <span className="tabular-nums">${cambio.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                            <span>Subtotal: </span>
                            <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                            <span>Total: </span>
                            <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="border-t border-border py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <Button className="w-full mt-2.5" onClick={
                    () => {
                        clearCart();
                        onNewSale();
                        
                    }
                    
                    }>
                    Nueva venta
                </Button>
            </section>

            
        </section>
        </>
        
    );
}