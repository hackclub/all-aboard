import { IncomingMessage, ServerResponse } from 'http'
import { parseRequest } from './_lib/parser'
import { getScreenshot } from './_lib/chromium'
import { getHtml } from './_lib/template'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = false

export default async (req, res) => {
  console.log(req.query)
  const { Octokit } = require('@octokit/core')
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  let details = await octokit.request('GET /users/{username}', {
    username: req.query.username
  })
  console.log(details)

  const AirtablePlus = require('airtable-plus')

  const airtable = new AirtablePlus({
    baseID: 'appoBQQwL8ABXjasg',
    apiKey: process.env.AIRTABLE_TICKETS_TOKEN,
    tableName: 'GitHub Usernames'
  })

  let paths = await airtable.read()

  let valid = false

  let number = 0

  paths = paths.map((x, index) => {
    if (x['fields']['GitHub Usernames'] == req.query.username) {
      valid = true
      number = index + 1
    }
    return {
      username: x['fields']['GitHub Usernames'],
      number: index
    }
  })
  if (!valid) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end("<h1>Not Valid</h1><p>Sorry, you aren't listed</p>")
    return
  }
  const palx = require('palx')
  let colours = []
  Object.entries(palx('#5F8893')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#85865F')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#927B97')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#AA7B78')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#906B52')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#CE9960')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#4E6447')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#A34730')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  Object.entries(palx('#5F8893')).map(x => {
    if (x[0] == 'base' || x[0] == 'black') {
      return
    }
    x[1].map((x, index) => {
      if (index < 6) {
        return
      } else {
        colours.push(x)
      }
    })
  })
  console.log(colours)
  colours.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item]
  }, [])
  console.log(colours)
  try {
    const parsedReq = parseRequest(req)
    const html = getHtml(parsedReq, details.data.name, number, colours[number])
    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html')
      res.end(`<div style="width: 1200px; height: 630px">${html}</div>`)
      return
    }
    const { fileType } = parsedReq
    const file = await getScreenshot(html, fileType, isDev)
    res.statusCode = 200
    res.setHeader('Content-Type', `image/${fileType}`)
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    )
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
    console.error(e)
  }
}
