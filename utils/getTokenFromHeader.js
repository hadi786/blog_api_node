const getTokenFromHeader = req => {
  const headerObj = req.headers;

    // verify authorization object receive from headers
  if(!headerObj['authorization']){
    return false;
  }

  // get token from header
  const token = headerObj['authorization'].split(" ")[1];
  if(token !== undefined){
    return token;
  } else {
    return false;
  }
}
module.exports = getTokenFromHeader