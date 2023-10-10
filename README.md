# sfpr: React Web App for SF Parks and Recreation Facilities

This is a React web application that queries the SF Facilities API to display information about facilities owned by SF Parks and Recreation. The app utilizes Material-table to present the dataset in an organized and user-friendly format. It uses `useQuery` for data fetching and `axios` to connect with the API.

## Features

- Query SF Facilities API: The app connects to the SF Facilities API at [https://sffacilitiesapi.azurewebsites.net/api/facilities] to retrieve information about facilities.

- Material-table Integration: The user interface is built using Material-table, providing a responsive and feature-rich table for displaying the dataset.

- Data Fetching with `useQuery`: The React app utilizes the `useQuery` hook from a data fetching library (e.g., React Query) to efficiently manage API requests and data caching.

- Axios for API Communication: The app uses the Axios library for making HTTP requests to the SF Facilities API.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/amitdzwork/sfpr_react.git
    cd sfpr
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

The app will be accessible at `http://localhost:3000` by default.

## Configuration

In the source code, locate the API endpoint configuration. You may find this in a file such as `src/api/config.js` or directly in your component that makes API requests.

```javascript
// Example configuration
const API_ENDPOINT = "https://sffacilitiesapi.azurewebsites.net/api/facilities";
