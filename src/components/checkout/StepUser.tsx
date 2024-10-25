import { Steps } from "@/types/CheckoutSteps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckouStore } from "@/stores/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name:z.string().min(2, 'Preencha seu nome')
});

type FormData = z.infer<typeof formSchema>

type Props = {
    setStep:Dispatch<SetStateAction<Steps>>;
}

export const StepUser = ({setStep}:Props) => {

    const {name, setName} = useCheckouStore(state => state)

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    })

    const onSubmit = (values:FormData) => {
        setName(values.name)
        setStep('address')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField 
                    control={form.control} 
                    name="name"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Seu Nome</FormLabel>
                            <FormControl>
                                <Input 
                                    {...field}
                                    autoFocus 
                                    placeholder="qual seu nome?"
                                    />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    <p className="text-3xl">&raquo;</p>
                </Button>
            </form>
        </Form>
    )
}