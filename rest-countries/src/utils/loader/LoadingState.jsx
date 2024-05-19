import './loader.css';

const LoadingState = () => {
  return (
    <>
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </>
  );
};

export default LoadingState;
