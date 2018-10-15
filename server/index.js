const express = require('express');
const app = express();
const fetch = require('./fetch');
const Promise = require('bluebird');
const PORT = process.env.PORT || 4000;

fetch.Promise = Promise;

let counter = 0;

const getStory = async (id) => {
  const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

  if (story && story.kids) {
    const kids = await Promise.map(story.kids, id => getStory(id));
    story.kids = kids;
  }

  return story;
};

app.use(express.static('./build'));

app.get('/top', async (req, res) => {
  const allStories = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const stories = allStories.slice(0, 5);

  const hydratedStories = await Promise.map(stories, getStory);

  res.json(hydratedStories);
});

app.get('/ask', async (req, res) => {
  const allStories = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
  const stories = allStories.slice(0, 5);

  const hydratedStories = await Promise.map(stories, getStory);

  res.json(hydratedStories);
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
