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
  id?: string,
  textTitle: string,
  textDescription: string,
  texContent: string,
  textFooter: string | React.ReactNode,
  iconContent: React.ReactElement,
  children?: React.ReactNode,
  className?: string,
}

export default function CardPOS({className, textTitle, textDescription, iconContent, children, id}: Readonly<Props>) {
  return (
    <Card id={id} className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
            <CardTitle >{textTitle}</CardTitle>
            {iconContent}
        </div>
        <CardDescription>{textDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-1 flex-col pb-5">
        {children}
      </CardContent>
    </Card>
  )
}