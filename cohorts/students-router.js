const router = require('express').Router();
const Students = require('./students-model.js');

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.get('/:id', (req, res) => {
  Students.findById(req.params.id)
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.post('/', (req, res) => {
  Students.add(req.body)
    .then(student => {
      res.status(201).json(student);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.put('/:id', (req, res) => {
  Students.update(req.params.id, req.body)
      .then(count => {
          if(count > 0){
              const unit = count > 1 ? 'records' : 'record';
              res.status(200).json({ message: `${count} ${unit} updated` })
          } else {
              res.status(404),json({ message: 'Student not found' })
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})

router.delete('/:id', (req, res) => {
  Students.remove(req.params.id)
      .then(count => {
          if(count > 0){
              const unit = count > 1 ? 'records' : 'record';
              res.status(200).json({ message: `${count} ${unit} deleted` })
          } else {
              res.status(404),json({ message: 'Student not found' })
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})

module.exports = router;