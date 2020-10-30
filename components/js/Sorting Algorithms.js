/* First we have the onchange_function() function which is connected to the form's select field. This function fires up
when the select field changes its value.
- First we have the output_field variable corresponds to the input field where we will show case our sorted data.
This output_field is ofcourse dynamic as it changes with each sorting alogrithm that we choose.
- Second we have the output_label this variable corresponds to the output label of the output field mentioned above.
This label field is also dynamic as it changes consitantly with each algorithm's name. 
*/

const onchange_function = () =>{
   let output_field = document.getElementById('output_data');
    let output_label = document.getElementById('output_data_label');
    output_field.style.display = "block";
    output_label.style.display = "block";

/* In this section we are checking to see if the input field is empty or not as a form of validation. If the field is 
empty then we need to let bootstrap knows that this is an invalid field and hide the output fields that the sorted
algorithm is supposed to appear in them. then we want to clear of our algorithm selection and finally we want to show
a warning text on the screen to tell the user that they need to fill the input data field.*/

    if(document.getElementById('input_data').value == ''){
        let inpo =  document.getElementById('input_data')
        inpo.classList = 'form-control is-invalid';
        output_field.style.display = "none";
        output_label.style.display = "none";
        document.getElementById('algorithms').value = "select_algo";
        document.getElementById('conditional_input').style.display = "block";
    }

/* In this section we are checking if the input field is not empty or not. If it is not empty then we need to let
bootstrap know that it's valid also hide the wearing message */

    if(document.getElementById('input_data').value != ''){
        let inpo =  document.getElementById('input_data')
        inpo.classList = 'form-control is-valid';
        document.getElementById('conditional_input').style.display = "none";
    }

    /* In this section we are using switch to handle each case separately. each time the user will choose an algorthm,
    we will update the GUI with it. Meaning that we will preform this algorithm then output it in the output fiels */
    switch(document.getElementById('algorithms').value){
        case 'selection_sort': 
            output_field.value = selection_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Selection Sort Algorithm Sorting';           
            break;
        case 'bubble_sort':
            output_field.value = bubble_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Bubble Sort Algorithm Sorting';
            break;
        case 'recursive_bubble_sort':
            output_field.value = recursive_bubble_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Recursive bubble Sort Algorithm Sorting';
            break;
        case 'insertion_sort':
            output_field.value = insertion_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Insertion Sort Algorithm Sorting';
            break;
        case 'recursive_insertion_sort':
            output_field.value = recursive_insertion_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Recursive insertion Sort Algorithm Sorting';
            break;
        case 'merge_sort':
            output_field.value = merge_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Merge Sort Algorithm Sorting';
            break;
        case 'quick_sort':
            output_field.value = quick_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"),0,JSON.parse("[" + document.getElementById('input_data').value + "]").length - 1);
            output_label.innerHTML = 'Quick Sort Algorithm Sorting';
            break;
        case 'heap_sort':
            output_field.value = heap_sort(JSON.parse("[" + document.getElementById('input_data').value + "]"));
            output_label.innerHTML = 'Heap Sort Algorithm Sorting';
            break;
    }
}

/* This is the function responsible for handling the events after clicking on the get the code button. This button is
dedicated to show the code of each algorithm the user chooses. In this function we are checking to see if the input data
field is also empty or not. If it's empty then we need to let bootstrap know it still invalid and we need to display the
wearning message.*/

