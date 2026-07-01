"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

type Props = {
  textTitle: string,
  textDescription: string,
  texContent: string,
  textFooter: string | React.ReactNode,
  iconContent: React.ReactElement,
  children?: React.ReactNode,
  className?: string,
  price?: number,
}

export default function CardProduct({className, textTitle, textDescription, iconContent, children, price}: Readonly<Props>) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <span className="flex size-12 items-center justify-center rounded-xl color-white bg-[#e5e5e5]">
            {iconContent}
        </span>
        <CardTitle >{textTitle}</CardTitle>
      </CardHeader>
      <CardContent className="pb-1">
        <span className="w-5 text-center text-sm tabular-nums text-muted-foreground ">{textDescription}</span>
      </CardContent>
      <CardContent className="pb-5">
        
        <span className="w-5 text-center text-sm font-semibold tabular-nums text-foreground">${price}</span>
        {children}
      </CardContent>
    </Card>
  )
}