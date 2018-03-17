console.log('This is index');

if (__IS_SERVER__) {
    import('./module1').then(module1 => module1());
} else {
    import('./module2').then(module2 => module2());
}