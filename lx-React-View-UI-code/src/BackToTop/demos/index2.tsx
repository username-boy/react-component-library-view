import React from 'react';
import ScrollToTop from '../index';

const App: React.FC = () => {
  const Style: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    color: '#ffffff',
    backgroundColor: '#4994c4',
    width: '100px',
    height: '40px',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: "none",
    borderRadius: '10px',
    fontSize: '18px',
    cursor: "pointer"
  }
  return (
    <div>
      <h1>一键返回顶部</h1>
      <div style={{height: '2000px'}}>以下是滚动的内容</div>
      <ScrollToTop showUnder={1000} style={Style}/>
    </div>
  );
};

export default App;
