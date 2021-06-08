import Sequelize from "sequelize";
import Users from "../db/models/Users.mjs";
import logger from "../logs/pino.mjs";
const Op = Sequelize.Op;

export const get = (id) => {
  return Users.findOne({
    attributes: [
      "id",
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
    attributes: ["id", "name", "description", "contacts", "photo"],
    where: { role: "user" },
  });
};

export const getMe = (id) => {
  return Users.findOne({
    attributes: ["id", "name", "role", "sex", "contacts", "login", "photo"],
    where: { id },
  });
};

export const getPublicInfo = (id) => {
  return Users.findOne({
    attributes: ["id", "name", "sex", "contacts", "photo", "description"],
    where: { id },
  });
};

export const getPostsById = (id) => {
  return Users.findOne({
    attributes: ["posts"],
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

export const update = async (body, id) => {
  return await Users.update(body, {
    where: { id },
  });
};

export const change = (data, id) => {
  return Users.update(data, {
    where: { id },
  });
};

export const addPost = async (post, id) => {
  // MUST HAVE OPTIMIZATION
  if (!post) throw new Error("Incorrect input!");
  let posts = await Users.findOne({
    attributes: ["posts"],
    where: { id },
  });
  posts = posts.posts ?? [];
  let numberOfPost = posts[posts.length - 1]?.id + 1;
  if (isNaN(numberOfPost)) numberOfPost = 1;
  posts.push({
    files: post?.files,
    text: post.text,
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
    where: { id },
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

export const del = (id) => Users.destroy({ where: { id } });
