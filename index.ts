import express from "express";
import cron from "node-cron";
import { getGrants, getGrantsDetails, getGrantsId } from "./helper";

const app = express();

app.get("/", async (req, res) => {
  res.send("sup");
  // const grants = await getGrants();
  // if (grants) {
  //   const grantsId = getGrantsId(grants);
  //   const grantsDetails = await getGrantsDetails(grantsId);
  //   res.json(grantsDetails);
  // } else {
  //   res.status(400);
  // }
});

cron.schedule("* * * * *", async () => {
  console.log("running a task every minute");
});

app.listen("3000", () => {
  console.log(`listening on port 3000`);
});
