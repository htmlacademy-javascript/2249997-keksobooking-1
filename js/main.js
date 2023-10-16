import { createObject, SIMILAR_OBJECT_COUNT } from './data.js';

const similarObjects = Array.from({ length: SIMILAR_OBJECT_COUNT }, (item, i) => createObject(i + 1));

console.log(similarObjects);
