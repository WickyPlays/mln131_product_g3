import { useState } from "react";
import axios from "axios";
import "./Content5AI.scss";
import { Button } from "@mui/material";
import Markdown from "react-markdown";
import InfoIcon from "@mui/icons-material/Info";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Content5AI() {
	const prompts = [
		"Viết một bài thơ ngắn.",
		"Nêu một ví dụ thực tiễn về chính sách phát triển kinh tế.",
		"Giải thích khái niệm 'sở hữu công cộng về tư liệu sản xuất' trong chủ nghĩa xã hội bằng một tình huống thực tế.",
		"Phân tích vai trò của trí thức trẻ trong quá trình thúc đẩy sự nghiệp công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa.",
	];
  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);
  const [resultText, setResultText] = useState("Câu trả lời sẽ hiện ở đây.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setResultText("Loading answer...");
    setError("");
    try {
      const response = await axios.post(
        //@ts-ignore
        `${import.meta.env.VITE_GEMINI_URL}`,
        {
          text:
            selectedPrompt +
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
            <p className="result-text">{resultText && <Markdown>{resultText}</Markdown>}</p>
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
            {prompts.map((prompt, index) => (
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
