import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Phone, ExternalLink, Zap, Star } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  content: string;
  timestamp: Date;
  hasButtons?: boolean;
}

const SmartChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (role: 'bot' | 'user', content: string, hasButtons = false) => {
    setMessages(prev => [...prev, { role, content, timestamp: new Date(), hasButtons }]);
  };

  const quickActions = [
    { text: '☀️ Solar Quote', action: () => handleQuickAction('I want a quote for solar panels') },
    { text: '🔥 Heat Pump Info', action: () => handleQuickAction('Tell me about heat pumps and the £7,500 grant') },
    { text: '🪟 Window Prices', action: () => handleQuickAction('How much do new windows cost?') },
    { text: '📞 Call Me Back', action: () => handleQuickAction('Please arrange a callback for my project') }
  ];

  const handleQuickAction = (message: string) => {
    addMessage('user', message);
    handleBotResponse(message);
  };

  const handleBotResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Check for OpenAI key
    const openAIKey = (window as any).EVO_OPENAI_KEY;
    
    if (openAIKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAIKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: `You are EvoBot, the intelligent assistant for EvoHome Improvements Ltd (Company No. 14881322).

COMPANY PROFILE:
- EvoHome Improvements Ltd - "The Smarter Way to Improve Your Home"
- Founded on 30+ years industry expertise by William Bowry
- Phone: 0333 004 0195 | WhatsApp: 07895 545248 | Email: office@evohomeimprovements.co.uk
- Coverage: Hampshire, Surrey, Sussex, Dorset, Wiltshire (primary) + remote consultations nationwide
- Mission: Protect homeowners, support skilled tradespeople, restore industry pride

UNIQUE VALUE PROPOSITIONS:
- "We're not a directory" - real project oversight and support
- Vetted professionals through insurance checks, qualification reviews, project inspections
- 100% homeowner protection with dedicated customer service
- CRB-checked representatives for safety
- Neighbourhood Scam Check service to protect against cold calls/doorstep pitches
- Single point of contact throughout projects

SERVICES & PRICING:
- Solar Power: £5,000-£8,000, saves £1,200+/year, 6-9 year payback, 25-year warranty
- Air Source Heat Pumps: Up to £7,500 government grant, 300-400% efficiency, saves £1,500+/year
- Ground Source Heat Pumps: Highest efficiency, saves £1,800+/year, 20+ year lifespan
- Windows: Reduce heat loss 50%, saves £600+/year, 10-year warranty
- Insulation: Saves £500+/year, 40% heating bill reduction, 25-year warranty
- Driveways: 3-7 days installation, 10-year warranty
- Kitchens/Bathrooms: 7-14 days, full design service, 10-year warranty

GRANTS & INCENTIVES:
- Heat Pumps: Up to £7,500 Boiler Upgrade Scheme
- Solar: Smart Export Guarantee payments for excess energy
- We handle all grant applications

CUSTOMER TESTIMONIALS:
- Dean Butler: "Excellent service very professional. So impressed I recommend EvoHome to my cousin"
- Michelle Comrie: "EvoHome sorted it quickly and professionally with no fuss. Excellent customer service"
- Jamie Walsh (Retrofit Assessor): "I recommend EvoHome Improvements highly. This type of service is much needed"
- Tyler Heath (Trade Partner): "All I have to do is focus on the standard of work, EvoHome handles everything else"

RESPONSE STYLE:
- Be helpful, knowledgeable, and conversational
- Always mention relevant grants/incentives when discussing renewable energy
- Encourage quote requests or phone calls for personalized advice
- Emphasize protection, vetting, and support throughout
- Keep responses concise but informative (150-200 words max)
- Use emojis sparingly but effectively
- Always offer next steps (quote, call, consultation)`
              },
              { role: 'user', content: userMessage }
            ],
            max_tokens: 250,
            temperature: 0.7
          })
        });
        
        const data = await response.json();
        const botResponse = data.choices?.[0]?.message?.content?.trim() || 
          "Thanks for your question! For personalized advice about your project, please use our quote form or call 0333 004 0195. Our experts are here to help!";
        
        setTimeout(() => {
          setIsTyping(false);
          addMessage('bot', botResponse, true);
        }, 1200);
        
      } catch (error) {
        console.error('OpenAI API Error:', error);
        setTimeout(() => {
          setIsTyping(false);
          addMessage('bot', "I'm having trouble connecting right now. For immediate help, please call us on 0333 004 0195 or use our quote form. Our experts are standing by!", true);
        }, 1000);
      }
    } else {
      // Enhanced fallback responses when no OpenAI key
      const responses = {
        solar: "☀️ Solar panels are an excellent investment! Our customers typically save £1,200+ per year on electricity bills. With the Smart Export Guarantee, you can even earn money from excess energy. Most systems pay for themselves in 6-9 years. We work with MCS-certified specialists across Hampshire, Surrey, Sussex, Dorset, and Wiltshire. Ready for a free assessment? 📞",
        
        heatPump: "🔥 Heat pumps are incredibly efficient - up to 400% more efficient than gas boilers! Plus, you could be eligible for a £7,500 government grant through the Boiler Upgrade Scheme. Our air source heat pumps work effectively even in temperatures down to -15°C. Customers typically save £1,500+ per year. We handle all grant applications for you! Want a free consultation? 💰",
        
        windows: "🪟 New windows can reduce your heating bills by up to 50% while enhancing security and comfort. Our energy-efficient windows are professionally installed by vetted specialists. Most customers see payback within 5-7 years through energy savings. We provide free home surveys and competitive quotes. Interested in learning more? 🏠",
        
        callback: "📞 I'd be happy to arrange a callback! Our expert advisors are available Monday-Friday 8AM-6PM and Saturday 9AM-4PM. You can also call us directly on 0333 004 0195, or fill out our quote form and we'll call you within 2 hours during business hours. We cover Hampshire, Surrey, Sussex, Dorset, and Wiltshire with free home consultations. 🎯",
        
        areas: "📍 We provide free home consultations across Hampshire, Surrey, Sussex, Dorset, and Wiltshire. We also offer remote consultations nationwide. All our tradespeople are vetted, insured, and have proven track records. Every project comes with 100% homeowner protection and ongoing support. Which area are you in? 🏡",
        
        grants: "💰 There are several grants available! Heat pumps qualify for up to £7,500 through the Boiler Upgrade Scheme. Solar panels benefit from the Smart Export Guarantee where you're paid for excess energy. We handle all grant applications for you and ensure you get maximum financial support. Our experts know exactly what's available in your area! 🎉",
        
        scam: "🛡️ We offer a free Neighbourhood Scam Check service! If you've received cold calls or doorstep pitches, send us the details. We'll verify whether the company, product, or service is legitimate. With EvoHome, you don't have to guess - we help protect homeowners from scams and high-pressure tactics. Stay safe! 🔒",
        
        default: "👋 Thanks for your question! I'm EvoBot, here to help with any home improvement queries. EvoHome connects homeowners across Hampshire, Surrey, Sussex, Dorset, and Wiltshire with vetted specialists. We offer solar power, heat pumps, windows, roofing, and more with 100% protection. What can I help you with today? 🏠"
      };

      let response = responses.default;
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('solar') || lowerMessage.includes('panel')) {
        response = responses.solar;
      } else if (lowerMessage.includes('heat pump') || lowerMessage.includes('heating') || lowerMessage.includes('grant')) {
        response = responses.heatPump;
      } else if (lowerMessage.includes('window') || lowerMessage.includes('door') || lowerMessage.includes('glazing')) {
        response = responses.windows;
      } else if (lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('speak') || lowerMessage.includes('callback')) {
        response = responses.callback;
      } else if (lowerMessage.includes('area') || lowerMessage.includes('cover') || lowerMessage.includes('location')) {
        response = responses.areas;
      } else if (lowerMessage.includes('grant') || lowerMessage.includes('funding') || lowerMessage.includes('money') || lowerMessage.includes('scheme')) {
        response = responses.grants;
      } else if (lowerMessage.includes('scam') || lowerMessage.includes('cold call') || lowerMessage.includes('doorstep') || lowerMessage.includes('suspicious')) {
        response = responses.scam;
      }

      setTimeout(() => {
        setIsTyping(false);
        addMessage('bot', response, true);
      }, 1000 + Math.random() * 800);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    addMessage('user', userMessage);
    handleBotResponse(userMessage);
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      addMessage('bot', "👋 Hi! I'm EvoBot, your smart home improvement assistant! I can help with solar panels, heat pumps, windows, grants, and arrange free consultations across Hampshire, Surrey, Sussex, Dorset, and Wiltshire. What would you like to know? ⚡", true);
    }
  };

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) initializeChat();
        }}
        className="bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-pulse-slow"
      >
        <Bot className="h-5 w-5" />
        <span className="hidden sm:inline">Ask EvoBot</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in-left">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                <Bot className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <p className="font-bold text-lg">EvoBot</p>
                <p className="text-xs opacity-90 flex items-center space-x-1">
                  <Zap className="h-3 w-3" />
                  <span>AI-Powered Assistant</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`max-w-[85%] p-3 rounded-xl shadow-sm ${
                    message.role === 'bot' 
                      ? 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm' 
                      : 'bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white ml-auto rounded-br-sm shadow-lg'
                  }`}
                >
                  {message.content}
                </div>
                
                {message.role === 'bot' && message.hasButtons && index === messages.length - 1 && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={action.action}
                        className="px-3 py-2 text-xs bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white rounded-lg hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-md font-medium"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="max-w-[85%] p-3 bg-white border border-gray-200 rounded-xl rounded-bl-sm shadow-sm">
                <div className="flex space-x-1 items-center">
                  <Bot className="h-4 w-4 text-[#2B4C9B] mr-2" />
                  <div className="w-2 h-2 bg-[#2B4C9B] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#2B4C9B] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-[#2B4C9B] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <span className="text-xs text-gray-500 ml-2">EvoBot is thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, grants, quotes..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20 text-sm transition-all duration-200"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="px-4 py-3 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 disabled:opacity-50 transform hover:scale-105 shadow-lg"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-3 flex space-x-2">
              <a
                href="tel:03330040195"
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 text-xs font-bold transform hover:scale-105 shadow-md"
              >
                <Phone className="h-3 w-3" />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 text-xs font-bold transform hover:scale-105 shadow-md"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Get Quote</span>
              </button>
            </div>
            
            {/* Trust Signal */}
            <div className="mt-2 text-center">
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                <Star className="h-3 w-3 text-orange-400 fill-current" />
                <span>4.9/5 rated • 100% protected</span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SmartChatbot;