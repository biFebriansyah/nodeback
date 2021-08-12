const app = require("../app")
const request = require("supertest")

const standardRespone = {
    status: expect.any(Number),
    description: expect.any(String),
    result: expect.any(Array),
}

describe("service /products", () => {
    describe("GET /products", () => {
        test("should return statuscode 200", async () => {
            const respone = await request(app).get("/product")
            expect(respone.statusCode).toBe(200)
        })
        test("should return with respone standar", async () => {
            const respone = await request(app).get("/product")
            console.log(respone.body)
            expect(respone.body).toEqual(expect.objectContaining(standardRespone))
        })
    })

    describe("POST /products", () => {
        test("should return statuscode 200", async () => {
            const respone = await request(app).post("/product").send({
                name: "susu",
                price: 10000,
                image: "",
                categori: 1,
            })
            console.log(respone.body)
            expect(respone.statusCode).toBe(200)
        })
    })
})
