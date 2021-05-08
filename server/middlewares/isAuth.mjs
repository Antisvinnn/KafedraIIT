const isAuth = (req, res, next) => {
  if (req.user === undefined)
    res.status(401).json({
      message: "Token is not defined!",
    });
  else if (req.user === false)
    res.status(401).json({
      message: "Token is not valid!",
    });
  else if (!req.user.role)
    res.status(400).json({
      message: "Acсess token requiered!",
    });
  else next();
};

export default isAuth;
