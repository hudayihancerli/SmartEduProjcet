const nodemailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: "index"
    });
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: "register"
    });
}

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: "login"
    });
}
exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
    });
}
exports.sendEmail = async(req, res) => {
try{
    const outputMessage = `
    <h1>Mail Details </h1>

    <ul>
        <li>Name : ${req.body.name} </li>
        <li>Email : ${req.body.email} </li>
    </ul>

    <h1>Message</h1>

    <p> ${req.body.message} </p>
    `

    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user: "m.hudayihancerli@gmail.com",
            pass: "djhogfgcnyduryce"
        }
    });

    let info = await transporter.sendMail({
        from : '"Smart Eu Contact Form" <m.huayihancerli@gmail.com> ',
        to: req.body.email,
        subject:"Smart Edu Contact Form new message",
        html: outputMessage
    })

    req.flash("success","We Receivd Your message succesfully");
  
}catch(err){
    req.flash("error",`Something happend!`);
}
res.status(200).redirect('contact');
}