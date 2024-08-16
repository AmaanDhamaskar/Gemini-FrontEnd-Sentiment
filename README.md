## Multilingual Sentiment Analysis Application (Front-End)

This project is the front-end for a Multilingual Sentiment Analysis application, built with React JS. The interface is inspired by Gemini's design.

### Overview

This front-end provides a user-friendly interface for interacting with a sentiment analysis model. While currently configured to use the Gemini model for demonstration purposes, a dedicated multilingual sentiment analysis model is used in production. This model is capable of accurately determining the sentiment of text in Marathi & Hindi language.

### Features

* **Gemini-inspired Interface:** Familiar and intuitive user experience.
* **Multilingual Support:** Analyze sentiment in various languages (production).
* **Sentiment Classification:** Classifies text as Positive, Negative, or Neutral.
* **Session Management:** Create new sessions and review past interactions.

### Development

The front-end is set up using Create React App, providing a streamlined development environment. Key technologies used include:

* React JS: JavaScript library for building user interfaces.
* React Router DOM: For handling navigation and routing.
* Axios: Promise-based HTTP client for making API requests.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AmaanDhamaskar/Gemini-FrontEnd-Sentiment.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Production

In production, the application utilizes a dedicated multilingual sentiment analysis model. This model is not included in this repository for security and intellectual property reasons. To deploy to production, you would need to connect this front-end to your production-ready sentiment analysis API.

### Notes

* This front-end is primarily for demonstration and development purposes.
* The Gemini model is used for development and demonstration, NOT in production.
* The actual production sentiment analysis model and its API are not provided here.

### Future Enhancements

* Enhanced UI: Improve user experience with features like response highlighting.
* More Models: Integrate additional sentiment analysis models for comparison.
* User Authentication: Secure access and allow users to save their sessions.

### License

This project is licensed under the MIT License.
