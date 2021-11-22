const express = require("express");
// eslint-disable-next-line no-unused-vars,new-cap
const router = express.Router();

// eslint-disable-next-line camelcase
const user_repos = require("../data/mock");

// -------------> Get USer Repo -----
router.get("/api/repos/:username", (req, res) => {
  const username = req.params.username;
  // eslint-disable-next-line no-unused-vars
  // const fromIIII = [1, 2, 3, 4, 5];
  for (const _data of user_repos.user_repos) {
    if (username === _data.userName) {
      res.end(JSON.stringify(_data.repos));
      break;
    }
  }
  res.end({
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest/reference/repos#list-repositories-for-a-user",
  });
});
// ---------------> End of Get User Repo ----


// --------------> Get bio info -----
router.get("/api/users/:username", (req, res) => {
  const username = req.params.username;
  // eslint-disable-next-line no-unused-vars
  // const fromIIII = [1, 2, 3, 4, 5];
  for (const _data of user_repos.user_repos) {
    if (username === _data.userName) {
      res.end(JSON.stringify(_data.bio_data));
      break;
    }
  }
  res.end({
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest/reference/repos#list-repositories-for-a-user",
  });
});
//  --


module.exports = router;
