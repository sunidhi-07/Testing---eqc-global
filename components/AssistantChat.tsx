
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';

const AssistantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Welcome to EQC Global. I'm your human potential assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsLoading(true);
    const aiText = await getAssistantResponse(userMsg);
    setIsLoading(false);
    
    setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          <div className="bg-primary p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">E</div>
              <div>
                <h4 className="font-bold text-sm">EQC Assistant</h4>
                <p className="text-[10px] text-slate-400">Human-Centric AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/50 text-slate-400 p-4 rounded-3xl text-xs flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-50 rounded-2xl p-2 border border-slate-100">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about EQ or Courses..."
                className="flex-grow text-sm bg-transparent border-none px-4 py-2 focus:ring-0 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-primary/20 transition-all group relative border-4 border-white"
        >
          <div className="absolute bottom-full mb-4 right-0 bg-primary text-white text-[10px] font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask EQC Global AI
          </div>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AssistantChat;
