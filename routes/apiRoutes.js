const Workout = require("../models/workout.js");
const router = require("express").Router();


  router.get("/api/workouts", (req, res) => {
    Workout.find().then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err)
    });
  });

  router.post("/api/workouts", (req, res) => {
   Workout.create({}).then(dbWorkout => {
     res.json(dbWorkout)
   })
   .catch(err => {
     res.json(err)
   });
  });

   router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,  {$push: {exercises: req.body}}, { new: true, runValidators: true }).then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
   });

   router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({ "day": -1 })
    .limit(7).then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  router.delete("/api/workouts/:id", function(req, res) {
    Workout.findByIdAndDelete(req.body.id).then(() => {
      res.json(true);
    })
    .catch(err => {
      res.status(200).json(err)
    });
  });


module.exports = router;