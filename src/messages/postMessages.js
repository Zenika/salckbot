async function postSingleLineMessage(
  channelID,
  message,
  app,
  slackBotToken,
  notificationMessage
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message,
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postTwoLinesMessage(
  channelID,
  title,
  message,
  app,
  slackBotToken,
  notificationMessage
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message,
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postFourLinesMessageReminder(
  channelID,
  introduction,
  title1,
  message1,
  title2,
  message2,
  title3,
  message3,
  title4,
  message4,
  app,
  slackBotToken,
  notificationMessage,
  reminder
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: introduction,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title1,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message1,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title2,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message2,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title3,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message3,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title4,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message4,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "_:bulb: To update theses skills easily you can use the command */note [skill name]* or you can note them via *Skillz app*_",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: reminder
              ? ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:"
              : ":bulb: You can have this information monthly. Be sure that you've used the _/activate_ command",
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postThreeLinesMessageReminder(
  channelID,
  introduction,
  title1,
  message1,
  title2,
  message2,
  title3,
  message3,
  app,
  slackBotToken,
  notificationMessage,
  reminder
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: introduction,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title1,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message1,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title2,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message2,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title3,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message3,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "_:bulb: To update theses skills easily you can use the command */note [skill name]* or you can note them via *Skillz app*_",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: reminder
              ? ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:"
              : ":bulb: You can have this information monthly. Be sure that you've used the _/activate_ command",
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postTwoLinesMessageReminder(
  channelID,
  introduction,
  title1,
  message1,
  title2,
  message2,
  app,
  slackBotToken,
  notificationMessage,
  reminder
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: introduction,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title1,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message1,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title2,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message2,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "_:bulb: To update theses skills easily you can use the command */note [skill name]* or you can note them via *Skillz app*_",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: reminder
              ? ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:"
              : ":bulb: You can have this information monthly. Be sure that you've used the _/activate_ command",
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postOneLineMessageReminder(
  channelID,
  introduction,
  title1,
  message1,
  app,
  slackBotToken,
  notificationMessage,
  reminder
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: introduction,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title1,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message1,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "_:bulb: To update theses skills easily you can use the command */note [skill name]* or you can note them via *Skillz app*_",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: reminder
              ? ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:"
              : ":bulb: You can have this information monthly. Be sure that you've used the _/activate_ command",
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

module.exports.postFourLinesMessageReminder = postFourLinesMessageReminder;
module.exports.postOneLineMessageReminder = postOneLineMessageReminder;
module.exports.postTwoLinesMessageReminder = postTwoLinesMessageReminder;
module.exports.postSingleLineMessage = postSingleLineMessage;
module.exports.postTwoLinesMessage = postTwoLinesMessage;
module.exports.postThreeLinesMessageReminder = postThreeLinesMessageReminder;
