const User = require('../models/user')
const bcryptjs = require('bcryptjs')
//const crypto = require('crypto')
//PENDIENTE crypto es parte de node ahora, actualizar!
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
const usuarios = require('../modelos/usuarios');

const sendEmail = async (email, uniqueString) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "c6g29ftmern@gmail.com",
            pass: "GarageStore2022" 
        }
    })

    let sender = "c6g29ftmern@gmail.com"
    let mailOptions ={
        from: sender,
        to: email,
        subject: "GarageStore: User registration validation",
        html: `Press <a href="https://garagestore.herokuapp.com/api/verify/${uniqueString}">here</a> to validate the user registration`
    };
    await transporter.sendMail(mailOptions, function(error,response){
        if(error){
            console.log(error)
        }else{
            console.log("Confirmation email sent!")
        }
    })
};

const authController = {

    userEmailVerification: async(req, res) => {

        const {uniqueString} = req.params;

        const user = await User.findOne({userUniqueString: uniqueString})
        if(user){
            user.userEmailVerified = true
            await user.save()
            res.redirect("https://garagestore.herokuapp.com/")
        }else{
            res.json({success: false, response: "Your email has not been verified"})
        }

    },

    userRegistration: async (req,res) => {
        let {username, email, password, rol, avatar, articulos_id,contacto_id, favoritos_id, feria, from} = req.body.Usuarios

        try{
            const userExists = await User.findOne({email})
            if (userExists){
                if(userExists.from.indexOf(from) !== -1){
                    res.json({success: false, from:"registrationForm", message: "You have already registered, please proceed to 'Log in'."})
                }else{
                    const hashedPassword = bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.userPassword.push(hashedPassword)
                    if(from === "registrationForm"){
                        //luego agregaremos verificacion via email
                        userExists.userUniqueString = crypto.randomBytes(15).toString('hex')
                        await userExists.save()
                        await sendEmail(email, userExists.uniqueString)
                        res.json({success: true, from:"registrationForm", message: "To confirm your registration we have sent an email to you."})
                    }else{
                        userExists.save()
                        res.json({success: true, from:"registrationForm", message: "Added "+from+" to you possibilities to 'Log in'."})
                    }
                }
            }else{
                const hashedPassword = bcryptjs.hashSync(password,10)
                const newUser = await new User({
                    username, 
                    email, 
                    password:[hashedPassword], 
                    rol, 
                    userUniqueString: crypto.randomBytes(15).toString('hex'),
                    avatar, 
                    contacto_id,
                    articulos_id,
                    favoritos_id,
                    feria, 
                    userEmailVerified:false,
                    from:[from],
                })
                if(from !== "registrationForm"){
                    await Usuarios.save()
                    res.json({success: true, from:"registrationForm", message: "Congrats! Your user has been created from: "+from})
                }
                else{
                    await Usuarios.save()
                    await sendEmail(email, Usuarios.userUniqueString)
                    res.json({success: true, from:"registrationForm", message: "We have sent an email to confirm the registration, please check your mailbox."})
                }
            }
        }
        catch (error){
            console.log(error)
            res.json({success: false, message: "We're sorry, something went wrong, please try again."})
        }
    },
    userLogIn: async (req, res)=>{
        const {email, password, from } = req.body.Usuarios
        try{
            const userExists = await User.findOne({email})
            if(!userExists){
                res.json({success: false, message: "You need to be registered. Please proceed to sign up first."})
            }
            else{
                if(from !== "logInForm"){
                    let passwordMatches = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatches.length > 0){
                        const userData = {
                            _id: userExists._id,
                            userName: userExists.username,
                            userEmail: userExists.email,
                            avatar: userExists.avatar,
                            from: userExists.from,
                        }
                        await userExists.save()
                        const token = jwt.sign({...Usuarios}, process.env.SECRET_KEY,{expiresIn:60*60*24})
                        res.json({
                            success: true, 
                            from: from, 
                            response: {token, Usuarios}, 
                            message: "Welcome back "+Usarios.username
                        })
                    }
                    else{
                        res.json({success: false, from: from, message: "You have not registered from "+from+", you can sign up from "+from})
                    }
                }
                else{
                    if(userExists.email){
                        let passwordMatches = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if(passwordMatches.length > 0){
                        const Usuarios ={
                            _id: userExists._id,
                            username: userExists.username,
                            email: userExists.email,
                            avatar: userExists.avatar,
                            from: userExists.from,
                        }
                        const token = jwt.sign({...Usuarios},process.env.SECRET_KEY,{expiresIn:60*60*24})
                        res.json({
                            success: true, 
                            from: from, 
                            response: {token, Usuarios}, 
                            message: "Welcome back "+Usuarios.username
                        })
                        }else{
                            res.json({success: false, from: from, message: "Email or password are incorrect"})
                        }
                    }
                    else{
                        res.json({success: false, from: from, message: "You have not verified your email, please check your mailbox to proceed with log in."})
                    }
                }
            }
        }
        catch(error){
            console.log(error)
            res.json({success: false, message: "We're sorry, something went wrong, please try again."})
        }
    },
    userLogOut: async (req, res)=>{
        const email = req.body.closeUser
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log(email + ' logged out'))
    },
    verifyToken: (req, res)=>{
        if(!req.err){
            res.json({
                success: true,
                response: {_id:req.Usuarios._id,
                     username: req.Usuarios.username,
                      email: req.Usuarios.email,
                     avatar: req.Usuarios.avatar,
                    from: "token"},
                message: "Welcome back "+req.Usuarios.username
            })
        }else{
            res.json({
                success: false,
                message: "Please log in again."
            })
        }
    },
}

module.exports = authController