// task 1
document.write("<h2>Task 1</h2>")
var arr = [
    [],
    [],
    []
]

document.write(arr)


// task 2

document.write("<h2>Task 2</h2>")

document.write("multidimensional array<br><br>")

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 0; i < arr.length; i++)
{
    document.write(arr[i]);
    document.write("<br>")
}


// task 3

document.write("<h2>Task 3</h2>")

document.write("numeric counting from 1 to 10<br><br>")

for (let i = 1; i <= 10; i++) 
{
    document.write(i);
    document.write("<br>")
}


// task 4

document.write("<h2>Task 4</h2>")

document.write("multiplication table<br><br>")

var tableNo = +prompt("enter a number to show its multiplication table: ");

var tableLenght = +prompt("enter multiplication table lenght: ");

// var tableNo = 8;

// var tableLenght = 10;

for (let i = 1; i <= tableLenght; i++)
{
    document.write(`${tableNo} * ${i} = ${tableNo * i}`)
    document.write("<br>")
}


// task 5

document.write("<h2>Task 5</h2>")

document.write("print items of array<br><br>")

var friuts = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (let i = 0; i < friuts.length; i++) 
{
    document.write(friuts[i])
    document.write("<br>")
}

document.write("<br>")
document.write("<br>")

for (let i = 0; i < friuts.length; i++) 
{
    document.write(`Element at index ${i} is ${friuts[i]}`)
    document.write("<br>")
}


// task 6 

document.write("<h2>Task 6</h2>");

document.write("Generate the following series in your browser<br><br>");

document.write("<br>");
 
document.write("Counting: ");

document.write("<br>");

for (let i = 0; i < 16; i++) 
{
    document.write(i)
    document.write("<br>")
}

document.write("<br>");

document.write("Reverse Counting: ");

document.write("<br>");

for (let i = 10; i > 0; i--) 
{
    document.write(i)
    document.write("<br>")
}

document.write("<br>");

document.write("Even: ");

document.write("<br>");

for (let i = 0; i < 21; i++) 
{
    if (i % 2 == 0) 
    {
        document.write(i)
        document.write("<br>")
    }
}

document.write("<br>");

document.write("ODD: ");

document.write("<br>");

for (let i = 0; i < 21; i++) 
{
    if (i % 2 != 0) 
    {
        document.write(i)
        document.write("<br>")
    }
}

document.write("<br>");

document.write("Series: ");

document.write("<br>");

for (let i = 1; i < 21; i++) 
{
    if (i % 2 == 0) 
    {
        document.write(i + "k")
        document.write("<br>")
    }
}

document.write("<br>");


// task 7

document.write("<h2>Task 7</h2>")

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var userInput = prompt("Welcome to ABC Bakery, what do you want to order sir?");

// userInput = 'patties'

var count = 0;

for (let i = 0; i < A.length; i++) 
{
    if (userInput == A[i]) {
        count = i
        break
    }
}

if (count != 0)
{
    document.write(`${userInput} is available at index ${count} in our bakery`)
    
}
else 
{
    document.write(`We are sorry, ${userInput} is not avaible in our bakery`)
}


// task 8 

document.write("<h2>Task 8</h2>")

document.write("largest number in the array<br><br>")

var A = [24, 53, 78, 91, 12]

var largestNumber;

for(let i = 0 ; i < A.length ; i++) 
{
    if(A[0] < A[i])
    {
        largestNumber = A[i]
    }
}

document.write("array: ");

document.write(A);
 
document.write("<br>the largest number is :");

document.write(largestNumber);


// task 9

document.write("<h2>Task 9</h2>")

document.write("smallest number in the array<br><br>")

var A = [24, 53, 78, 91, 12]

var smallestNumber;

for(let i = 0 ; i < A.length ; i++) 
{
    if(A[0] > A[i])
    {
        smallestNumberNumber = A[i]
    }
}

document.write("array: ");

document.write(A);

document.write("<br>the smallest number is :");

document.write(smallestNumberNumber);


// task 9

document.write("<h2>Task 10</h2>")

document.write("multiples of 5 ranging 1 to 100<br><br>")

for(let i = 1 ; i < 101 ; i++) 
{
    if(i % 5 == 0)
    {
        document.write(i);
        document.write("<br>");
    }
}
