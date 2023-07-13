let nums = [1,2,3,4,5,6]

let nums2 = [1,2,3]

function verificarEelementosArray(arr) {
    if(arr.length >= 5){
        console.log("Muitos elementos")
    } else {
        console.log("Poucos elementos")
    }
}

verificarEelementosArray(nums)
verificarEelementosArray(nums2)