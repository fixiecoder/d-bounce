module.exports = (() => {
  const names = {};
  return function debounce(cb, name = 'default', timeout = 300, args = []) {
    names[name] = names[name] || {};
    if((cb === undefined || cb === null) && names[name]) {
      clearTimeout(names[name].timeout);
      delete names[name];
      return;
    }
    if(typeof cb !== 'function') {
      console.error('d-bounce must be given a callback function, null or undefined as the first argument');
      return;
    }
    clearTimeout(names[name].timeout);
    names[name].timeout = setTimeout(() => {
      cb.apply(null, args);
      delete names[name];
    }, timeout);
  };
})();
