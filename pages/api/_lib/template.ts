import { readFileSync } from 'fs'
import marked from 'marked'
import { sanitizeHtml } from './sanitizer'
import { ParsedRequest } from './types'
const twemoji = require('twemoji')
const twOptions = { folder: 'svg', ext: '.svg' }
const emojify = (text: string) => twemoji.parse(text, twOptions)

function getCss(theme: string, fontSize: string) {
  let background = 'white'
  let foreground = 'black'
  let radial = 'lightgray'

  if (theme === 'dark') {
    background = 'black'
    foreground = 'white'
    radial = 'dimgray'
  }
  return `
    body {
        width: 1200px;
        height: 630px;
        font-family: 'Fraunces', sans-serif;
        color: white;
        margin: 0px
    }

    .main-wrapper{
        
        width: 1200px;
        height: 630px;
        display: grid;
        grid-template-columns: 2.5fr 0.5fr;
    }

    code {
        color: #D400FF;
        font-family: 'Fraunces';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .text-wrapper{
        background-image: linear-gradient(262.98deg, rgba(108, 90, 44, 0.68) 19.45%, rgba(108, 90, 44, 0.69) 82.13%), url(https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding-left: 36px;
        display: flex;
        align-items: center;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }

    .banner{
        height: 630px;
        overflow: hidden;
    }

    .banner-heading{
        transform-origin: 0 0;
        transform: rotate(90deg) translateY(calc(-165px));; 
        font-size: 7em;
        color: white;
        font-family: 'Fraunces', sans-serif;
        font-weight: bold;    
        margin-block-end: 0em;
        margin-block-start: 0em;
        height: 200px;
        width: 630px;
        text-align: center;
        vertical-align: middle
    }
    
    .heading {
        font-family: 'Fraunces', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.8;
    }`
}

export function getHtml(
  parsedReq: ParsedRequest,
  name: String,
  number: Number,
  colour: String
) {
  const { username, theme, fontSize } = parsedReq
  console.log(username)

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
        <div class="main-wrapper">
            <div class="text-wrapper">
                <div>          
                    <h1 style="font-size: 9em; font-weight: 900; margin-block-start: 0em; margin-block-end: 0em;  line-height: 0.9">HACKER ZEPHYR</h1>
                    <h1 style="font-size: 3em; margin-block-start: 0em; margin-block-end: 0.4em;">Burlington to Los Angeles</h1>
                    <div style="display: flex">
                        
                        <div style="height: 92px; margin-right: 12px; border-radius: 12px; border: 4px solid white; display: flex">
                            <img src="https://github.com/${username}.png" style="filter: grayscale(100%) sepia(40%); height: 92px; border-radius: 8px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;" />
                            <div style="height: 92px; display: flex; align-items: center; margin-left: 12px; margin-right: 12px">
                                <div>
                                    <h3 style="margin-block-start: 0em; margin-block-end: 0em;">Issued to</h3>
                                    <h1 style="margin-block-start: 0em; margin-block-end: 0em;">${name}</h3>
                                </div>
                            </div>
                        </div>
                        <div style="width: 92px; height: 92px; border-radius: 12px; border: 4px solid white; display: flex; align-items: center; justify-items: center; justify-content: center;">
                            <div>
                                
                                <h1 style="margin-bottom: 0px;font-size: 1.3em; margin-block-end: 0.3em; margin-block-start: 0em; line-height: 0.8; text-align: center">June</h1>
                                <h1 style="line-height: 0.8;font-size: 3em; margin-block-end: 0em; margin-block-start: 0em; text-align: center">16</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner" style="background: ${colour}">
                <h1 class="banner-heading">No. ${number}</h1>
            </div>
        </div>
    </body>
</html>`
}

function getImage(src: string, width = 'auto', height = '225') {
  return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`
}

function getPlusSign(i: number) {
  return i === 0 ? '' : '<div class="plus">+</div>'
}
