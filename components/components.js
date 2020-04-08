import MainArray from './mainArray';
import ArrayMap from './arrayMap';

// Map JSON to component
const Components = {
  mainArray: MainArray,
  arrayMap: ArrayMap
}

export default data => {
  if (typeof Components[data.component] !== "undefined") {
    return React.createElement(Components[data.component], {
      key: id,
      data
    });
  }
}