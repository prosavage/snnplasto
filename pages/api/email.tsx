// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sendmail = require('sendmail')();

sendmail({
  from: 'test@finra.org',
  to: 'naman0311@gmail.com',
  subject: 'Hello World',
  html: 'Hooray NodeJS!!!'
}, function (err, reply) {
  console.log(err && err.stack)
  console.dir(reply)
})

  res.status(200).json({success: true})
}


const createMail = () => {
  const sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    silent: false,
    devHost: 'localhost', // Default: localhost
    smtpPort: 25, // Default: 25
    smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
  })

  return sendmail;
}