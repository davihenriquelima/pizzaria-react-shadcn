import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <RocketIcon className="mr-2"/>
                    <p>carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5">
                    ...
                </div>
                <Separator className="my-4"/>
                <div className="flex justify-between items-center text-sm">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>
                <Separator className="my-4"/>
                <div className="text-center">
                    <Button>Finalizar Compra</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}