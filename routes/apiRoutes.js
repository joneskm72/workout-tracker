const Workout = require("../models/workout.js");
const router = require("express").Router();


  router.get("/api/workouts", function(req, res) {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
  });

  router.post("/api/workouts", function(req, res) {
   Workout.create({}).then(dbWorkout => {
     res.json(dbWorkout)
   })
   .catch(err => { res.json(err)
   })
  });

   router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,  {$push: {exercises: req.body}})
   });

   router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7);
  });

  router.delete("/api/workouts/:id", function(req, res) {
    Workout.findByIdAndDelete(req.body.id).then(() => {
      res.json({ ok: true })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });


module.exports = router;