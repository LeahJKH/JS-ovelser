function calculator5(n1,n2,o){
    return"+"===o? 
    n1+n2:
    "-"===o?
    n1-n2:
    "*"===o?
    n1*n2:
    "/"===o?
    n1/n2:"Invalid operator"
}
const result5=calculator5(3,5,"+");console.log(result5);