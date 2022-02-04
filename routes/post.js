const router = require('express').Router();
const { Post } = require('../models/Post');
/* const verify = require('../middlewares/verifytoken')
 */

//submit post
router.post('/add', (req, res) => {
  const post = new Post(req.body);
  post.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//get all posts
router.get('/', (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, posts: posts });
  });
});

//update post by id
router.put('/update/:id', (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

//delete post by id
router.delete('/delete/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});

//get post by id
router.get('/info/:id', async (req, res) => {
  const info = await Post.findById(req.params.id);
  await info;

  res.json(info);
});

module.exports = router;
