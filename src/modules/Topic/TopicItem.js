import React, { Component } from 'react';

export default ({ topic, onClick }) => <div onClick={onClick} className="topic-item">{topic.title}</div>;
