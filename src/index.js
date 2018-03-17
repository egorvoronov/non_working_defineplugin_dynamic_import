import module3 from './module3';
import module4 from './module4';

console.log('This is index');

import(/* webpackChunkName: "lazy" */ './module1').then(module1);
import(/* webpackChunkName: "lazy" */'./module2').then(module2);


if (isDesktop) {
    console.log('isDesktop equals true');
    module3();
} else {
    console.log('Lazy Component Rendered');
    module4();
}