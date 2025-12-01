
{
    var a = 10;

    let b = 20;

    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a); //works fine, var is funcion scoped
console.log(b); //error : b is not defined
console.log(c); //error : c is not defined