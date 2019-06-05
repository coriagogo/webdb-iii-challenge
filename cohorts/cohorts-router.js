const router = require('express').Router();
const Cohorts = require('./cohorts-model.js');


router.get('/', async (req, res) => {
  // get the roles from the database
  Cohorts.find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    }) 
    .catch(error => {
      res.status(500).json(error);
    })
});

router.get('/:id', (req, res) => {
  Cohorts.findById(req.params.id)
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.post('/', (req, res) => {
  Cohorts.add(req.body)
    .then(cohort => {
      res.status(201).json(cohort);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.put('/:id', (req, res) => {
  Cohorts.update(req.params.id, req.body)
      .then(count => {
          if(count > 0){
              const unit = count > 1 ? 'records' : 'record';
              res.status(200).json({ message: `${count} ${unit} updated` })
          } else {
              res.status(404),json({ message: 'Cohort not found' })
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})

router.delete('/:id', (req, res) => {
  Cohorts.remove(req.params.id)
      .then(count => {
          if(count > 0){
              const unit = count > 1 ? 'records' : 'record';
              res.status(200).json({ message: `${count} ${unit} deleted` })
          } else {
              res.status(404),json({ message: 'Cohort not found' })
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})


module.exports = router;