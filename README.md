r

## Overview

URLShortener is a web application designed to shorten long URLs into compact, easy-to-share links. It provides a simple interface for users to generate short links and track their usage statistics.

## Features

- **Shorten URLs:** Instantly generate a short link for any valid URL.
- **Redirection:** Accessing a short link redirects users to the original URL.
- **Analytics:** Track the number of times each short link is accessed.
- **Custom Aliases:** Optionally create custom short URLs.
- **User Authentication:** Register and log in to manage your links (optional).
- **RESTful API:** Programmatic access to URL shortening features.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** DynamoDb
- **Deployment:** Docker

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/URLShortener.git
    cd URLShortener
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Access the app:**
    - Open your browser and go to `http://localhost:3000`.

## Usage

1. Enter the long URL you want to shorten.
2. (Optional) Specify a custom alias.
3. Click "Shorten" to generate your short link.
4. Share the generated short URL.

## API Endpoints

- `POST /api/url-shortener` - Shorten a new URL.
- `GET /api/url-shortener:shortId` - Redirect to the original URL.

## Example

```json
POST /api/url-shortener
{
  "originalUrl": "https://www.example.com/very/long/url"
}
```
**Response:**
```json
{
  "shortUrl": "https://short.ly/abc123"
}
```

> **Note:** This project does not have a custom domain at the moment. Therefore, the examples use `http://localhost:3000/api/url-shortener` as the base for shortened URLs.


## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Contact

For questions or support, please contact [your.email@example.com](mailto:your.email@example.com).