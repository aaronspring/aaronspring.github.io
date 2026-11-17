// GoatCounter events the data-goatcounter-click attributes cannot capture.
// count.js loads async, so an event fired before it is ready is sent on
// window load (async scripts finish before load). After load, a missing
// counter means it is blocked, and the event is dropped.
export const track = (path: string, title: string) => {
  const send = () => {
    const gc = (window as any).goatcounter;
    if (!gc?.count) return false;
    gc.count({ path, title, event: true });
    return true;
  };
  if (!send() && document.readyState !== 'complete') {
    addEventListener('load', send, { once: true });
  }
};

// Count readers who scroll down to a section, once per page view.
export const trackSeen = (id: string, path: string, title: string) => {
  const section = document.getElementById(id);
  if (!section) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      io.disconnect();
      track(path, title);
    }
  });
  io.observe(section);
};
