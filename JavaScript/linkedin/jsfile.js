/// define a constant called backpack and an object/entity from it and export it

const backpack = {
    name:"everyday backpack",
    volume: 30,
    color:"gray",
    strapLength:{
        left:26,
        right:26
    },
    leadOpen:false
};

//accessing object's attribuites

console.log(backpack.volume);
console.log(backpack.strapLength.left);

export default backpack;