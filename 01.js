// 有4个数字1，2，3，4可以组成多少个互不相同的三位数。
var str="";
for(var i=1;i<=4;i++){
    for(var j=1;j<=4;j++){
        for(var k=1;k<=4;k++){
            if(!(i==j==k)){
                var a=i.toString(),b=j.toString(),c=k.toString();
                str=a+b+c;
                console.log(str);
            }
        }
    }
}