chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'logo.png',
    title: 'Water Is Importent keep drinking',
    message: RandomMessage(),
    buttons: [
      { title: 'Snooze' }
    ],
    priority: 0
  });
});

chrome.notifications.onButtonClicked.addListener(async () => {
  const item = await chrome.storage.sync.get(['minutes']);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delay: item.minutes });
});

const MessageArray =[
  "Drink water when you first get up",
  "Drink water before each meal",
  "Drink water with snack",
  "Drink water before a workout",
  "Drink water with your medication,allowed",
  "Drink more water to prevent illness exposures",
  "Drink more water when you\'re ill",
  "Have a glass of water when you\'re tied",
  "sona pani pi lo na",
  "Ae bhau pani pi lo",
  "Pani kaeko nahi pita hai",
  "Zomato se msg aya he pani pi lo",
  "E andha he kya pani nahi dikhta",
  "Work hard drink hard only water"
]

function RandomMessage(){
  return MessageArray[Math.floor(Math.random() * MessageArray.length)];
}
