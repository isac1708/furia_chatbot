"use client";
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
import { FuriaIcon, AvatarHappy } from "../assets/icons";

import { useState } from "react"; 

export default function Home() {

  

const [userInput, setUserInput] = useState("");
const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);


const handleSendMessage = async () => {
  if (!userInput.trim()) return;

  try {
    const response = await fetch("http://localhost:3001/furiachat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userInput },
      { role: "bot", content: data.reply }
    ]);
    
    setUserInput("");

  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};
  return (
    <div
      className="flex min-h-screen bg-black items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Furia_background.png')" }}>
      <Card className="w-[570px] h-[635px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle className="text-2xl">FurIA ChatBot</CardTitle>
          <CardDescription>
            Tire suas dúvidas sobre produtos e da maior equipe de CS do Brasil!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 overflow-y-auto">
       
        {messages.map((msg, index) => (
  <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    <div className={`flex gap-2 text-sm px-3 py-2 rounded-xl max-w-[70%] ${
      msg.role === "user" ? "bg-green-600 text-slate-200" : "bg-zinc-800 text-slate-100"
    }`}>
      {msg.role === "bot" && (
        <Avatar className="w-6 h-6">
          <AvatarFallback />
          <Image src={FuriaIcon} alt="Furia Icon" width={24} height={24} />
        </Avatar>
      )}
      <p>{msg.content}</p>
      {msg.role === "user" && (
        <Avatar className="w-6 h-6">
          <AvatarFallback>Is</AvatarFallback>
          <AvatarImage asChild>
           <Image src={AvatarHappy} alt="Furia Icon" width={24} height={24}/>
            </AvatarImage>
        </Avatar>
      )}
    </div>
  </div>
))}
        </CardContent>
        <CardFooter className="space-x-2">
        <Input
          placeholder="Como posso ajudar?"
          className="w-full"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}/>

          <Button type="button" onClick={handleSendMessage}>Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

