import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const DivSizeTracker = ({ className, children, style }) => {
  const [size, setSize] = useState({});
  const trackerRef = useRef(null);
  const { width, height } = size;
  const isRender = width && height && children && typeof children === 'function';

  const calcSize = useCallback(() => {
    const { width, height } = trackerRef.current.getBoundingClientRect();
    setSize({ width, height });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', calcSize);

    return () => window.removeEventListener('resize', calcSize);
  }, []);

  useLayoutEffect(() => {
    calcSize();
  }, []);


  return (
    <div
      style={style}
      ref={trackerRef}
      className={`div-size-tracker ${className}`}
    >
      <div className="div-size-tracker-content">
        {isRender ? children(width, height) : null}
      </div>
    </div>
  );
};

DivSizeTracker.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

DivSizeTracker.defaultProps = {
  style: {},
  className: '',
};

export default DivSizeTracker;
