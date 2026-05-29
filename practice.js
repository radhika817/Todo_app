/*Sum of array
Maximum element in array
Reverse string
Count vowels
Even/Odd checker
Student object with marks*/


//Sum of array
let arr = [10,20,30,40,50,60];
let sum = 0;
for(let i = 0;i<arr.length;i++){
    sum = sum + arr[i];
}
console.log(sum);
//
let arr = [10,20,30,5,89,60];
let max=arr[0];
function maximum( arr)
    for(let i = 0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
       
    }
     return max;
}
console.log(maximum( arr));
//
let arr = [10,20,30,5,89,60];
for(let i = arr.length-1;i>=0;i++){
    console.log(arr[i])
}
// 2nd approach
let arr = [10,20,30,5,89,60];
let start = 0;
let end = arr.length - 1;
while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr);

//count vowels
let string ="environment";
let count = 0
for(let i = 0;i<string.length;i++){
    if (string[i]=='a' || string[i]=='e' || string[i]=='i' ||string[i]=='o' ||string[i]=='u' ){
        count ++;
    }
}
console.log(cout);

// even odd checker
let num = 10;
if(num%2==0){
    console.log(num +"is even");
}else{
   console.log(num +"is odd"); 
}

//student object with marks

const student={
    name:'radhika',
    roll_no:318,
    marks:9
}
console.log(student.name);
console.log(student.marks);
