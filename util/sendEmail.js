const nodemailer = require('nodemailer')
// 发送 email 类
class handleEmail {
    static async sendEm(toEmail,title,text) {
        // 邮箱回复
        let transporter = nodemailer.createTransport({
            // host: 'smtp.ethereal.email',
            host: 'smtp.163.com',
            // service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
            port: 465, // SMTP 端口
            secureConnection: true, // 使用了 SSL
            auth: {
                user: 'zjn8752@163.com',
                // 自己的邮箱                
                pass: 'Zhaojianing1030'// 授权码 
            }
        });

        let mailOptions = {
            from: '易山博客<zjn8752@163.com>',
            // 收件人显示的发件人信息       
            to: toEmail,
            // to: 'zjn1030@iCloud.com',
            // 目标邮箱号      
            subject: title,
            // subject: toName + ',您在易山博客收到评论回复 ✔',
            text: text
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
        });

        
    }
}

module.exports = handleEmail
