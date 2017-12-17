import Alexa = require('alexa-sdk')

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback)
  alexa.appId = process.env.APP_ID
  alexa.execute()
}

const handlers = {
  HelloWorldIntent : function (this: Alexa.Handler<Object>) {
    this.response.speak('Hello World!')
    this.emit(':tell', 'Hello World!')
  },
  'AMAZON.HelpIntent': function (this: Alexa.Handler<Object>) {
    this.attributes.speechOutput = this.t('HELP_MESSAGE')
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT')
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech)
  },
  'AMAZON.RepeatIntent': function (this: Alexa.Handler<Object>) {
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech)
  },
  'AMAZON.StopIntent': function (this: Alexa.Handler<Object>) {
    this.emit('SessionEndedRequest')
  },
  'AMAZON.CancelIntent': function (this: Alexa.Handler<Object>) {
    this.emit('SessionEndedRequest')
  },
  'SessionEndedRequest': function (this: Alexa.Handler<Object>) {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  },
  'Unhandled': function (this: Alexa.Handler<Object>) {
    this.attributes.speechOutput = this.t('HELP_MESSAGE')
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT')
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech)
  }
}
