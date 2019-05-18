export default async function externalComponent(url) {
  const name = url.split(`/`).reverse()[0].match(/^(.*?)\.umd/)[1];

  if (window[name]) return window[name];
  console.log(`HELLO FROM EXTERNAL COMPONENT`)
  console.log(name)

  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement(`script`);
    script.async = true;
    script.addEventListener(`load`, () => {
      resolve(window[name]);
    });
    script.addEventListener(`error`, () => {
      reject(new Error(`Error in External Component Loading ${url}`));
    });
    script.src = url;
    document.head.appendChild(script);
  });

  return window[name];
}
