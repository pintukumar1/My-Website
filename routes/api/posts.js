const express = require('express')
const router = express.Router()
const passport = require('passport')
const Post = require('../../models/Post')
const Profile = require('../../models/Profile')

// fetching validtion 
const validatePostHandler = require('../../validation/post')

//@route  GET api/posts
//desc    Get All Posts
//access  Public
router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => {
        res.json(posts)
    })
    .catch(err => {
        err => res.status(404).json({nopostsfound: "No posts found"})
    })
})

//@route  GET api/posts/:id
//desc    Get post by id
//access  Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        res.json(post)
    })
    .catch(err => res.json({ nopostfound: "No post found with that ID" }))
})

//  POST   route /api/posts
//  desc   used to post Posts
//  access Private
router.post('/', passport.authenticate('jwt', {session: false}), 
(req, res) => {
    const { errors , isValid } = validatePostHandler(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name ,
        avatar: req.body.avatar,
        user: req.user.id
    })
    newPost.save().then(post => {
        res.json(post);
    })
})

// @route  POST api/posts/:id
// @desc   desc will delete the post by id
// @access Private
router.delete("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
        .then(post => {
            if(post.user.toString() !== req.user.id) {
                return res.status(401).json({notauthorized: "user not authorized"})
            }
            post.remove().then(() => res.json({ success: true }) )
        })
        .catch(err => res.status(404).json({ postnotfound: "No Post found " }))
    })
})

// @route  POST api/posts/like/:id
// @desc   desc like the post
// @access Private
router.post("/like/:id" , passport.authenticate("jwt", {session: false}), (req, res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
        .then(post => {
            if(post.likes.filter(like => like.user.toString() === req.user.id)
            .length > 0 
            ) {
                return res.status(400).json({alreadyliked: "User already liked this post"})
            }
            // Add user id to likes array
            post.likes.unshift({ user: req.user.id })

            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({postnotfound: "Post not found"}))
    })
})

// @route  POST api/posts/unlike/:id
// @desc   desc unlike the post
// @access Private
router.post("/unlike/:id" , passport.authenticate("jwt", {session: false}), (req, res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
        .then(post => {
            if(post.likes.filter(like => like.user.toString() === req.user.id)
            .length === 0 
            ) {
                return res.status(400).json({ notliked: "You have not yet liked this post"})
            }
            //Get remove index
            const removeIndex = post.likes.map(item => item.user.toString())
            .indexOf(req.user.id)

            // Splice out of the array
            post.likes.splice(removeIndex, 1)
            post.save().then(post => {
                res.json(post)
            })
        })
    })
})

// @route  POST api/posts/comment/:id
// @desc   desc Add Comment to post
// @access Private
router.post("/comment/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
    const { errors , isValid } = validatePostHandler(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }

    Post.findById(req.params.id)
    .then(post => {
        const newComment = {
            text: req.body.text ,
            name: req.body.name , 
            avatar: req.body.name ,
            user: req.user.id
        }
        post.comments.unshift(newComment)
        post.save().then(post => res.json(post ))
    })
    .catch(err => {
        res.status(404).json({postnotfound: "No Post found "})
    })
})

// @route  DELETE api/posts/comment/:id
// @desc   desc Delete Comment of post
// @access Private
router.delete("/comment/:id/:comment_id", passport.authenticate("jwt", {session: false }), (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id)
        .length === 0 
        ){
            return res.status(404).json({ commentnotexists: "Comment does not exist"})
        }
        const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

        post.comments.splice(removeIndex, 1)
        post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({postnotfound: "No Post Found"}))
})


module.exports = router