const User = require('../model/User')
const hanndleError = (err) => {

   console.log(err.message, err.code)
   let errors = {email: "", password: ""}

   if (err.code === 11000){
     errors.email = 'this email has already been used'
   }


   if(err.message.includes('user validation failed')){
      Object.values(err.errors).forEach(({properties})=>{
         errors[properties.path] = properties.message;
      })
   }

   return errors;


}

module.exports.signup_user = async (req, res) => {
   
   const { email, password } = req.body;
    console.log(email, password);

   try {
      const createdUser = await User.create({ email, password })
      res.status(201).json(createdUser)
   } catch (error) {
   const errors = hanndleError(error)
      res.status(400).json({errors})
   }
},


module.exports.login_user = async (req, res) => {
   const {email, password} = req.body;

   try {
      const user = await User.login(email, password);
      res.status(200).json({user: user})
   } catch(error) {
    res.status(400).json("incorrect password")
   }
   
}


module.exports.signup = async (req, res) => {
   res.render('signup')
   
}

module.exports.login = async (req, res) => {
   res.render('login')
}

