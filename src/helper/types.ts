export interface Message {
    role: "system" | "user" | "assistant";
    content: string;
  }
  
  export interface APIBody {
    model: string;
    max_tokens: number;
    temperature: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    messages: Message[];
  }