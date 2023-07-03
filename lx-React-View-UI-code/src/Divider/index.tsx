import React, {FC, useMemo, memo} from 'react';
import './index.module.less';

interface dividerProps {
  /**
   *@description 显示的内容
   */
  children?: any;
  /**
   * @description 字体大小
   */
  fontSize?: Number;
  /**
   * @description 分割线颜色
   * @default #cccccc
   */
  borderColor?: String;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: String;
  /**
   * @description 分割线类型
   * @default border
   */
  dashed?: Boolean;
}

const Divider: FC<dividerProps> = memo((props) => {
  const {children, fontSize, borderColor, align, dashed} = props;
  // 分割线对齐的方式
  const lineAlign = useMemo(() => {
    if (align === 'left') {
      return {
        justifyContent: 'left',
      };
    } else if (align === 'right') {
      return {
        justifyContent: 'right',
      };
    }
    return {};
  }, [align]);
  // 分割线的颜色
  const lineColor = useMemo((): Object => {
    if (borderColor) {
      return {
        borderColor: borderColor,
      };
    }
    return {};
  }, [borderColor]);
  // 分割线的文本样式
  const textStyle = useMemo(() => {
    if (fontSize) {
      return {
        fontSize: `${fontSize}px`,
      };
    }
  }, [fontSize]);
  return (
    <div className="divider">
      <div className={dashed ? 'dashed' : 'line'} style={{...lineAlign, ...lineColor}}>
        {children && (
          <span className="line-text" style={textStyle}>
            {children}
          </span>
        )}
      </div>
    </div>
  );
});
export default Divider;
