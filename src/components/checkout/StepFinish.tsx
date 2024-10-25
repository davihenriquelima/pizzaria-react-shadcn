import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";
import { useCheckouStore } from "@/stores/checkout-store";
import Link from "next/link";

export const StepFinish = () => {
    const {name} = useCheckouStore(state => state);

    const message = generateMessage();

    const linkWA = `https://wa.me//${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURI(message)}`

    return (
        <div className="flex flex-col">
            <p className="text-2xl">Pronto, <strong>{name}</strong>! falta pouco. 😃</p> <p className="text-sm mt-2">Agora clique em Enviar e um de nossos atendentes irá receber seu pedido.</p>
            <Button className="ml-auto mt-2">
                <Link target="_blank" href={linkWA}>Enviar</Link>
            </Button>
        </div>
    )
}