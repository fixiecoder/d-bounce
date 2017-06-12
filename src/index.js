module.exports = (() => {
  const names = {};
  return function debounce(cb, name = 'default', timeout = 300, args = []) {
    if(typeof cb !== 'function') {
      console.error('d-bounce must be given a callback function as the first agrument');
      return;
    }
    names[name] = names[name] || {};
    clearTimeout(names[name].timeout);
    names[name].timeout = setTimeout(() => {
      cb.apply(null, args);
      delete names[name];
    }, timeout);
  };
})();
