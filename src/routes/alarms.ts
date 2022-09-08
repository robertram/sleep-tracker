import express from "express";
import * as alarmsServices from "../services/alarmsService";
import toNewAlarmEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res): any => {
  res.send(alarmsServices.getAlarms());
});

router.get("/:id", (req: any, res): any => {
  const alarm: any = alarmsServices.findById(Number(req.params.id));

  return alarm != null ? res.send(alarm) : res.sendStatus(404);
});

router.post("/", (req, res): any => {
  try {
    // const { name, description, date, type } = req.body;
    const newAlarmEntry = toNewAlarmEntry(req.body);
    alarmsServices.addAlarm(newAlarmEntry);
    res.send("Saving alarm");
  } catch (e:any) {
    res.status(400).send(e.message);
  }
});

export default router;
