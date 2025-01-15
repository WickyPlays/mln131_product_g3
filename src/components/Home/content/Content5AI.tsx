import { useState } from "react";
import axios from "axios";
import "./Content5AI.scss";
import { Button } from "@mui/material";
import Markdown from "react-markdown";
import InfoIcon from "@mui/icons-material/Info";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Content5AI() {
  const prompts = [
    "Viết bài thơ mẫu về lý tưởng chủ nghĩa xã hội.",
    "Giải thích ý nghĩa của thời kỳ quá độ lên CNXH.",
    "Ví dụ cuộc sống trong thời kỳ quá độ lên CNXH.",
    "Viết diễn văn ngắn khuyến khích xây dựng CNXH.",
    "So sánh thời kỳ quá độ và xã hội CNXH hoàn thiện.",
    "Bàn luận vai trò kinh tế tập thể trong thời kỳ quá độ.",
    "custom"
  ];

  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);
  const [customPrompt, setCustomPrompt] = useState("");
  const [resultText, setResultText] = useState("Câu trả lời sẽ hiện ở đây.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setResultText("Loading answer...");
    setError("");
    try {
      let promptToSend = selectedPrompt;
      
      if (promptToSend === "custom") {
        promptToSend = customPrompt.trim();
      }

      const response = await axios.post(
        //@ts-ignore
        `${import.meta.env.VITE_GEMINI_URL}`,
        {
          text:
            promptToSend +
            " liên quan đến Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
        }
      );

      const text = response?.data?.message || "No response received";
      setResultText(text);
    } catch (err) {
      setError("Error generating content. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content5-ai">
      <p className="title">
        <span className="node">5</span> Tương tác với trí tuệ thông minh (AI)
      </p>
      <div className="content">
        <div className="content-result">
          <div className="result">
            <p className="result-text">
              {resultText && <Markdown>{resultText}</Markdown>}
            </p>
          </div>
          <div className="note">
            <InfoIcon className="info-icon" />
            <div>
              <p>Powered by Gemini 1.5 Flash</p>
            </div>
          </div>
        </div>
        <div className="content-input">
          <div className="prompt-list">
            {prompts.slice(0, -1).map((prompt, index) => (
              <div
                key={index}
                className={`prompt-item ${
                  selectedPrompt === prompt ? "selected" : ""
                }`}
                onClick={() => setSelectedPrompt(prompt)}
              >
                <SmartToyIcon />
                <p>{prompt}</p>
              </div>
            ))}
          </div>
          <textarea
            className={`custom-prompt ${selectedPrompt === "custom" ? "custom-prompt-active" : ""}`}
            placeholder="Nhập nội dung tùy chỉnh tại đây..."
            value={customPrompt}
            onClick={() => setSelectedPrompt("custom")}
            onChange={(e) => setCustomPrompt(e.target.value)}
          />
          <Button
            variant="contained"
            className="btn-generate-prompt"
            onClick={generatePrompt}
            disabled={loading}
          >
            {loading ? "Đang phân tích..." : "Xác nhận"}
          </Button>
          {error && <p style={{ color: "#ff0000" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
