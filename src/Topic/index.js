import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import TopicLocalState from './topicLocalState';

class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.topicLocalState = new TopicLocalState(props.topic.id);
    const { collapsed } = this.topicLocalState.getState();

    this.state = {
      collapsed: collapsed != null ? collapsed : !!props.collapsed,
    }
  }

  toggleCollapse = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });

    this.topicLocalState.setKey('collapsed', !collapsed);
  }

  onSelectTopic = () => {
    const { topic, parentTopic, onSelectTopic } = this.props;
    console.log('DEBUG topic', topic);
    console.log('DEBUG parentTopic', parentTopic);
    onSelectTopic({
      topic,
      parentTopic,
    });
    window.scroll(0, 0);
  }

  render() {
    const { className, parentTopic, topic, onSelectTopic } = this.props;
    const { descendants, kids, title, text, by } = topic;
    const { collapsed } = this.state;
    return (
      <li className={className}>
        <div className="expander"
            onClick={this.toggleCollapse}
        >
          <button
          >
            {this.state.collapsed ? '+' : '-'}
          </button>
        </div>

        {title && (
          <div className="title">
            {title}
          </div>
        )}

        {text && (
          <div className={cx('text', { collapsed })}>
            {text}
          </div>
        )}

        <div className="info">
          <sub>{by} {descendants && `| ${descendants} replies`}</sub>
        </div>

        {kids && !collapsed && this.props.level < 2 && (
          <ul>
            {kids.map(kid => (
              <StyledTopic
                topic={kid}
                parentTopic={parentTopic || topic}
                level={this.props.level + 1}
                onSelectTopic={onSelectTopic}
              />
            ))}
          </ul>
        )}

        {kids && this.props.level >= 2 && (
          <div className="show-more">
            <button onClick={this.onSelectTopic}>Show more...</button>
          </div>
        )}
      </li>
    );
  }
}

const StyledTopic = styled(Topic)`
  & {
    position: relative;
    padding: 0 8px;
  }

  .expander {
    position: absolute;
    top: 8px;
    right: 0;
    left: -24px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 8px;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    padding: 4px 0;
  }

  .text {
    font-size: 18px;
    font-weight: 400;

    &.collapsed {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 24px;
    }
  }

  .info {
    margin-bottom: 12px;
  }

  .show-more {
    font-size: 8px;
    color: #ccc;
    background-color: #eee;
    margin-bottom: 12px;
    padding: 4px; 2px;
  }
`;

export default StyledTopic;
