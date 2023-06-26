import React from 'react';
import ScrollToTop from '../index';

const App: React.FC = () => {
  return (
    <div>
      <h1>一键返回顶部</h1>
      <div style={{height: '2000px'}}>以下是滚动的内容</div>
      <ScrollToTop showUnder={500} style={{}}/>
    </div>
  );
};

export default App;
