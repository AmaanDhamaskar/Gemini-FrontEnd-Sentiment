import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
import api from "../../api";
import { useState } from "react";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	const [text, setText] = useState("");
	const [sentiment, setSentiment] = useState("");    
		
		
	const predictSentiment = async(text) => {
		const response = await api.get('/text/sentiment', {params: {text_to_summarize: text}});
		setSentiment(response.data.result)
	}
		
	return (
		<div className="main">
			<div className="nav">
				<p>Multilingual Sentiment Analysis Using Deep Learning</p>
				<img src={assets.user_icon_white} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Multilingual Sentiment Analysis</span>
							</p>
							<p>Using Deep Learning</p>
						</div>
						<div className="cards">
							<div
								className="card"
								// onClick={() =>
								// 	handleCardClick("Suggest Some Place To Visit In Kerala")
								// }
							>
								<p>Enter your text in the input box given below and press send</p>
								<img src={assets.info_icon_white} alt="" />
							</div>
							<div
								className="card"
								// onClick={() =>
								// 	handleCardClick(
								// 		"Brainstorm team bonding activities for our work retreat"
								// 	)
								// }
							>
								<p>AI Model classifies the text as Positive, Negative or Neutral.</p>
								<img src={assets.info_icon_white} alt="" />
							</div>
							<div
								className="card"
								// onClick={() =>
								// 	handleCardClick("How to Create a Gyroscope using Disc?")
								// }
							>
								<p>To create a new session, click on the Plus (+) icon</p>
								<img src={assets.info_icon_white} alt="" />
							</div>
							<div
								className="card"
								// onClick={() => {
								// 	handleCardClick(
								// 		"Create a Script for the youtube video about coding "
								// 	);
								// }}
							>
								<p>Past sessions can be viewed in the sidebar</p>
								<img src={assets.info_icon_white} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon_white} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
								// <p>{sentiment}</p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							{/* <img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" /> */}
							<img
								src={assets.send_icon_white}
								alt=""
								onClick={() => {
									onSent();
									// predictSentiment(text);
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						{/* <p>
							Built with ❤️ By Group 50
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
