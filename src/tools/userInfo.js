//Runs from SessionStatus.js if the user session is active

function userInfo() {
  const sessionData = JSON.parse(localStorage.getItem("userSessionData"));
  const userCredits = sessionData ? sessionData.userCredits : null;
  const userName = sessionData ? sessionData.userName : null;
  const userEmail = sessionData ? sessionData.userEmail : null;
  const userAvatar = sessionData ? sessionData.userAvatar : null;
  const userAccessToken = sessionData ? sessionData.userAccessToken : null;

  return { userCredits, userName, userEmail, userAvatar, userAccessToken };
}

export default userInfo;
