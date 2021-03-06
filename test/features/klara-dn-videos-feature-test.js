"use strict";
const request = require("supertest");
const jsonFile = require("jsonfile");

function doCleanup() {
  console.log("Cleaning up");
  request("http://es-content.dev.bonnier.news:9200")
    .delete("/klara/klara/dn.screen9.1uwHxJLDuuBKBHGHQcissw/")
    .expect(200 || 404)
    .end((err, res) => {
      if (err) throw err;
    });
}

Feature("Videos", () => {

  afterEachScenario(() => {
    doCleanup();
  });

  Scenario("Fetch a single video", () => {

    Given("there is a video added to elasticsearch with id dn.screen9.1uwHxJLDuuBKBHGHQcissw", (done) => {
      debugger;
      const videoEpiJson = jsonFile.readFileSync("test/features/resources/es-dn.screen9.1uwHxJLDuuBKBHGHQcissw.json");
      request("http://es-content.dev.bonnier.news:9200")
        .post("/klara1/klara/dn.screen9.1uwHxJLDuuBKBHGHQcissw/")
        .send(videoEpiJson)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    let response;
    When("fetching a video with id dn.screen9.1uwHxJLDuuBKBHGHQcissw", (done) => {
      request("http://nav-klara-dn.dev.internal.bonnier.news")
        .get("/videos/dn.screen9.1uwHxJLDuuBKBHGHQcissw")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          response = res.body;
          done();
        });
    });

    Then("response should contain the right data", () => {
      const expectedResponse = jsonFile.readFileSync("test/features/resources/nav-dn.screen9.1uwHxJLDuuBKBHGHQcissw.json");
      response.should.eql(expectedResponse);
    });

  });
});
