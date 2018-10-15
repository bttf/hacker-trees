import React from 'react';
import styled from 'styled-components';
import Topic from './Topic';

class Collection extends React.Component {
  state = {
    parentTopic: null,
    selectedTopic: null,
  }

  setSelectedTopic = ({ topic, parentTopic }) => {
    this.setState({
      parentTopic,
      selectedTopic: topic,
    });
  }

  resetSelectedTopic = () => {
    this.setState({
      parentTopic: null,
      selectedTopic: null,
    });
  }

  render() {
    const { className, topics } = this.props;
    const { selectedTopic, parentTopic } = this.state;

    if (selectedTopic) {
      return (
        <div>
          <h2>{parentTopic.title}</h2>
          <div className="back-to-parent">
            <button onClick={() => this.resetSelectedTopic()}>
              &lt;&lt; back
            </button>
          </div>
          <ul>
            <Topic level={0} topic={selectedTopic} />
          </ul>
        </div>
      );
    }

    return (
      <ul className={className}>
        {topics.map((topic, index) => (
          <Topic
            collapsed
            level={0}
            key={index}
            topic={topic}
            onSelectTopic={this.setSelectedTopic}
          />
        ))}
      </ul>
    );
  }
}

export default styled(Collection)`
  &, li {
    list-style-type: none;
  }

  .back-to-parent {
    font-size: 8px;
    color: #ccc;
    background-color: #eee;
    margin-bottom: 12px;
    padding: 4px; 2px;
  }
`;
