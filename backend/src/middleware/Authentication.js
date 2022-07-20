import { getAuth } from 'firebase-admin/auth';

export async function isAuthenticated(req, res, next) {
  // Extract the token from "Authorization: Bearer <Token>"
  const authToken = req.headers['authorization'].slice(7);
  try {
    getAuth().verifyIdToken(authToken).then((decodedToken) => {
      res.locals = { ...res.locals, uid: decodedToken.uid, role: decodedToken.role, email: decodedToken.email };
      console.log('decodedToken', JSON.stringify(decodedToken));
      return next()
    });
  } catch (err) {
    console.error(`${err.code} -  ${err.message}`);
    return res.status(401).send({ message: 'Unauthorized' });
  }
}