const clicking_func = () =>{
    if(document.getElementById('input_data').value == ''){
        let inpo =  document.getElementById('input_data')
        inpo.classList = 'form-control is-invalid';
        document.getElementById('algorithms').value = "select_algo";
        document.getElementById('conditional_input').style.display = "block";
    }

    /* In this section we are using the switch case to output the code of each algorithm as an alert. */

    switch(document.getElementById('algorithms').value){
        case 'selection_sort': 
        alert(`const selection_sort = (arr) => {
            let array_length = arr.length;
            for(let i = 0 ; i < array_length-1 ; i++){
                let min_idx = i 
                for(let j = i+1; j < array_length ; j++){
                    if (arr[j] < arr[min_idx]) min_idx = j;
                }
                let temp = arr[min_idx]; 
                arr[min_idx] = arr[i]; 
                arr[i] = temp; 
            }
            return arr;
        }`);          
            break;
        case 'bubble_sort':
            alert(`const bubble_sort = (arr) => {
                let array_length = arr.length;
                if(array_length <= 1) return arr;
                for(let i = 0 ; i < array_length-1; i++){
                    for(let j = 0 ; j < array_length-i-1 ; j++){
                        if (arr[j] > arr[j+1]){
                            let temp = arr[j]; 
                            arr[j] = arr[j+1]; 
                            arr[j+1] = temp;
                        }
                    }
                }
                return arr;
            }`);
            break;
        case 'recursive_bubble_sort':
            alert(`const bubble_sort_implementation = (arr,n) => {

                if (n <= 1) return;
            
                for(let i = 0 ; i < n-1 ; i++){
                    if (arr[i] > arr[i+1]) 
                        { 
                            let temp = arr[i]; 
                            arr[i] = arr[i+1]; 
                            arr[i+1] = temp; 
                        }
                }
                bubble_sort_implementation(arr,n-1);
            }
            
            const recursive_bubble_sort = (arr) => {
                bubble_sort_implementation(arr, arr.length);
                return arr;
            }`);
            break;
        case 'insertion_sort':
            alert(`const insertion_sort = (inputArr) =>{
                let n = inputArr.length;
                    for (let i = 1; i < n; i++) {
                        // Choosing the first element in our unsorted subarray
                        let current = inputArr[i];
                        // The last element of our sorted subarray
                        let j = i-1; 
                        while ((j > -1) && (current < inputArr[j])) {
                            inputArr[j+1] = inputArr[j];
                            j--;
                        }
                        inputArr[j+1] = current;
                    }
                return inputArr;
            }`);
            break;
        case 'recursive_insertion_sort':
            alert(`const recursive_insertion_sort_implementation = (arr, n) => {
                if(n <= 1) return;
                recursive_insertion_sort_implementation(arr, n-1);
                let last = arr[n-1]; 
                let j = n-2; 
                while (j >= 0 && arr[j] > last) 
                { 
                    arr[j+1] = arr[j]; 
                    j--; 
                } 
                arr[j+1] = last;
            }
            
            const recursive_insertion_sort = arr => {
                recursive_insertion_sort_implementation(arr, arr.length);
                return arr
            }`);
            break;
        case 'merge_sort':
            alert(`const merge_sort = arr => {
                if(arr.length <= 1) return arr;
            
                let middle = Math.floor(arr.length / 2);
                let left = arr.slice(0, middle);
                let right = arr.slice(middle, arr.length);
                return merge_sort_implementation(merge_sort(left), merge_sort(right));
            }
            
            const merge_sort_implementation = (left, right) => {
                let arr = [];
            
                while(left.length && right.length){
                    if(left[0] < right[0])
                        arr.push(left.shift());
                    else
                        arr.push(right.shift());
                }
                return arr.concat(left.slice()).concat(right.slice());
            }`);
            break;
        case 'quick_sort':
            alert(`const swap = (items, leftIndex, rightIndex) => {
                var temp = items[leftIndex];
                items[leftIndex] = items[rightIndex];
                items[rightIndex] = temp;
            }
            const partition = (items, left, right) => {
                var pivot   = items[Math.floor((right + left) / 2)],
                    i       = left,
                    j       = right;
                while (i <= j) {
                    while (items[i] < pivot) {
                        i++;
                    }
                    while (items[j] > pivot) {
                        j--;
                    }
                    if (i <= j) {
                        swap(items, i, j);
                        i++;
                        j--;
                    }
                }
                return i;
            }
            
            const quick_sort = (items, left, right) => {
                var index;
                if (items.length > 1) {
                    index = partition(items, left, right);
                    if (left < index - 1) {
                        quick_sort(items, left, index - 1);
                    }
                    if (index < right) {
                        quick_sort(items, index, right);
                    }
                }
                return items;
            }`);
            break;
        case 'heap_sort':
            alert(`let  array_length;
            const swap = (items, leftIndex, rightIndex) => {
                var temp = items[leftIndex];
                items[leftIndex] = items[rightIndex];
                items[rightIndex] = temp;
            }
            const heap_root = (input, i) => {
                var left = 2 * i + 1;
                var right = 2 * i + 2;
                var max = i;
            
                if (left < array_length && input[left] > input[max]) {
                    max = left;
                }
            
                if (right < array_length && input[right] > input[max])     {
                    max = right;
                }
            
                if (max != i) {
                    swap(input, i, max);
                    heap_root(input, max);
                }
            }
            const heap_sort = arr => {
                
                array_length = arr.length;
            
                for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
                    heap_root(arr, i);
                  }
            
                for (i = arr.length - 1; i > 0; i--) {
                    swap(arr, 0, i);
                    array_length--;
                  
                  
                    heap_root(arr, 0);
                }
                return arr
            }`);
            break;
    }
}


/* This is the selection sort algorithm. In this function we are passing the unsorted data and outputing the sorted one.
- First we are storing the array length in the array_length variable then we are looping and checking to see if the first
loop iterator value is bigger than the second loop iterator value then we will store the index of the smallest index in the
variable called min_idx then we will swap.
*/
const selection_sort = (arr) => {
    let array_length = arr.length;
    for(let i = 0 ; i < array_length-1 ; i++){
        let min_idx = i 
        for(let j = i+1; j < array_length ; j++){
            if (arr[j] < arr[min_idx]) min_idx = j;
        }
        let temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    }
    return arr;
}

// bubble sort

