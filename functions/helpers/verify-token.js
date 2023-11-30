// Ejemplo en un servidor Node.js con el paquete 'jsonwebtoken'
const admin = require('firebase-admin');
const { FIREBASE_CREDENTIALS } = require("../static/config");

// Middleware para verificar el token en las solicitudes
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_CREDENTIALS.projectId,
    privateKey: FIREBASE_CREDENTIALS.privateKey,
    clientEmail: FIREBASE_CREDENTIALS.clientEmail,
  }),
});

const verifyToken = async  (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  admin.auth().verifyIdToken(token)
    .then((decodedToken) => {
      console.log(decodedToken)
      req.user = decodedToken;
      return admin.auth().getUser(decodedToken.uid);

    })
    .then((userRecord) => {
      if (!userRecord.disabled) {
        next();
      } else {
        return res.status(401).json({ message: 'Usuario deshabilitado' });
      }
    })
    .catch((error) => {
      console.log(error)
      return res.status(401).json({ message: 'Token no válido' });
    });
}


module.exports = { verifyToken };
