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

   router.put("/workout/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,  {$push: {exercises: body}})
   })

  router.delete("/notes/:id", function(req, res) {
    Notes.removeNote(req.params.id).then(() => res.json({ ok: true })).catch(err => res.status(500).json(err))
  });


module.exports = router;