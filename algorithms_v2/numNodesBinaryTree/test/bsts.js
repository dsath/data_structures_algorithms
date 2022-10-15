class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
            11
          /   \
        12     13
      /   \   /   \
    14    15 16   17
*/

const node11 = new Node(11);
const node12 = new Node(12);
const node13 = new Node(13);
const node14 = new Node(14);
const node15 = new Node(15);
const node16 = new Node(16);
const node17 = new Node(17);

node11.left = node12;
node11.right = node13;
node12.left = node14;
node12.right = node15;
node13.left = node16;
node13.right = node17;

/*
            21
          /   \
        22     23
      /   \   /   
    24    25 26   
*/

const node21 = new Node(21);
const node22 = new Node(22);
const node23 = new Node(23);
const node24 = new Node(24);
const node25 = new Node(25);
const node26 = new Node(26);

node21.left = node22;
node21.right = node23;
node22.left = node24;
node22.right = node25;
node23.left = node26;

/*
            31
          /   \
        32     33
      /   \      
    34    35    
*/

const node31 = new Node(31);
const node32 = new Node(32);
const node33 = new Node(33);
const node34 = new Node(34);
const node35 = new Node(35);

node31.left = node32;
node31.right = node33;
node32.left = node34;
node32.right = node35;

const node41 = new Node(41);

/*
        41
*/

module.exports = {
  node11,
  node21,
  node31,
  node41
}
