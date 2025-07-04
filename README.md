# Policy Telegram Bot

A Telegram bot that provides insurance information and helps users submit appointments, claims and feedback. The bot uses OpenAI's ChatGPT API to generate responses and MongoDB to store user data.

## Features

- Connects to Telegram and listens for messages.
- Uses OpenAI to answer questions about insurance and your company.
- Creates appointments and insurance claims via interactive prompts.
- Stores appointments, feedback and insurance case data in MongoDB.

## Prerequisites

- Node.js 18 or later
- Access to a MongoDB database
- Telegram bot token
- OpenAI API key

## Setup

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your credentials:

   ```text
   TG_TOKEN=your-telegram-bot-token
   MONGODB_USER=username
   MONGODB_PASSWORD=password
   MONGODB_URL=cluster.mongodb.net
   MONGODB_DB=dbname
   OPENAI_API_KEY=your-openai-api-key
   ```

3. Start the bot:

   ```bash
   npm start            # run once
   npm run dev          # start with nodemon for development
   ```

## Project Structure

- `src/config/` – configuration and environment utilities
- `src/commands/` – Telegram command handlers
- `src/controllers/` – message and callback controllers
- `src/services/` – interaction with database models and OpenAI
- `src/models/` – Mongoose schemas
- `src/utils/` – helper functions

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
