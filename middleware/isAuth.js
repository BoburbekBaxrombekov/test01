const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
     next()
    } else {
     //res.redirect('/admin/login')
     res.send('login')
    }
   }
   module.exports = isAuth