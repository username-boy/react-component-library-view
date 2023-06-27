import React, {FC, ReactNode, useState} from 'react';

interface OverlayProps {
  /**
   * @description 遮罩层状态
   */
  isOpen: boolean;
  /**
   * @description 关闭的callback
   */
  onClose: () => void;
  /**
   * @description 遮罩层显示的内容
   */
  children: ReactNode;
}

const childrenDefault = <div style={{backgroundColor: 'rgba(0,0,0,.7)', width: "600px", height: '300px'}}>
  <h1>this is a mask</h1>
</div>
const Overlay: FC<OverlayProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) {
    return null; // 如果不显示，直接返回 null
  }
  return (
    <div className="overlay">
      <div className="overlay-backdrop" onClick={onClose}></div>
      <div className="overlay-content">{children || childrenDefault}</div>
    </div>
  );
};
Overlay.defaultProps = {
  isOpen: false,
}
export default Overlay;
