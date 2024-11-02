# Node.js Redis Cache with Axios

This project demonstrates how to implement Redis caching for GitHub API requests using Axios in a Node.js application. The app fetches the number of public repositories of a given GitHub username and caches the result in Redis to reduce redundant API calls and improve performance.

## Features

- Fetches the number of GitHub public repositories for a specified user using Axios.
- Caches the response in Redis for 1 hour (3600 seconds) to optimize repeated requests.
- Middleware to check the cache before making an API call.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Redis](https://redis.io/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
