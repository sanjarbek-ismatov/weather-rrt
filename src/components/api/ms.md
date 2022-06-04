```js
async function fetchEvent() {
  await fetch("https://jsonplaceholder.typicode.com/")
    .then((res) => res.json())
    .then((dat) => console.log(dat));
}
```
