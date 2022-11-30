const Post = require('../models/postModel')

module.exports.list = (req,res)=>{
    Post.find({userId: req.user._id})
        .then(posts=>{
            res.json(posts)
        })
}

module.exports.listAll = (req,res)=>{
    Post.find()
        .then(posts=>{
            res.json(posts)
        })
}

module.exports.show = (req,res)=>{
    const id = req.params.id
    Post.findOne({userId:req.user._id, _id:id})
        .then(post=>{
            if(post){
                res.json(post)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.create = (req,res)=>{
    console.log("Invoked Create Post")
    const body =  req.body
    const userId = req.user._id
console.log({userId,body})
    const post = new Post({...body,userId})
    post.save()
        .then((post)=>{
            res.json(post)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Post.findOneAndUpdate({userId:req.user._id, _id:id},body,{new:true, runValidators:true})
        .then(post=>{
            if(post){
                res.json(post)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.deletePost = (req,res)=>{
    const id = req.params.id
    Post.findOneAndDelete({userId:req.user._id,_id:id})
        .then(post=>{
            if(post){
                res.json(post)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}