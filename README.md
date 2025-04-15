# RAJ AI Platform

The RAJ AI Platform is a robust, scalable solution leveraging AI for natural language processing, code generation, task automation, content generation, and real-time updates.

## Features
- **User Authentication and Authorization** (JWT-based).
- **Natural Language Processing Interface** (OpenRouter GPT-4.1).
- **Code Generation System** for automated coding assistance.
- **Task Automation Framework** for repetitive task execution.
- **Content Generation Capabilities** for AI-driven content creation.
- **External API Integrations** for fetching data like weather updates.
- **Real-Time Updates and Notifications** using Socket.io.

## Prerequisites
- Docker and Docker Compose installed.
- OpenRouter API Key.
- Weather API Key.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rajshah9305/raj-ai-platform.git
   cd raj-ai-platform
   ```

2. Create a `.env` file in the root directory:
   ```
   OPENROUTER_API_KEY=<your_openrouter_api_key>
   WEATHER_API_KEY=<your_weather_api_key>
   ```

3. Start the platform:
   ```bash
   docker-compose up --build
   ```

4. Access the platform:
   - Backend: [http://localhost:5000](http://localhost:5000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

## Deployment
For cloud deployment, configure the environment variables and use the provided Docker setup. CI/CD pipeline scripts can be added for automated deployments.

## Contribution
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.