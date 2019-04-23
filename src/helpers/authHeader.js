export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    //TODO: Reemplazar por el nonce de WP
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
  }
}