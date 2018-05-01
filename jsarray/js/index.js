var myArr = ["red","yellow","blue","black"];

function pushData()
{
  var inputText = document.getElementById ('inputText').value;
  myArr.push(inputText);
  var pval = "";
  for (i = 0; i < myArr.length;i++)
{
  pval = pval + myArr[i] + "<br/>";
 }
  
  document.getElementById('pText').innerHTML = pval;
  
}