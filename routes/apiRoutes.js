const Workout = require("../models/workout.js");
const router = require("express").Router();


  router.get("/workout", function(req, res) {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout)
    }).catch(err => res.json(err))
  });


  router.post("/workout", function(req, res) {
   Workout.create({}).then(dbWorkout => res.json(dbWorkout)).catch(err => res.json(err))
  });

   router.put("/workout/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,  {$push: {exercises: req.body}})
   })

  router.delete("/workout/:id", function(req, res) {
    Workout.findByIdAndDelete(req.body.id).then(() => res.json({ ok: true })).catch(err => res.status(500).json(err))
  });


module.exports = router;