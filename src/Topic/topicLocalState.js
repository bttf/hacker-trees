class TopicLocalState {
  constructor(topicId) {
    if (!topicId) return;

    this.storageKey = `topics.${topicId}`;
  }

  _getState() {
    let topicState = {};

    try {
      topicState = JSON.parse(window.localStorage.getItem(this.storageKey)) || {};
    } catch(e) { /* TODO report error to a monitoring service */ }

    return topicState;
  }

  getState() {
    return this._getState();
  }

  setKey(key, value) {
    const state = this._getState();

    state[key] = value;

    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(state));
    } catch(e) { /* TODO report error to a monitoring service */ }

    return state;
  }
}

export default TopicLocalState;
