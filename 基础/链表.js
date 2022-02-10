var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;
  while(l1 && l2){
      if(l1.val < l2.val){
          cur.next = l1;
          l1 = l1.next;
      }else{
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next;
  }
  cur.next = l1 || l2; //短路运算
  return dummy.next;
};
mergeTwoLists([1,2,4],[1,3,4])