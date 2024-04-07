export const Debounce = (f: any, ms: number) => {
  let timer: null | NodeJS.Timeout = null;

  return (...args: unknown[]) => {
    const onComplite = () => {
      f.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplite, ms);
  };
};
