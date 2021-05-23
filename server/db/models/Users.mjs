import Sequelize from "sequelize";
import sequelizeConnect from "../config/connect.mjs";
import bcrypt from "bcrypt";
const { UUID, UUIDV4, STRING, TEXT, JSON, INTEGER } = Sequelize;

const Users = sequelizeConnect.define(
  "Users",
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    userID: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: TEXT,
      allowNull: true,
    },
    login: {
      type: STRING,
      allowNull: false,
    },
    posts: {
      type: JSON,
      allowNull: true,
    },
    role: {
      type: TEXT,
      defaultValue: "user",
      allowNull: false,
    },
    sex: {
      type: STRING,
      allowNull: true,
    },
    tokens: {
      type: JSON,
      defaultValue: [],
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    contacts: {
      type: JSON,
      defaultValue: [],
      allowNull: true,
    },
    photo: {
      type: TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

Users.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
Users.sync({ force: false });

export default Users;
