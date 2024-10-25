import { Steps } from "@/types/CheckoutSteps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckouStore } from "@/stores/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StatesProvider, useStatesCtx } from "@/contexts/StatesProvider";

const formSchema = z.object({
    street:z.string().min(2, 'Preencha seu endereço'),
    number:z.string().min(1, 'Digite o número'),
    complement: z.string().optional(),
    district: z.string().min(2, 'Preencha seu bairro'),
    city: z.string().min(2, 'Preencha sua cidade'),
    state: z.string().min(1, 'Preencha seu estado')
})

type FormData = z.infer<typeof formSchema>

type Props = {
    setStep:Dispatch<SetStateAction<Steps>>
}

export const StepAddressComp = ({setStep}:Props) => {

    const {address, setAddress} = useCheckouStore(state => state);
    const locationsCtx = useStatesCtx();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    })

    const onSubmit = (values:FormData) => {
        setAddress(values)
        setStep('finish')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} >
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        placeholder="Rua São Longuinho"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        placeholder="nº"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="district"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        placeholder="digite seu bairro"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select 
                                        defaultValue={field.value}  
                                        onValueChange={(value) => {
                                            field.onChange(value); // Atualiza o formulário com o valor selecionado
                                            locationsCtx.handleStateChange(value); // Passa o valor diretamente
                                        }}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="selecione o estado"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {locationsCtx.states.map((item)=> (
                                                <SelectItem value={item.code}>{item.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>  
                                        <SelectTrigger>
                                            <SelectValue placeholder="selecione a cidade"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {locationsCtx.cities.map((item)=> (
                                                <SelectItem value={item.name}>{item.name}</SelectItem>
                                            ))} 
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="complement"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        placeholder="ex.: casa"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <Button onClick={()=>setStep('user')}>
                        <p className="text-3xl">&laquo;</p>
                    </Button>
                    <Button type="submit" >
                        <p className="text-3xl">&#10003;</p>
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export const StepAddress = ({setStep}:Props) => {
    return (
        <StatesProvider>
            <StepAddressComp setStep={setStep}/>
        </StatesProvider>
    )
}