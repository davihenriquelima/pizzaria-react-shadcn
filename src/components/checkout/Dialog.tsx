"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Progress } from "@/components/ui/progress"
import { StepUser } from "@/components/checkout/StepUser";
import { StepAddress } from "@/components/checkout/StepAddress";
import { StepFinish } from "@/components/checkout/StepFinish";
import { Steps } from "@/types/CheckoutSteps";

type Props = {
    open:boolean;
    onOpenChange:(open: boolean) => void;
}

export const CheckoutDialog = ({open, onOpenChange}:Props) => {
    const [step, setStep] = useState<Steps>('user');

    let progressPct = 0;
    switch(step) {
        case 'user': 
            progressPct = 30;
            break;
        case 'address': 
            progressPct = 70
            break;
        case 'finish': 
            progressPct = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para Whatsapp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                <div className="flex fle-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep}/>}
                    {step === 'address' && <StepAddress setStep={setStep}/>}
                    {step === 'finish' && <StepFinish/>}
                </div>

            </DialogContent>
        </Dialog>
    )
}