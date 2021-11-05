function setFirefoxThemecolors(theme)
{
  if (theme.colors != null || theme.colors.toolbar != null & theme.colors.popup != null)
  {
    document.getElementById('banner').style.backgroundColor = theme.colors.toolbar 
    document.getElementById('banner').style.color = theme.colors.toolbar_text
    
    document.body.style.backgroundColor = theme.colors.popup
    document.body.style.color = theme.colors.popup_text
  }
}

(async function () {
	if ((navigator.userAgent.includes = "Firefox")) {
        var theme = await browser.theme.getCurrent();
		setFirefoxThemecolors(theme);
	}
})();
