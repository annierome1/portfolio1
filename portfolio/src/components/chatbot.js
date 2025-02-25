import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [streamingResponse, setStreamingResponse] = useState("");
    const eventSourceRef = useRef(null); 
    const chatContainerRef = useRef(null);
  
    const sendMessage = async () => {
      if (!input.trim()) return;
  
      const userMessage = { role: "user", content: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setStreamingResponse("");
      setIsTyping(true);
  
  
      try {
  
        const API_BASE_URL = "https://chatbotannie-production.up.railway.app"; 
        /*const API_BASE_URL = "http://0.0.0.0:8006"*/
  
  
          const response = await fetch(`${API_BASE_URL}/chat`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: input, session_id: "session_123" }),
          });
  
    
          const reader = response.body.getReader();
          const decoder = new TextDecoder("utf-8");
          let botMessage = { role: "bot", content: "" };
          let firstChunk = true;
          setMessages((prevMessages) => [... prevMessages, botMessage]);
          
          while (true) {
              
            const { value, done } = await reader.read();
            if (done) break;
    
            const chunk = decoder.decode(value, { stream: true });
  
            const cleanChunk = chunk
              .split("\n")
              .map(line => line.replace(/^data /, "").trim())
              .join(" ");
  
              if (firstChunk) {
                  setIsTyping(false);
                  firstChunk = false;
                }
  
              
            botMessage.content += chunk;
    
            setMessages((prev) => [...prev.slice(0, -1), botMessage]); 
          }
    
          
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsTyping(false); // Hide typing bubble when response is done
        
      };
    
        setInput(""); // Clear input field
      };
  
      useEffect(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
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
          {/* Chat Button */}
          <button
            className={`chat-button ${isOpen ? "hide-chat" : "show-chat"}`}
            onClick={() => setIsOpen(true)}
          >
            Chat with me
          </button>
    
          {/* Chat Container (always rendered) */}
          <div
            className={`chat-container ${isOpen ? "show-chat" : "hide-chat"}`}
            ref={chatContainerRef}
          >
            <div className="chat-header">
              <h2>Chat with me</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✖
              </button>
            </div>
    

          <div
            className="chatbox"
            ref={chatContainerRef}
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
