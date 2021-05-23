import Sequelize from "sequelize";
import Users from "../db/models/Users.mjs";

const Op = Sequelize.Op;

export const get = (id) => {
  return Users.findOne({
    attributes: [
      "id",
      "userID",
      "name",
      "role",
      "sex",
      "contacts",
      "login",
      "photo",
      "tokens",
    ],
    where: { id },
  });
};

export const getAll = () => {
  return Users.findAll({
    attributes: ["userID", "name", "description", "contacts", "photo"],
    where: { role: "user" },
  });
};

export const getMe = (userID) => {
  return Users.findOne({
    attributes: ["userID", "name", "role", "sex", "contacts", "login", "photo"],
    where: { userID },
  });
};

export const getPublicInfo = (userID) => {
  return Users.findOne({
    attributes: ["userID", "name", "sex", "contacts", "photo"],
    where: { userID },
  });
};

export const getPostsById = (userID) => {
  return Users.findOne({
    attributes: ["posts"],
    where: { userID },
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
      name: body.name,
      sex: body.sex,
      description: body.description,
      role: body.role,
      contacts: body.contacts,
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

export const change = (data, userID) => {
  return Users.update(data, {
    where: { userID },
  });
};

export const addPost = async (post, id) => {
  // MUST HAVE OPTIMIZATION
  if (!post.input) throw new Error("Incorrect input!");
  const posts = await Users.findOne({
    attributes: ["posts"],
    where: { userID },
  });
  posts ??= [];
  const numberOfPost = posts[posts.length - 1].id + 1 ?? 1;
  posts.push({
    upload: post?.upload,
    input: post.input,
    id: numberOfPost,
  });
  return Users.update(
    { posts },
    {
      where: { id },
    }
  );
};

export const delPost = async (postID, id) => {
  // MUST HAVE OPTIMIZATION
  if (!postID) throw new Error("Incorrect post ID!");
  const posts = await Users.findOne({
    attributes: ["posts"],
    where: { userID },
  });
  posts ??= [];
  posts.splice(postID - 1, 1);
  return Users.update(
    { posts },
    {
      where: { id },
    }
  );
};

export const del = (userID) => Users.destroy({ where: { userID } });
