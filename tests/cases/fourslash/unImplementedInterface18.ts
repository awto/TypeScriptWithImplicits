/// <reference path='fourslash.ts' />

//// interface I1 {
////     x:boolean;
//// }
////
//// var x: I1 ={[|
////
//// |]}

verify.codeFixAtPosition(`x : false 
`);