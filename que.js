let arr=[1,2,3,1,1,2];
function findLarge(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    let max=0;
    for(let item in obj){
        if(obj[item]>max){
            max=obj[item]
        }
    }
    return max;
}
console.log(findLarge(arr))
