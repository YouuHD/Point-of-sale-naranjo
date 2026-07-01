import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/general/tabs"
type Props = {
    option_1: string,
    option_2: string,
    content_1?: React.ReactNode,
    content_2?: React.ReactNode,
    onValueChange?: (value: string) => void
}
export default function TabsPos({option_1, option_2, content_1, content_2, onValueChange}: Readonly<Props>) {
    return(
        <Tabs defaultValue={option_1} className="w-full" onValueChange={onValueChange}>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value={option_1}>{option_1}</TabsTrigger>
                <TabsTrigger value={option_2}>{option_2}</TabsTrigger>
            </TabsList>
            {content_1 && <TabsContent value={option_1}>{content_1}</TabsContent>}
            {content_2 && <TabsContent value={option_2}>{content_2}</TabsContent>}
            
            
        </Tabs>
    )
}

