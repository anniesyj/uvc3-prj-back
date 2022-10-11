// express 선언
const express = require('express');
// const { verify } = require('jsonwebtoken');

// router 선언
const router = express.Router();

// 모델 선언
const { Post, User } = require('../models');

// 토큰 선언
const { verifyToken } = require('./middlewares');

// 식사 eat / 운동 exercise / 스터디 study / 공구 buy / 재능기부 talent


// 카테고리: 식사 eat
// GET으로 eat게시글 조회
router.get('/eat', verifyToken, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { CategoryTitle: 'eat' },
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.sendStatus(500);
  };
});

// 카테고리: 식사 eat
// POST으로 eat게시글 작성
router.post('/eat', verifyToken, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      time: req.body.time,
      visibility: req.body.visibility,
      UserId: req.decoded.id,
      CategoryTitle: 'eat',
    });
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
});

// 카테고리: 식사 eat
// PATCH로 eat게시글 수정 (단, 유저가 쓴 것만)
// router의 id는 post의 id
router.patch('/eat/:id', verifyToken, async (req, res) => {
  try {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      visibility: req.body.visibility,
    }, { where: { id: req.params.id, UserId: req.decoded.id } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
})

// 카테고리: 식사 eat
// DELETE으로 eat게시글 삭제 (단, 유저가 쓴 것만)
router.delete('/eat/:id', verifyToken, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id, UserId: req.decoded.id } })
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
})


///////////////////////////////////////////////////////////////

// 카테고리: 운동 exercise
// GET으로 exercise게시글 조회
router.get('/exercise', verifyToken, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { CategoryTitle: 'exercise' },
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.sendStatus(500);
  };
});

// 카테고리: 운동 exercise
// POST으로 exercise게시글 작성
router.post('/exercise', verifyToken, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      time: req.body.time,
      visibility: req.body.visibility,
      UserId: req.decoded.id,
      CategoryTitle: 'eat',
    });
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
});

// 카테고리: 운동 exercise
// PATCH로 exercise게시글 수정 (단, 유저가 쓴 것만)
// router의 id는 post의 id
router.patch('/exercise/:id', verifyToken, async (req, res) => {
  try {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      visibility: req.body.visibility,
    }, { where: { id: req.params.id, UserId: req.decoded.id } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
})

// 카테고리: 운동 exercise
// DELETE으로 exercise게시글 삭제 (단, 유저가 쓴 것만)
router.delete('/exercise/:id', verifyToken, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id, UserId: req.decoded.id } })
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
})

///////////////////////////////////////////////////////////////

// 카테고리: 스터디 study
// GET으로 study게시글 조회
router.get('/study', verifyToken, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { CategoryTitle: 'study' },
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.sendStatus(500);
  };
});

// 카테고리: 스터디 study
// POST으로 study게시글 작성
router.post('/study', verifyToken, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      time: req.body.time,
      visibility: req.body.visibility,
      UserId: req.decoded.id,
      CategoryTitle: 'eat',
    });
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
});

// 카테고리: 스터디 study
// PATCH로 study게시글 수정 (단, 유저가 쓴 것만)
// router의 id는 post의 id
router.patch('/study/:id', verifyToken, async (req, res) => {
  try {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      visibility: req.body.visibility,
    }, { where: { id: req.params.id, UserId: req.decoded.id } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
})

// 카테고리: 스터디 study
// DELETE으로 study게시글 삭제 (단, 유저가 쓴 것만)
router.delete('/study/:id', verifyToken, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id, UserId: req.decoded.id } })
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
})


///////////////////////////////////////////////////////////////

// 카테고리: 공구 buy
// GET으로 buy게시글 조회
router.get('/buy', verifyToken, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { CategoryTitle: 'buy' },
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.sendStatus(500);
  };
});

// 카테고리: 공구 buy
// POST으로 buy게시글 작성
router.post('/buy', verifyToken, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      time: req.body.time,
      visibility: req.body.visibility,
      UserId: req.decoded.id,
      CategoryTitle: 'eat',
    });
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
});

// 카테고리: 공구 buy
// PATCH로 buy게시글 수정 (단, 유저가 쓴 것만)
// router의 id는 post의 id
router.patch('/buy/:id', verifyToken, async (req, res) => {
  try {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      visibility: req.body.visibility,
    }, { where: { id: req.params.id, UserId: req.decoded.id } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
})

// 카테고리: 공구 buy
// DELETE으로 buy게시글 삭제 (단, 유저가 쓴 것만)
router.delete('/buy/:id', verifyToken, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id, UserId: req.decoded.id } })
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
})


///////////////////////////////////////////////////////////////

// 카테고리: 재능기부 talent
// GET으로 talent게시글 조회
router.get('/talent', verifyToken, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { CategoryTitle: 'talent' },
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.sendStatus(500);
  };
});

// 카테고리: 재능기부 talent
// POST으로 talent게시글 작성
router.post('/talent', verifyToken, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      time: req.body.time,
      visibility: req.body.visibility,
      UserId: req.decoded.id,
      CategoryTitle: 'eat',
    });
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
});

// 카테고리: 재능기부 talent
// PATCH로 talent게시글 수정 (단, 유저가 쓴 것만)
// router의 id는 post의 id
router.patch('/talent/:id', verifyToken, async (req, res) => {
  try {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
      region: req.body.region,
      address: req.body.address,
      cost: req.body.cost,
      capacity: req.body.capacity,
      date: req.body.date,
      visibility: req.body.visibility,
    }, { where: { id: req.params.id, UserId: req.decoded.id } })
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
})

// 카테고리: 재능기부 talent
// DELETE으로 talent게시글 삭제 (단, 유저가 쓴 것만)
router.delete('/talent/:id', verifyToken, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id, UserId: req.decoded.id } })
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
})


module.exports = router;