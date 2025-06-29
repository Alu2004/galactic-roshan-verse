
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "*Beep boop beep* 🤖 Greetings, human! R2-D2 here, Roshan's digital assistant droid. How may I assist you today? *whirrs mechanically*", 
      isBot: true 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = [
    "*Beep beep boop* That's a great question! Let me process that... *mechanical whirring* 🤖",
    "*R2-D2 sounds* I can help you with information about Roshan's projects! *excited beeping*",
    "*Boop beep beep* Roshan is quite skilled in full-stack development! *proud whistling*",
    "*Mechanical chirping* Would you like to know more about his technical expertise? *curious beeping*",
    "*Whirrs and beeps* I'm just a simple astromech droid, but I'll do my best to help! *helpful bleeping*",
    "*R2-D2 excitement sounds* That sounds like an excellent project collaboration opportunity! *enthusiastic beeping*"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-black/90 border-cyan-400/50 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              <CardTitle className="text-cyan-300 text-sm">R2-D2 Assistant</CardTitle>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20 w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-400/30'
                        : 'bg-blue-500/20 text-blue-100 border border-blue-400/30'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyan-400/30">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="bg-black/20 border-cyan-400/30 text-cyan-100 placeholder-cyan-400/50 focus:border-cyan-400 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 w-10 h-10"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
