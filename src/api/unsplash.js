import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 1NQ-4FPbS3l1TQ7jLrJqQyNSp-lQnHRKiWlOPma1z1Y",
    },
});
