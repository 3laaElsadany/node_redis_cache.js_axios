const axios = require('axios');

const {
  createClient
} = require('redis');


const client = createClient()
  .on('error', err => console.log('Redis Client Error', err))

client.connect();

const setResponse = async (username, Repos) => {
  return `<h2>${username} has ${Repos} Github Repos</h2>`
}

const cache = async (req, res, next) => {
  const username = req.params.username
  await client.get(username)
    .then(async (Repos) => {
      if (Repos === null) {
        next();
      } else {
        res.send(await setResponse(username, Repos))
      }
    })
    .catch(err => {
      console.log(err)
    })
}

const getRepos = async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const Repos = response.data.public_repos;
    await client.set(username, Repos, 'EX', 3600)
    const result = await setResponse(username, Repos);

    res.send(result);

  } catch (err) {
    console.error(err);

    res.status(500);
  }
}


module.exports = {
  getRepos,
  cache
}