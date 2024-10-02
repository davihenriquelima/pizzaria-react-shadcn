import { Logo } from "@/components/Logo"
import { ModeToggle } from "@/components/mode-toggle"
import { CartSidebar } from "@/components/cart/Sidebar"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo/>
            </div>
            <div className="flex items-center gap-3">
                <ModeToggle/>
                <CartSidebar/>
            </div>
        </header>
    )
}