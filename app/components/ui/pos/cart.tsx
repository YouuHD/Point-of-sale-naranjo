import { Button } from "../button";
import ListComponent from "./list"
import {IconComponent, IconName} from "~/components/ui/icon";
import { useState } from "react";
import PaymentView from "./paymentView";
import CompleteView from "./completeView"

type Props = {
    productos: {
        id: string;
        nombre: string;
        precio: number;
        cantidad: number;
        category: IconName;
    }[];
    subtotal: number;
    aumentarCantidad: (id: string) => void;
    disminuirCantidad: (id: string) => void;
    clearCart: (id:string) => void;
}

type CheckoutStep = 
 | "cart"
 | "payment"
 | "completed";


export default function Cart({productos, subtotal, aumentarCantidad, disminuirCantidad, clearCart}: Readonly<Props>){


    const [checkoutStep , setCheckoutStep] = useState<CheckoutStep>("cart");

    const isCartEmpty = productos.length === 0;
    
    const [cashReceived, setCashReceived] = useState<number>(0);
    //Calcular subtotal
    const cambio = Math.max(0, cashReceived - subtotal)

    const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");

    return(
        <aside className="hidden w-[400px] shrink-0 flex-col border-l border-border bg-card lg:flex">
            <div className="flex h-full min-h-0 flex-col">
                {/* Encabezado */}
                <section className="flex items-center justify-between border-b border-border px-4 py-3">
                    <div className="flex items-center gap-2">
                        <h2 className="text-base font-semibold text-foreground">Compra Actual</h2>
                    </div>
                </section>
                {
                    checkoutStep === "cart" && (
                        <div className="flex h-full min-h-0 flex-col"> 
                            {/* Si no hay productos en el carrito se muestra el siguiente texto */}
                            {isCartEmpty && (
                                <div className="px-4 py-3">
                                <div className="flex flex-col items-center gap-2 py-16 text-center">
                                    <span className="flex size-12 items-center justify-center rounded-full bg-secondary">
                                        <IconComponent className="w-6 h-6" value="cart" />
                                    </span>
                                    <p className="text-sm text-muted-foreground">Tu carrito está vacío. Presiona en un producto para agregarlo.
                                        
                                    </p>
                                </div>
                            </div>
                            )}

                            {/* Listado de productos */}

                            <section className="min-h-0 flex-1 overflow-y-auto pt-3">
                                {productos.map((producto) => (
                                    
                                    <ListComponent
                                        key={producto.id}
                                        textTitle={producto.nombre}
                                        price={`$${producto.precio}`}
                                        cantidad={producto.cantidad}
                                        iconContent={<IconComponent className="w-5 h-5" value={producto.category} />}
                                        deleteText={
                                            producto.cantidad > 1
                                            ? `Minus`
                                            : `Trash`
                                        }
                                        onDelete={() => disminuirCantidad(producto.id)}
                                        onIncrease={() => aumentarCantidad(producto.id)}
                                                    >
                                    </ListComponent>
                                ))}
                            </section>
                            
                            <section className="border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                                {/* Precio total */}
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Total</span>
                                    <span className="text-xl font-bold tabular-nums text-foreground">${subtotal.toFixed(2)}</span>
                                </div>
                                <Button 
                                    className="w-full mt-2.5" variant="default"
                                    disabled={isCartEmpty}
                                    onClick={() => setCheckoutStep("payment")}>Cobrar</Button>
                            </section>
                        </div>
                    )
                }
                {
                    checkoutStep === "payment" && (
                        <div className="flex h-full min-h-0 flex-col">
                            <PaymentView 
                                subtotal={subtotal}
                                onBack={() => setCheckoutStep("cart") }
                                onComplete={() => setCheckoutStep("completed") }
                                cashReceived={cashReceived}
                                setCashReceived={setCashReceived}
                                cambio={cambio}
                                paymentMethod={paymentMethod}
                                setPaymentMethod={setPaymentMethod}
                                />
                        </div>
                    )
                }

                {
                    checkoutStep === "completed" && (
                        <div className="flex h-full min-h-0 flex-col">
                            <CompleteView 
                                subtotal={subtotal}
                                productos={productos}
                                onNewSale={() => {
                                    setCheckoutStep("cart")
                                } }
                                clearCart={() => clearCart("")}
                                cashReceived={cashReceived}
                                cambio={cambio}
                                paymentMethod={paymentMethod}
                                />
                        </div>
                    )
                }
                

            </div>

        </aside>

    )}