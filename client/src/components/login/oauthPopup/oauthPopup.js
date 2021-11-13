const oauthLogin = (oauthUrl) => {
  const loginPopup = window.open(
    oauthUrl,
    "oauth login",
    "resizable,scrollbars,status"
  );

  const timer = setInterval(() => {
    if (loginPopup.closed) {
      clearInterval(timer);
      window.open('/', "_self");
    }
  }, 500);

}

export default oauthLogin;