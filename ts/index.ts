const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const foo = document.querySelector('.foo')?.firstChild;

if (foo) {
  (async () => {
    await sleep(2000);
    foo.textContent = 'foobar';
  })();
}
