console.log('Polyfills for server environment loaded');

global['window'] = global['window'] || ({} as any);
global['document'] = global['document'] || ({} as any);
global['requestAnimationFrame'] =
  global['requestAnimationFrame'] ||
  function (callback: FrameRequestCallback) {
    return setTimeout(callback, 0);
  };
global['cancelAnimationFrame'] =
  global['cancelAnimationFrame'] ||
  function (id: number) {
    clearTimeout(id);
  };

global['IntersectionObserver'] =
  global['IntersectionObserver'] ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

global['MutationObserver'] =
  global['MutationObserver'] ||
  class {
    observe() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
