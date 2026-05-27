import express from 'express';

const router = express.Router();

router.post('/take', async (req, res) => {
  res.json({
    message: 'Tool Taken'
  });
});

router.post('/return', async (req, res) => {
  res.json({
    message: 'Tool Returned'
  });
});

export default router;
