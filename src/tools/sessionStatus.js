function sessionStatus() {
  let activeSession;

  const sessionData = JSON.parse(localStorage.getItem("userSessionData"));
  const userAccessToken = sessionData ? sessionData.userAccessToken : null;

  if (userAccessToken) {
    activeSession = true;
  } else {
    activeSession = false;
  }
  return activeSession;
}

export default sessionStatus;
