import axios from "axios";

const getMessageFromChuck = async () => {
  const message = await axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.data.value;
    });
  return message;
};

export default {
  getMessageFromChuck,
};
