const bcrypt = require('bcryptjs')
const User = require('../models/Users')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  console.log(2)
  done(null, user.id)
})

passport.deserializeUser((user, cb) => {
  // console.log(1)
  // console.log(id)
  // console.log(1)

  // User.findById(id).then(function(err, user){
  //   done(err, user)
  // })
  process.nextTick(function() {
    return cb(null, user);
  });
  
})

passport.use(
  new LocalStrategy(
    { usernameField: 'name' },
    (name, password, done) => {
      console.log(3)
      User.findOne({ name: name })
        .then((user) => {
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err
              if (isMatch) {
                return done(null, user)
              } else {
                return done(null, false, { message: 'Wrong Password' })
              }
            })
        })
        .catch((err) => {
          return done(null, false, { message: err })
        })
    }
  )
)

module.exports = passport
