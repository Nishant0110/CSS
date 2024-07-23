var data =[
    {name: 'nishant',age:45},
    {name: 'kishan',age:25},
    {name:'ankit',age:undefined},
    {name:'krushant',age:null},
    {name: 'null',age:45}
];

const newargs = data.filter((i)=>{
    return i;
})
console.log(newargs);