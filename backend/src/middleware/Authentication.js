import { getAuth } from 'firebase-admin/auth';
import { UserService } from "../services/UserService";
import { httpResponse } from "../utils/response";

export async function isAuthenticated(req, res, next) {
  // Extract the token from "Authorization: Bearer <Token>" header
  const authToken = req.headers['authorization'].split(" ")[1];

  try {
    const token = await getAuth().verifyIdToken(authToken)
    const userId = await new UserService().getUserId(token.uid)
    if (userId != null) {
      res.locals = { ...res.locals, userId};
    }
    res.locals = { ...res.locals, userId, email: token.email, uuid: token.uid };
  } catch (err) {
    console.error(`${err.code} -  ${err.message}`);
    console.log(authToken)
    httpResponse(res, 401, "Unauthorized")
    return
  }
  next();
}
