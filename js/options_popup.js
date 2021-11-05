let optionKeys = ['preferred_thumbnail_file', 'video_title_format'];

chrome.storage.sync.get(optionKeys, function (storage) {
    optionKeys.forEach(function (optionKey) {
        document.getElementsByName(optionKey).forEach(function (item) {

            if (storage[optionKey] === item.value) {
                item.checked = true;
            }

            item.addEventListener('input', function () {
                chrome.storage.sync.set({[optionKey]: item.value});
            })
        });
    })
});

const textElements = document.querySelectorAll('[data-localize]');
textElements.forEach((e) => {
  const ref = e.dataset.localize;
  if (ref) {
     const translated= ref.replace(/__MSG_(\w+)__/g, (match, theGroup) => chrome.i18n.getMessage(theGroup));
    if (translated) {
      e.innerText = translated;
    }
  }
});

let donateButton = document.getElementById('donatebutton');
donateButton.onclick = function () {
    document.getElementById('settings').style.display = 'none';
    donateButton.style.display = 'none';
    document.getElementById('donate').style.display = 'block';
    settingsButton.style.display = 'block';
}
document.getElementById('paypallink').onclick = function () {
    chrome.tabs.create({url: 'https://paypal.me/pietervanheijningen'})
}

let settingsButton = document.getElementById('settingsButton');
settingsButton.onclick = function () {
    document.getElementById('donate').style.display = 'none';
    settingsButton.style.display = "none";
    document.getElementById('settings').style.display = 'block';
    donateButton.style.display = 'block';
}