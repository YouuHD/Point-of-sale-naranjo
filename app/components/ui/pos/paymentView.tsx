import { useState } from "react";
import { Button } from "../button";
import TabsPos from "~/components/ui/pos/tabsPos";
import { Input } from "../input";
import { Badge } from "../badge";
import { IconComponent } from "../icon";

type Props = {
    subtotal : number;
    onBack: () => void;
    onComplete :() => void;
    cashReceived: number;
    setCashReceived: (value: number) => void;
    cambio: number;
    paymentMethod: "cash" | "card";
    setPaymentMethod: (value: "cash" | "card") => void;
}

export default function PaymentView({subtotal, onBack, onComplete, cashReceived, setCashReceived, cambio, setPaymentMethod, paymentMethod}: Readonly<Props>) {

    // const [cashReceived, setCashReceived] = useState<number>(0);
    // //Calcular subtotal
    //const cambio = Math.max(0, cashReceived - subtotal)

    //Botones
    const handleQuickAmount = (amount:number) => {
        setCashReceived(amount);
    }
    // console.log(paymentMethod)
    // const canCompleteSale =
    // paymentMethod === "cash"
    //     ? cashReceived >= subtotal
    //     : paymentMethod === "card";
    // console.log(paymentMethod)

    return (

        <>
            <section className="flex h-full min-h-0 flex-col px-4 py-3">
            <button onClick={onBack}>
                <IconComponent
                    className="w-5 h-5 mb-5"
                    value="back"
                />
            </button>

            <h2 className="">Selecciona el método de Pago</h2>

            <section className="min-h-0 flex-1 overflow-y-auto pt-3">
                <TabsPos 
                    option_1="Efectivo" 
                    option_2="Tarjeta"
                    //evento
                    onValueChange={(value) => {
                        setPaymentMethod(value as "cash" | "card");
                    }}
                    //Si funciona esta sección, pero aun no decido si dejarlo como tabs o como botones
                    content_1={<>
                        <span>Dinero recibido</span>
                        <Input
                            className="max-w-screen-sm mb-4" placeholder="Ingresa la cantidad recibida"
                            value={cashReceived || ""}
                            onChange={(e) => setCashReceived(Number(e.target.value))
                            } 
                            
                        />
                        <div className="flex w-full flex-wrap gap-2 px-1 pb-4">
                            <Badge variant="default" onClick={() => handleQuickAmount(20)}>$20</Badge>
                            <Badge variant="default" onClick={() => handleQuickAmount(50)}>$50</Badge>
                            <Badge variant="default" onClick={() => handleQuickAmount(100)}>$100</Badge>
                            <Badge variant="default" onClick={() => handleQuickAmount(200)}>$200</Badge>
                            <Badge variant="default" onClick={() => handleQuickAmount(500)}>$500</Badge>
                            <Badge variant="default" onClick={() => handleQuickAmount(subtotal)}>Exacto</Badge>

                        </div>
                        <div className="mt-3 flex items-center justify-between rounded-xl bg-accent px-4 py-3">
                            <span className="text-sm font-medium text-accent-foreground">
                                Cambio: 
                            </span> 
                            <span className="text-lg font-bold tabular-nums text-accent-foreground">
                                ${cambio.toFixed(2)} 
                            </span> 
                            
                        </div>
                    

                    </>}
                    content_2={<>
                    
                    </>}
                />
                <div className="rounded-2xl border border-border bg-card p-4 mt-4">
                    <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                        <span>Subtotal: </span>
                        <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
                        <span>Total: </span>
                        <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                </div>
            </section>
            
            <section className="border-t border-border py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <Button className="w-full mt-2.5" onClick={onComplete}>
                    Completar venta
                </Button>
            </section>

            
        </section>
        </>
        
    );
}