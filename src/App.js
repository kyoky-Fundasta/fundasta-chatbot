import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { type: "user", contents: input }];
      setMessages(newMessages);
      setInput("");
      const llmResponse = await getLLMResponse(input);
      setMessages([...newMessages, { type: "llm", contents: llmResponse }]);
    }
  };

  const getLLMResponse = async (message) => {
    return "LLM Message";
  };
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "5px",
              backgroundColor: "#f1f1f1",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: msg.type === "user" ? "#f1f1f1" : "#e1f5fe",
            }}
          >
            <strong>{msg.type === "user" ? "User" : "LLM"} : </strong>
            {msg.contents}
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            width: "18%",
            padding: "10px",
            marginTop: "5px",
            marginLeft: "2%",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
