const axios = require("axios");
require("dotenv").config;

module.exports = async (query, variables) => {
  const {
    data: { data, error },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });

  console.log(data);

  return {
    statusCode: 200,
    data,
  };
};
