const a = 20;
{
    const a = 10;
    {
        const a = 100;
        console.log(a);
    }
    console.log(a);
}
console.log(a);