import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui";


function Authorization() {
    const form = useForm()
    return (
        <div className="flex min-w-full min-h-[95vh] justify-center items-center">
            <div className="border rounded-2xl p-12 flex flex-col w-[50vw] h-[30vh]">
                <Form {...form}>
                    <FormField name="authorization" control={form.control} render={() => (
                        <FormItem className="flex flex-col w-full h-full">
                            <FormLabel className="text-4xl font-bold">Авторизоваться</FormLabel>
                            <FormControl>
                                <Input placeholder="Имя пользователя"/>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="Пароль" type="password"/>
                            </FormControl>
                            <FormDescription>Или войти с помощью</FormDescription>
                            <FormMessage>тут должен быть вход через гитхаб/гугл</FormMessage>
                        </FormItem>
                    )}/>
                    <Button type="submit" className="mt-4 text-xl">Войти</Button>
                </Form>
            </div>
        </div>
    )
}

export default Authorization

