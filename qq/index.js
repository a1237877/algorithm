let enc_qq =[6,3,1,7,5,8,9,2,4],qq=[],
//数组是最廉价的数据结构
//第一个数移除
head=0,tail=9; 
while (head<tail)  {       //head队首指针 ，指向要移除的元素位置  tail 队尾指针  指向要加入的元素位置
qq.push(enc_qq[head]); //指针指向第一个元素
//nc_qq.shift();
head++;          // 指针加1
enc_qq[tail] = enc_qq[head];  //enc_qq.length == tail 重点
tail++;
head++;
}
//console.log(enc_qq);
console.log( typeof qq);



// 字符串是字符集合
//console.log(enc_qq.length,enc_qq[0]);
//enc_qq.shift();移除第一个元素
//console.log(enc_qq);
//enc_qq.unshift(0);在数组起始位置加入一个元素
//enc_qq.pop();移除数组最后一个元素
//enc_qq.push(0);在数组最后加入一个元素


