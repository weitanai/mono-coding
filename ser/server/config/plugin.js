"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  static: true,
  cors: {
    enable: true,
    package: "egg-cors",
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize"
  },
  ejs: {
    enable: true,
    package: "egg-view-ejs",
  },
  validate : {
    enable: true,
    package: "egg-validate",
  }
};
