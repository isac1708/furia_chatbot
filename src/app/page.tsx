"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import { useState } from "react"; 

export default function Home() {

  

const [userInput, setUserInput] = useState("");
const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);


const handleSendMessage = async () => {
  if (!userInput.trim()) return;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/furiachat`, {
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
  <div className="flex items-center gap-3">
    <Image src="/furIA_icon.svg" alt="FurIA Logo" width={40} height={40} />
    <div className="flex flex-col">
      
    </div>
  </div>
</CardHeader>
        <CardContent className="space-y-4 overflow-y-auto">
       
        {messages.map((msg, index) => (
  <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    <div className={`flex gap-2 text-sm px-3 py-2 rounded-xl max-w-[70%] ${
      msg.role === "user"
      ? "bg-green-600 text-slate-200"
      : "bg-[#2C2C2C] text-slate-100"
    }`}>
      {msg.role === "bot" && (
        <Avatar className="w-6 h-6">
          <AvatarFallback />
         <AvatarImage src="/assets/icons/furia-seeklogo.svg" alt="Avatar feliz" />
        </Avatar>
      )}
      <p>{msg.content}</p>
      {msg.role === "user" && (

        <Avatar className="w-6 h-6">
          <AvatarFallback>Is</AvatarFallback>
           <AvatarImage src="/assets/icons/avatar-happy.svg" alt="Avatar feliz" />
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

