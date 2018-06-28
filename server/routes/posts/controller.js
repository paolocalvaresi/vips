module.exports = (function () {
    var Post = require('./Post.js')

    var getAll = function (req, res) {
        Post.find()
            .limit(20)
            .sort([
                ['data', -1]
            ])
            .then(function (posts) {
                res.json(posts);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    var insertPost = function (req, res) {
        var post = new Post(req.body);

        post.save()
            .then(function (post) {
                res.json(post);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    var addLike = function (req, res) {
        Post.findById(req.params.id)
            .then(function (post) {
                post.likes += 1;
                return post.save()
            })
            .then(function (post) {
                res.json(post);
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    var deletePost = function (req, res) {
        Post.findByIdAndRemove(req.params.id)
            .then(function (post) {
                res.json(post);
            })
            .catch(function (err) {
                res.json(err);
            })
    }





    var addCommento = function (req, res) { 
        Post.findById(req.params.id)
            .then(function (post) { 
                post.commenti.push(req.body);
                return post.save();
            })
            .then(function (post) {
                res.json(post)
             })
    }

    return {
        getAll,
        insertPost,
        addLike,
        deletePost,
        addCommento
    }

})()