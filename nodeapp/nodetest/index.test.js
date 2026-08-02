const request = require("supertest");
const server = require("../index");

describe("Node.js Server Test", function () {

    it("should return status 200", function (done) {
        request(server)
            .get("/")
            .expect(200)
            .end(done);
    });

});
