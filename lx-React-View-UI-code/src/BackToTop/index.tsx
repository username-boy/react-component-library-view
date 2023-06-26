import React, {useState, useEffect} from 'react';

interface ScrollToTopProps {
  /**
   * @description 向下滑动的值
   */
  showUnder?: number;
  /**
   * @description css样式
   */
  style: React.CSSProperties
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const {showUnder, style, ...restProps} = props
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const showUnderChange = showUnder !== undefined ? showUnder : 300
    setIsVisible(scrollTop > showUnderChange);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            color: '#ffffff',
            backgroundColor: '#3742fa',
            width: '100px',
            height: '40px',
            margin: 0,
            padding: 0,
            border: 'none',
            outline: "none",
            borderRadius: '10px',
            fontSize: '18px',
            cursor: "pointer"
          }}
          {...restProps}
        >
          返回顶部
        </button>
      )}
    </div>
  );
};
ScrollToTop.defaultProps = {
  showUnder: 300,
  style:{}
}
export default ScrollToTop;
