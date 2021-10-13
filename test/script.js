const http = require("k6/http")
const { sleep } = require("k6")

export const options = {
    // vus: 100,
    // duration: "15s",
    stages: [
        { duration: "5s", target: 1000 },
        { duration: "30s", target: 100 },
        { duration: "10s", target: 0 },
    ],
}

export default function () {
    http.get("http://52.91.229.27/api/product")
    sleep(1)
}
