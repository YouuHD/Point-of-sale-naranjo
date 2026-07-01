import { IconComponent } from "../icon"
"use client"

type Props = {
    textTitle: string,
    price: string,
    cantidad: number,
    iconContent: React.ReactNode,
    className?: string,
    children?: React.ReactNode,
    deleteText?: any,
    onDelete?: () => void,
    onIncrease?: () => void,

}


export default function ListComponent({className, textTitle, price, cantidad, iconContent, children, deleteText, onDelete, onIncrease}: Readonly<Props>) {
    return (
            <li className="flex items-center gap-3 rounded-2xl border border-border  p-2 mx-2 text-sm font-medium text-color-[#dc932e] dark:text-white mb-2">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e5e5e5] text-color-[#dc932e] dark:text-white">
                    {iconContent}
                </span>
                <div className="min-w-0 flex-1">
                    <p className="font-medium">{textTitle}</p>
                    <p className="text-xs text-muted-foreground">{price}</p>
                </div>

                <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            className="text-xs text-muted-foreground underline transition-colors hover:text-primary"
                            onClick={onDelete}
                        >
                            <IconComponent value={deleteText}/>
                        </button>
                        <span className="w-5 text-center text-sm font-semibold tabular-nums text-foreground">{cantidad}</span>
                        <button
                            type="button"
                            className="text-xs text-muted-foreground underline transition-colors hover:text-primary"
                            onClick={onIncrease}
                        >
                            <IconComponent value={"Plus"}/>
                        </button>
                    </div>
            </li>
        
    )
}