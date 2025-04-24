import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FuriaIcon } from "../assets/icons";

export default function Home() {
  return (
    <div
      className="flex min-h-screen bg-black items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Furia_background.png')" }}>
      <Card className="w-[570px] h-[635px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>FurIA ChatBot</CardTitle>
          <CardDescription>
            Tire suas dúvidas sobre produtos e da maior equipe de CS do Brasil!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 overflow-y-auto">
       
          <div className="flex justify-end">
            <div className="flex gap-2 text-slate-200 text-sm bg-green-600 px-3 py-2 rounded-xl max-w-[70%]">
              <p>Quando será o próximo campeonato?</p>
              <Avatar className="w-6 h-6">
                <AvatarFallback>Is</AvatarFallback>
                <AvatarImage src="https://github.com/isac1708.png" alt="Isac" />
              </Avatar>
            </div>
          </div>

          
          <div className="flex justify-start">
            <div className="flex gap-2 text-slate-100 text-sm bg-zinc-800 px-3 py-2 rounded-xl max-w-[70%]">
              <Avatar className="w-6 h-6">
                <AvatarFallback></AvatarFallback>
                <Image src={FuriaIcon} alt="Furia Icon" width={24} height={24} />
              </Avatar>
              <p>
                O próximo campeonato será no dia 10 de maio! Fique ligado nas redes sociais da FURIA. 🐍
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Como posso ajudar?" className="w-full" />
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

