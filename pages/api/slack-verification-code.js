const base64Encode = string => {
  const buff = Buffer.from(string)
  return buff.toString('base64')
}

const encodeFormData = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default async (req, res) => {
  res.send('Hey sneaky! Applications have closed')
  const { code, state } = req.query
  const { SLACK_CLIENT_ID, SLACK_CLIENT_SECRET, AIRBRIDGE_KEY } = process.env

  const results = {
    prefillFields: {}
  }

  await Promise.all([
    fetch('https://slack.com/api/oauth.v2.access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64Encode(
          SLACK_CLIENT_ID + ':' + SLACK_CLIENT_SECRET
        )}`
      },
      body: encodeFormData({ code, state })
    })
      .then(r => r.json())
      .then(d => (results.authData = d)),
    fetch(
      `https://airbridge.hackclub.com/v0.1/appYNERZpoDo0XMUW/Application Login?authKey=${AIRBRIDGE_KEY}&select={"filterByFormula":"{OAuth State}='${state}'"}`
    )
      .then(r => r.json())
      .then(r => {
        results.loginRecord = r[0]
        results.prefillFields['Application Record ID'] = results.loginRecord.id
      })
  ])
  await fetch(
    `https://airbridge.hackclub.com/v0.1/appYNERZpoDo0XMUW/Application Login?authKey=${AIRBRIDGE_KEY}&meta=true`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: results.loginRecord.id,
        fields: {
          'Slack ID': results.authData.authed_user.id
        }
      })
    }
  )

  if (!results.prefillFields['Application Record ID']) {
    const errorData = {
      code,
      state,
      loginRecord: results.loginRecord,
    }
    return res.send(
      `Something went wrong. Please email zephyr@hackclub.com the following information: ${base64Encode(JSON.stringify(errorData))}`
    ).end()
  }

  try {
    await fetch(
      `https://airbridge.hackclub.com/v0.1/Operations/People?authKey=${AIRBRIDGE_KEY}&select={"filterByFormula":"{Slack ID}='${results.authData.authed_user.id}'"}`
    )
      .then(r => r.json())
      .then(r => {
        results.personRecord = r[0]
        const fields = [
          'Full Name',
          'Email',
          'Address (state)',
          'Address (country)',
          'Address (city)',
          'Address (zip code)',
          'Address (first line)',
          'Address (second line)',
          'Phone Number'
        ]
        fields.forEach(field => {
          if (results.personRecord.fields[field]) {
            results.prefillFields[field] = encodeURIComponent(results.personRecord.fields[field])
          }
        })
      })
  } catch (e) {
    console.log('Issue getting ops info, skipping')
  }

  const redirectUrl = `https://airtable.com/shrveiJhxET31yFj0?prefill_Application%20Record%20ID=${results.prefillFields['Application Record ID']}&prefill_Email%20Address=${results.prefillFields['Email']}&prefill_Name=${results.prefillFields['Full Name']}`
  res.redirect(redirectUrl).end()
}
