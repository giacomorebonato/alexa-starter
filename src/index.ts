import Alexa = require('alexa-sdk')
import languageStrings from './languageStrings'
import handlers from './handlers'

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback)

  alexa.resources = languageStrings
  alexa.appId = process.env.APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}
