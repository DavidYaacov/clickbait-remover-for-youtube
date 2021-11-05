#!/bin/bash

mv js/firefox_theme.js firefox_theme_disable.js &&
zip -r chrome.zip _locales/ images/ js/ manifest.json options_popup.html &&
mv manifest.json manifest_temp.json &&
mv firefox_manifest.json manifest.json &&
mv firefox_theme_disable.js js/firefox_theme.js &&
zip -r firefox.zip _locales/ images/ js/ manifest.json options_popup.html &&
mv manifest.json firefox_manifest.json &&
mv manifest_temp.json manifest.json