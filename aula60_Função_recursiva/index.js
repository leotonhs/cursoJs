function recursiva (max) {
    console.log(max)
    if (max >= 1000) return;
    max++;
    recursiva(max);
}
recursiva(0);

//é uma função que auto se invoca