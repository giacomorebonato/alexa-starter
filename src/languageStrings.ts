import recipes from './recipes'

export default {
  en: {
    translation: {
      RECIPES: recipes.RECIPE_EN_US,
      SKILL_NAME: "Minecraft Helper",
      WELCOME_MESSAGE:
        "Welcome to %s. You can ask a question like, what's the recipe for a chest? ... Now, what can I help you with?",
      WELCOME_REPROMPT:
        "For instructions on what you can say, please say help me.",
      DISPLAY_CARD_TITLE: "%s  - Recipe for %s.",
      HELP_MESSAGE:
        "You can ask questions such as, what's the recipe, or, you can say exit...Now, what can I help you with?",
      HELP_REPROMPT:
        "You can say things like, what's the recipe, or you can say exit...Now, what can I help you with?",
      STOP_MESSAGE: "Goodbye!",
      RECIPE_REPEAT_MESSAGE: "Try saying repeat.",
      RECIPE_NOT_FOUND_MESSAGE: "I'm sorry, I currently do not know ",
      RECIPE_NOT_FOUND_WITH_ITEM_NAME: "the recipe for %s. ",
      RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: "that recipe. ",
      RECIPE_NOT_FOUND_REPROMPT: "What else can I help with?"
    }
  },
  "en-US": {
    translation: {
      RECIPES: recipes.RECIPE_EN_US,
      SKILL_NAME: "American Minecraft Helper"
    }
  },
  "en-GB": {
    translation: {
      RECIPES: recipes.RECIPE_EN_GB,
      SKILL_NAME: "British Minecraft Helper"
    }
  },
  de: {
    translation: {
      RECIPES: recipes.RECIPE_DE_DE,
      SKILL_NAME: "Assistent für Minecraft in Deutsch",
      WELCOME_MESSAGE:
        "Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?",
      WELCOME_REPROMPT:
        "Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.",
      DISPLAY_CARD_TITLE: "%s - Rezept für %s.",
      HELP_MESSAGE:
        "Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
      HELP_REPROMPT:
        "Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
      STOP_MESSAGE: "Auf Wiedersehen!",
      RECIPE_REPEAT_MESSAGE: "Sage einfach „Wiederholen“.",
      RECIPE_NOT_FOUND_MESSAGE: "Tut mir leid, ich kenne derzeit ",
      RECIPE_NOT_FOUND_WITH_ITEM_NAME: "das Rezept für %s nicht. ",
      RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: "dieses Rezept nicht. ",
      RECIPE_NOT_FOUND_REPROMPT: "Womit kann ich dir sonst helfen?"
    }
  }
};
