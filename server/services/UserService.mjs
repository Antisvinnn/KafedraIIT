import Sequelize from "sequelize";
import Users from "../db/models/Users.mjs";

const Op = Sequelize.Op;

export const get = (id) => {
  return Users.findOne({
    attributes: [
      "id",
      "userID",
      "surname",
      "name",
      "middleName",
      "role",
      "sex",
      "login",
      "photo",
      "tokens",
    ],
    where: { id },
  });
};

export const getMe = (id) => {
  return Users.findOne({
    attributes: [
      "userID",
      "surname",
      "name",
      "middleName",
      "role",
      "sex",
      "login",
      "photo",
    ],
    where: { id },
  });
};

export const find = (user) => {
  return Users.findOne({
    where: {
      [Op.or]: [{ login: user }],
    },
  });
};

export const create = (body) => {
  return Users.findOrCreate({
    where: {
      login: body.login,
    },
    defaults: {
      surname: body.surname,
      name: body.name,
      middleName: body.middleName,
      sex: body.sex,
      login: body.login,
      password: body.password,
      photo: body.photo,
    },
  });
};

export const update = (body, id) => {
  return Users.update(body, {
    where: { id },
  });
};

export const del = (id) => {
  return Users.destroy({
    where: { id },
  });
};
