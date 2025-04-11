import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [streamingResponse, setStreamingResponse] = useState("");
    const eventSourceRef = useRef(null); 
    const chatBoxRef = useRef(null);

    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };
    
  
    const sendMessage = async () => {
      if (!input.trim()) return;

      console.log("Starting chatbot request...");
    
      const userMessage = { role: "user", content: input };
      setMessages((prev) => {
          const updatedMessages = [...prev, userMessage];
          scrollToBottom();
          return updatedMessages;
        });
        setInput("");
        setStreamingResponse("");
        setIsTyping(true);
  
  
      try {
  
        const API_BASE_URL = "https://chatbotannie-production.up.railway.app"; 
        const API_DEV_URL = "http://localhost:8006";
  
          const startReqTime = performance.now();
          const response = await fetch(`${API_BASE_URL}/chat`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: input, session_id: "session_123" }),
          });
          const endReqTime = performance.now()
          console.log(`API reuqest completed in ${(endReqTime - startReqTime).toFixed(4)} ms`);
  
    
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let botMessage = { role: "bot", content: "" };
            let firstChunk = true;
            
            setMessages((prev) => {
                const updatedMessages = [...prev, botMessage];
                scrollToBottom();
                return updatedMessages;
            });
            
            let buffer = "";
            const updateInterval = 100;
            let lastUpdateTime = Date.now();
    
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;
                const now = Date.now();
    
                if (firstChunk || now - lastUpdateTime > updateInterval) {
                    botMessage.content += buffer;
                    setMessages((prev) => {
                        const updated = [...prev.slice(0, -1), { ...botMessage }];
                        scrollToBottom();
                        return updated;
                    });
                    buffer = "";
                    lastUpdateTime = now;
                    if (firstChunk) {
                        firstChunk = false;
                        setIsTyping(false);
                    }
                }
            }
    
            if (buffer.length > 0) {
                botMessage.content += buffer;
                setMessages((prev) => {
                    const updated = [...prev.slice(0, -1), { ...botMessage }];
                    scrollToBottom();
                    return updated;
                });
            }
    
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsTyping(false);
        }
    
        setInput(""); 
    };
  
    useEffect(() => {
        scrollToBottom();
    }, [messages]);  
    
    const clearMessages = () => {
        setMessages([]); 
        setStreamingResponse(""); 
        setIsTyping(false);
        if (eventSourceRef.current) {
            eventSourceRef.current.close(); 
            eventSourceRef.current = null;
        }
    };

    return (
        <div className="chatbot-wrapper" style={{ width: "350px", position: "relative" }}>
          <button
            className={`chat-button ${isOpen ? "hide-chat" : "show-chat"}`}
            onClick={() => setIsOpen(true)}
          >
            Chat with me
          </button>
          <div
            className={`chat-container ${isOpen ? "show-chat" : "hide-chat"}`}
            
          >
            <div className="chat-header">
              <h2>Chat with me</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✖
              </button>
            </div>
    

          <div
            className="chatbox"
            ref={chatBoxRef}
            style={{ flex: 1, overflowY: "auto"}}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? "user-message" : "bot-message"}
              >
                {msg.content}
              </div>
            ))}
            {streamingResponse && (
              <div className="bot-message">{streamingResponse}</div>
            )}
            {isTyping && (
              <div className="bot-typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div
            className="chat-input"
            style={{ display: "flex", padding: "10px", backgroundColor: "#111827" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e)=> {
                if (e.key == "Enter"){
                    sendMessage();
                    e.preventDefault();
                }
              }}
              placeholder="Ask me anything..."
              style={{ flex: 1, marginRight: "5px" }}
            />
            <button className="send" onClick={sendMessage}>
              Send
            </button>
            <button className="clear" onClick={clearMessages}>
              Clear
            </button>
          </div>
        </div>

    </div>
  );
};

export default Chatbot;