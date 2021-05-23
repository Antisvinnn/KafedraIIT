import jwt from "jsonwebtoken";

const { sign, decode, verify } = jwt;
const secret = "blasuper123secretbla";

export const generate = (data) => {
  const accessToken = sign(
    {
      id: data.id,
      role: data.role,
    },
    secret,
    { expiresIn: "15m" }
  );
  const refreshToken = sign({ id: data.id, role: data.role }, secret, {
    expiresIn: "3d",
  });
  return {
    accessToken,
    refreshToken,
    expires_in: decode(accessToken).exp,
  };
};

export const validate = (token) => {
  try {
    const decoded = verify(token, secret);
    return decoded;
  } catch (err) {
    return false;
  }
};

export const getInfo = (token) => decode(token, secret);
