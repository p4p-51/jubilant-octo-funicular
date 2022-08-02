import { getAuth } from 'firebase-admin/auth';

export async function isAuthenticated(req, res, next) {
  res.locals = { ...res.locals, uid: 1 };
  // Extract the token from "Authorization: Bearer <Token>"
  // const authToken = req.headers['authorization'].slice(7);
  // try {
  //   await getAuth().verifyIdToken(authToken).then((decodedToken) => {
  //     res.locals = { ...res.locals, uid: decodedToken.uid, role: decodedToken.role, email: decodedToken.email };
  //     console.log('decodedToken', JSON.stringify(decodedToken));
  //     return next()
  //   });
  // } catch (err) {
  //   console.error(`${err.code} -  ${err.message}`);
  //   return res.status(401).send({ code: "401", message: 'Unauthorized' });
  // }
  next();
}