/*In this function we are passing the unsorted data and returing the sorted one. In this algorithm we are looping
twice and checking to see if the value of this element is bigger than the value of the previous element or not. If yes then
switch the elements. */

const bubble_sort = (arr) => {
    let array_length = arr.length;
    if(array_length <= 1) return arr;
    for(let i = 0 ; i < array_length-1; i++){
        for(let j = 0 ; j < array_length-i-1 ; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// recursive bubble sort

/* In this function we are implementing the same concept as before but this function is iterative. Meaning that we
use the same function as a callback function and the fact that iterative function are faster and more effecient in the 
memory management and allocation. */

const bubble_sort_implementation = (arr,n) => {

    if (n <= 1) return;

    for(let i = 0 ; i < n-1 ; i++){
        if (arr[i] > arr[i+1]) 
            { 
                let temp = arr[i]; 
                arr[i] = arr[i+1]; 
                arr[i+1] = temp; 
            }
    }
    bubble_sort_implementation(arr,n-1);
}

const recursive_bubble_sort = (arr) => {
    bubble_sort_implementation(arr, arr.length);
    return arr;
}

// insertion sort

/* In the insertion sort algorithm we are choosing the first element in the unsorted data as current and the  element before
as j then we are looping with the condition is that as long as the previous element is smaller than -1 and the first element
is smaller than the value of the last element then we want to store the value of the last element in the element after.
Once we end the loop then we will store the value of the current in the following value. */

const insertion_sort = (inputArr) =>{
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

// recursive insertion sort

/* This is the same concept of the previous insertion sort. The main difference is that this function is recursive 
so it will be better at the time complexity and memory allocation. */

const recursive_insertion_sort_implementation = (arr, n) => {
    if(n <= 1) return;
    recursive_insertion_sort_implementation(arr, n-1);
    let last = arr[n-1]; 
    let j = n-2; 
    while (j >= 0 && arr[j] > last) 
    { 
        arr[j+1] = arr[j]; 
        j--; 
    } 
    arr[j+1] = last;
}

const recursive_insertion_sort = arr => {
    recursive_insertion_sort_implementation(arr, arr.length);
    return arr
}

// merge sort

/* Let's break the merge sort down into sub-functions so we will be able to fully grasp the concept.
- First er passed the data and checked whether the data length is appropriate for sorting or not. 
- Second we are initializing the middle and we are using floor so we get the int value not the float one the we 
are initializing the left and the right of the data. 
- Finally we need to call the second function. */


const merge_sort = arr => {
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge_sort_implementation(merge_sort(left), merge_sort(right));
}

/*In this section we are looping with the condition is that the left side and the right side are still true menaing that
there are still elements left to sort. then we are checking to see if the element on the right is larger than the 
element on the left then we are adding its value to the array. If not which means that the element on the right has the
largest value then we need to add its value to the array. finally we are concatinating or pasting the two arrays together. */

const merge_sort_implementation = (left, right) => {
    let arr = [];

    while(left.length && right.length){
        if(left[0] < right[0])
            arr.push(left.shift());
        else
            arr.push(right.shift());
    }
    return arr.concat(left.slice()).concat(right.slice());
}


// quick sort 

/* This function is for swaping the values. First we take the two values that we want to swap then we create 
another variable then we add the value of one variable into this new variable and add the value of the second 
variable into the first variable then we add the value of the new variable into the second variable. then what we
have? we have the value of the first variable into the second variable and we have the value of the second
variable into the first variable and that's how we swap. */


const swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

/* This function is responsible for partitioning the data. we are still using the left, middle and right to separate the
data. we are creating a pivot that we will use to check on the left and right values. */
const partition = (items, left, right) => {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

/* In this function we are passing the data and the left and right indexs of the data so we can be able to use them in
the previous function as the left and right sections. */
const quick_sort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quick_sort(items, left, index - 1);
        }
        if (index < right) {
            quick_sort(items, index, right);
        }
    }
    return items;
}


//heap sort

/* First we start with initializing a global variable that we would use globly in the code so that's why we can 
initinalize it privately.*/
let  array_length;

/* In this function we are passing the data and the maximum. the function we create a left, right and maximum then we 
will start with the operations.
- First check to see of the array length is bigger than the ledt and the left value is bigger than the maximum then we 
need to store the left into the maximum
- Second we need to do the above in the right so we need to check if the fight is less than the array length or not and
also check to see if the right value is bigger than the maximum input value or not. */

const heap_root = (input, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

/* In this function we will pass the unsorted data and recieve the sorted data. first we initialize the array length
then we store the half of the array in the iterative variable i that we will iterate over the data with it. then we 
will create another loop to swap and sort the data using the previous function. */

const heap_sort = arr => {
    
    array_length = arr.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(arr, i);
      }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        array_length--;
      
      
        heap_root(arr, 0);
    }
    return arr
}


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })