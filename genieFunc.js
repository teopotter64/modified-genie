document.addEventListener("DOMContentLoaded", () => {
    
    const chatBox = document.getElementById("chat");
    const form = document.getElementById("genie-form");
    const input = document.getElementById("user-input");
  
    const replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
  
    function appendMessage(text, sender) {
      const div = document.createElement("div");
      div.classList.add("message", sender);
      div.textContent = `${sender === "user" ? "You" : "Bot"}: ${text}`;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  
    async function askGPTGenie(prompt) {
      return new Promise((resolve) => {
        const delay = 500;
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        setTimeout(() => resolve(randomReply), delay);
      });
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const prompt = input.value.trim();
      if (!prompt) {
        return;
      }
      appendMessage(prompt, "user");
      input.value = "";
      const response = await askGPTGenie(prompt);
      appendMessage(response, "bot");
    });
    console.log("GPT Genie loaded @", new Date());
  });  