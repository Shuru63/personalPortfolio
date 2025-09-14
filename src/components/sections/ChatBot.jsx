import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const chatFlow = [
    {
      id: 0,
      bot: "👋 Hey there! I'm your AI assistant. Welcome to this amazing developer's portfolio! What's your name?",
      type: 'input'
    },
    {
      id: 1,
      bot: (name) => `Nice to meet you, ${name}! 🚀 I'm here to tell you about an incredible Full-Stack Developer & DevOps Engineer. What would you like to know?`,
      options: [
        "💻 Technical Skills",
        "🎯 Services Offered", 
        "📱 Recent Projects",
        "💼 Experience"
      ]
    },
    {
      id: 'skills',
      bot: "🔥 Here are the technical superpowers:\n\n💻 Frontend: React, Next.js, Vue.js, TypeScript\n⚡ Backend: Node.js, Python, Java, PHP\n🗄️ Databases: MongoDB, PostgreSQL, MySQL\n☁️ DevOps: Docker, Kubernetes, AWS, Azure\n🔧 Tools: Git, Jenkins, Terraform, Ansible\n\nPretty impressive, right? What else interests you?",
      options: [
        "🎯 Services Offered",
        "📱 Recent Projects", 
        "💼 Experience",
        "📞 Let's Connect!"
      ]
    },
    {
      id: 'services',
      bot: "🎯 Services that can transform your business:\n\n🌐 Full-Stack Web Development\n📱 Mobile App Development\n☁️ Cloud Infrastructure Setup\n🔄 DevOps & CI/CD Implementation\n🛠️ System Architecture Design\n⚡ Performance Optimization\n🔒 Security Implementation\n\nReady to take your project to the next level?",
      options: [
        "💻 Technical Skills",
        "📱 Recent Projects",
        "💼 Experience", 
        "📞 Let's Connect!"
      ]
    },
    {
      id: 'projects',
      bot: "📱 Recent game-changing projects:\n\n🛍️ E-commerce Platform (React + Node.js)\n📊 Analytics Dashboard (Vue.js + Python)\n☁️ Microservices Architecture (Docker + K8s)\n📱 Mobile Banking App (React Native)\n🤖 AI-Powered Chatbot (like me!)\n🔐 Enterprise Security System\n\nEach project delivered on time with cutting-edge tech! Impressed?",
      options: [
        "💻 Technical Skills",
        "🎯 Services Offered",
        "💼 Experience",
        "📞 Let's Connect!"
      ]
    },
    {
      id: 'experience',
      bot: "💼 Professional journey highlights:\n\n✨ 5+ Years in Full-Stack Development\n🚀 3+ Years in DevOps Engineering\n🌟 50+ Successful Projects Delivered\n👥 Worked with Startups to Enterprises\n🏆 Expert in Agile & Scrum\n📈 Proven Track Record of 98% Client Satisfaction\n\nExperience that speaks volumes!",
      options: [
        "💻 Technical Skills",
        "🎯 Services Offered", 
        "📱 Recent Projects",
        "📞 Let's Connect!"
      ]
    },
    {
      id: 'connect',
      bot: (name) => `${name}, ready to start your next big project? 🚀\n\nI specialize in turning ideas into reality with cutting-edge technology. Whether it's a startup MVP or enterprise solution, I've got you covered!\n\n💬 Let's discuss your project on WhatsApp for a personalized consultation!`,
      type: 'whatsapp'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(chatFlow[0].bot);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (message) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: message }]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (message) => {
    setMessages(prev => [...prev, { type: 'user', content: message }]);
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage = currentInput.trim();
    addUserMessage(userMessage);

    if (currentStep === 0) {
      setUserName(userMessage);
      setTimeout(() => {
        const nextStep = chatFlow.find(step => step.id === 1);
        addBotMessage(nextStep.bot(userMessage));
        setCurrentStep(1);
      }, 1000);
    }

    setCurrentInput('');
  };

  const handleOptionClick = (option) => {
    addUserMessage(option);

    let nextStepId;
    if (option.includes('Technical Skills')) nextStepId = 'skills';
    else if (option.includes('Services')) nextStepId = 'services';
    else if (option.includes('Projects')) nextStepId = 'projects';
    else if (option.includes('Experience')) nextStepId = 'experience';
    else if (option.includes('Connect')) nextStepId = 'connect';

    setTimeout(() => {
      const nextStep = chatFlow.find(step => step.id === nextStepId);
      if (nextStep) {
        if (nextStepId === 'connect') {
          addBotMessage(nextStep.bot(userName));
          setCurrentStep('connect');
        } else {
          addBotMessage(nextStep.bot);
          setCurrentStep(nextStepId);
        }
      }
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = `Hi! I'm ${userName} and I'm interested in discussing a project with you. I found your portfolio impressive!`;
    const whatsappURL = `https://wa.me/917766968284?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="chat-button-container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="chat-button"
        >
          {isOpen ? (
            <X size={24} className="button-icon" />
          ) : (
            <MessageCircle size={24} className="button-icon" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="bot-avatar">
              <Bot size={20} />
            </div>
            <div className="header-info">
              <h3 className="bot-name">Portfolio Assistant</h3>
              <p className="bot-status">Full-Stack & DevOps Expert</p>
            </div>
            <div className="status-indicator"></div>
          </div>

          {/* Messages */}
          <div className="messages-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-wrapper ${message.type === 'user' ? 'user-message-wrapper' : 'bot-message-wrapper'}`}
              >
                <div className={`message-content ${message.type === 'user' ? 'user-message-content' : 'bot-message-content'}`}>
                  <div className={`avatar ${message.type === 'user' ? 'user-avatar' : 'bot-avatar-small'}`}>
                    {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`message-bubble ${message.type === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                    <p className="message-text">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message-wrapper bot-message-wrapper">
                <div className="message-content bot-message-content">
                  <div className="avatar bot-avatar-small">
                    <Bot size={16} />
                  </div>
                  <div className="message-bubble bot-bubble">
                    <div className="typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot typing-dot-delay-1"></div>
                      <div className="typing-dot typing-dot-delay-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            {(currentStep === 1 || ['skills', 'services', 'projects', 'experience'].includes(currentStep)) && (
              <div className="options-container">
                {chatFlow.find(step => step.id === currentStep)?.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="option-button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* WhatsApp Button */}
            {currentStep === 'connect' && (
              <div className="whatsapp-container">
                <button
                  onClick={openWhatsApp}
                  className="whatsapp-button"
                >
                  <ExternalLink size={18} />
                  Chat on WhatsApp
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep === 0 && (
            <div className="input-container">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your name..."
                  className="message-input"
                />
                <button
                  onClick={handleSendMessage}
                  className="send-button"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;