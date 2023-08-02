var sentence = "the quick brown fox jumped over the lazy dog";
 var words = sentence.split(" ");
 console.log(words)
 for (var i = 0; i < words.length; ++i) {
 console.log("word " + i + ": " + words[i]);
 };

 var nums = [1,2,3,100,200,300,400,4,5];
 nums.splice(3,1);
 console.log(nums);

 function square(num) {
    console.log(num, num * num);
   }
   var nums = [1,2,3,4,5,6,7,8,9,10];
   nums.forEach(square);

   nums1 = [1,2,3,0,0,0]
   nums2 = [1];
   var m =3

   