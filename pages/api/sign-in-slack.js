import { v4 as uuidv4 } from 'uuid'

export default async (req, res) => {
  const { SLACK_CLIENT_ID, AIRBRIDGE_KEY } = process.env
  const uuid = uuidv4().toString()

  await fetch(`https://airbridge.hackclub.com/v0.1/appYNERZpoDo0XMUW/Application Login?authKey=${AIRBRIDGE_KEY}&meta=true`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'OAuth State': uuid
    })
  })

  const url = [
    "https://slack.com/oauth/v2/authorize",
    "?client_id=", SLACK_CLIENT_ID,
    "&user_scope=identity.basic",
    "&redirect_uri=",
    `&state=${uuid}`,
    "&team=",
  ].join('')

  res.redirect(url)
}
