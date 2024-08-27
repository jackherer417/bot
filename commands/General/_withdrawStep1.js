/*CMD
  command: /withdrawStep1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: General
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

return sendMessage("‼️This is a test bot and you can’t withdraw your balance.")


if (!params) return
let text = `💳 *Please enter your OxaPay address*.

If you don't have one yet, create an account on [OxaPay.com](https://oxapay.com), and you can find your address in your dashboard.

Your address should start with OXA...`
sendMessage(text)

Bot.run({ command: "/withdrawStep2 ", options: { currency: params } })
