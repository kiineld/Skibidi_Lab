import {Button, buttonVariants} from "@/components/ui";
import {ArrowRight, User} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";

export function Header (){
    return(
        <div className="flex justify-center items-center min-h-[4vh]">
            {/* LEFT PART OF HEADER */}
            <div className="gap-2 flex mr-auto">
                <Button variant="ghost">О нас</Button>
                <Button variant="ghost">О нашем проекте</Button>
                <Button variant="ghost">Контакты</Button>
                <Button variant="ghost">Скачать</Button>
            </div>

            {/* RIGHT PART OF HEADER */}
            <div className="gap-2 flex">
                <a href="/login" className={buttonVariants({variant: "default", className: "group relative gap-2"})}>
                    Войти в аккаунт
                    <Separator orientation="vertical"/>
                    <User className="relative group-hover:opacity-0 duration-250 transition"/>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 duration-300 transition absolute right-4 -translate-x-2 group-hover:translate-x-0"/>

                </a>
                {/*<Button variant="default" className="group relative gap-2">*/}
                {/*    Войти в аккаунт*/}
                {/*    <Separator orientation="vertical"/>*/}
                {/*    <User className="relative group-hover:opacity-0 duration-250 transition"/>*/}
                {/*    <ArrowRight className="opacity-0 group-hover:opacity-100 duration-300 transition absolute right-4 -translate-x-2 group-hover:translate-x-0"/>*/}
                {/*</Button>*/}
            </div>
        </div>
    )
}