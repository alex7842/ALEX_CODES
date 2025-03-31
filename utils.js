const blogData = [
	
    {
        title: 'Unique Digits Check Using Bits Manipulation',
        content: 'To determine if a number has all unique digits using XOR and bit manipulation in Java, we can leverage the properties of bits to track the occurrence of each digit.',
        codeSnippets: [
            {
                language: 'java',
                title: '',
                code: `public class UniqueDigitsChecker {

    // Method to check if all digits in the number are unique using XOR and bit manipulation
    public static boolean hasUniqueDigits(int number) {
        int bitmask = 0; // Initialize bitmask to 0

        while (number > 0) {
            int digit = number % 10; // Extract the last digit
            int bitPosition = 1 << digit; // Create a bitmask for the current digit

            if ((bitmask & bitPosition) != 0) {
                // If the bit is already set, the digit is not unique
                return false;
            }

            bitmask |= bitPosition; // Set the bit for the current digit
            number /= 10; // Remove the last digit
        }

        return true; // All digits are unique
    }

    public static void main(String[] args) {
        int number = 12345; // Example number
        if (hasUniqueDigits(number)) {
            System.out.println("The number has all unique digits.");
        } else {
            System.out.println("The number has duplicate digits.");
        }
    }
}`
            }
        ]
    },
    {
        title: 'LCS OF TWO STRING USING DP',
        content: 'Here are some common array methods in JavaScript and how to use them.',
        codeSnippets: [
            {
                language: 'java',
                title: 'LCS OF TWO STRINGS',
                code: `// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
       String s1="ABCBDAB",s2="BDCAB";
       int m=s1.length(),n=s2.length();
       int[][] dp=new int[m+1][n+1];
       for(int i=1;i<=m;i++){
           for(int j=1;j<=n;j++){
               if(s1.charAt(i-1)==s2.charAt(j-1)){
                   dp[i][j]=dp[i-1][j-1]+1;
               }
               else{
                   dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
               }
           }
       }
        for(int i=0;i<m;i++){
           for(int j=0;j<n;j++){
               System.out.print(dp[i][j]+" ");
           }
             System.out.println();
          }
          
          int i=m,j=n;
          StringBuilder res=new StringBuilder();
          while(i>0 && j>0){
              if(s1.charAt(i-1)==s2.charAt(j-1)){
                  res.append(s1.charAt(i-1));
                  i--;
                  j--;
              }
              else if(dp[i-1][j]>dp[i][j-1]){
                  i--;
              }
              else j--;
          }
          System.out.println(res.reverse());
       
    }
}`
            },
            
            

        ]
    },
    {
        title: 'Binary tree creation and print level order',
        content: 'Binary tree',
        codeSnippets: [
            {
                language: 'java',
                title: 'Binary Tree',
                code: `// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class Node{
    int data;
    Node left,right;
    Node(int data){
        this.data=data;
        right=left=null;
    }
}
class Main {
    static void inorder(Node p){
        if(p!=null){
        inorder(p.left);
        System.out.println(p.data);
        inorder(p.right);
        }
    }
    static void levelorder(Node root,int level){
        if(root==null) return;
        if(level==1) System.out.print(root.data+" ");
        else if(level>1){
            levelorder(root.left,level-1);
            levelorder(root.right,level-1);
        }
       
    }
    static int height(Node root){
        if(root==null) return 0;
        int lh=height(root.left);
        int lr=height(root.right);
        return Math.max(lr,lh)+1;
    }
    static Node create(int[] ar,int index){
        if(index>=ar.length){
            return null;
        }
        Node root=new Node(ar[index]);
        root.left=create(ar,2*index+1);
        root.right=create(ar,2*index+2);
        return root;
    }
    public static void main(String[] args) {
        int[] ar={1,2,3,4,5,6};
        Node root=create(ar,0);
        int h=height(root);
        for(int i=1;i<=h;i++)
        levelorder(root,i);
    }
}`
            },
        

        ]
    },
    {
        title: 'Binary Search Tree Creation and display',
        content: 'The given code represents a Binary Search Tree (BST). However, because elements are inserted in strictly increasing order (1, 2, 3, 4, 5)',
        codeSnippets: [
            {
                language: 'java',
                title: 'BST',
                code: `// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class Node{
    Node left,right;
    int data;
    Node(int data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    
}
public class Main {
    static Node root;
    void insert(int data){
        root=insertrec(root,data);
    }
    void displayinorder(Node p){
        if(p!=null){
            displayinorder(p.left);
            System.out.print(p.data+" ");
           displayinorder(p.right);
        }
        
    }
    void displaypreorder(Node p){
        if(p!=null){
            System.out.print(p.data+" ");
            displaypreorder(p.left);
           displaypreorder(p.right);
        }
        
        
    }
    int height(Node p){
        if(p==null){
            return 0;
            
        }
        int lheight=height(p.left);
        int rheight=height(p.right);
        return Math.max(lheight,rheight)+1;
    }
    void displaypostorder(Node p){
        if(p!=null){
          
           displaypostorder(p.left);
           displaypostorder(p.right);
              System.out.print(p.data+" ");
        }
        
    }
    void printlevel(Node p,int level){
        if(p==null) return;
        if(level==1){
            System.out.println(p.data+" ");
        }
        else if(level>1){
            printlevel(p.left,level-1);
            printlevel(p.right,level-1);
        }
        
    }
    Node insertrec(Node root,int data){
      if(root==null){
          root=new Node(data);
          return root;
      }
      else if(data < root.data){
          root.left=insertrec(root.left,data);
      }
      else if(data > root.data){
          root.right=insertrec(root.right,data);
      }
      return root;
      
    }
    public static void main(String[] args) {
        Main m=new Main();
        
       m.insert(1);
       m.insert(2);
       m.insert(3);
       m.insert(4);
       m.insert(5);
     //  m.displayinorder(root);
      int height= m.height(root);
       System.out.println(height);
      for(int i=1;i<=height;i++){
          
      m.printlevel(root,i);
      }
     
    //   m.displaypreorder(root);
    //   System.out.println();
    //   m.displaypostorder(root);
    }
}`
            },
            
            

        ]
    },
    {
        title: 'Subarray with equal vowels and consonants',
        content: 'SUBARRAY ',
        codeSnippets: [
            {
                language: 'java',
                title: 'Subarray with equal vowels and consonants',
                code: `a="heehfghaeo"
val,m=0,0
c="aeiou"
d={}
for i in range(len(a)):
    if a[i] in c:
        val+=1
    else:
        val-=1
    if val in d:
       print(a[d[val]+1:i+1])
        # if i-d[val]>m:
        #     m=i-d[val]
    else:
        d[val]=i
   
print(m)
        
    
#subarray with equal vowels and consonants`
            },
            
            

        ]
    },
    {
        title: 'SIMPLE BFS ',
        content: 'BFS USING QUEUE',
        codeSnippets: [
            {
                language: 'java',
                title: 'BFS',
                code: `class Solution {
    public int minimumTime(int[][] grid) {
    int m=grid.length;
    int n=grid[0].length;
    int[][]direction={{1,0},{-1,0},{0,1},{0,-1}};//top bottom right left
    boolean[][] visited=new boolean[m][n];
    Queue<int[]> q=new LinkedList<>();
    q.add(new int[]{0,0,0});
    visited[0][0]=true; 
    while(!q.isEmpty()){
        int[] cell=q.poll();
        int x=cell[0];
        int y=cell[1];
        int time=cell[2];
          if(x==m-1 && y==n-1){
                return time;
            }
        for(int[] dir :direction){
            int nx=x+dir[0];
            int ny=y+dir[1];
    
            if(nx>=0 && nx<m && ny>=0 && ny<n && !visited[nx][ny] ){
             if (time + 1 >= grid[nx][ny]) {
                visited[nx][ny]=true;
                q.add(new int[]{nx,ny,time+1});
             }
            }
        }
    }
    return -1;
    }
}`
            },
            
            

        ]
    },

    {
        title: 'GRAPH TRAVERSAL BFS',
        content: 'GRAPH TRAVERSAL',
        codeSnippets: [
            {
                language: 'JAVA',
                title: 'GRAPH',
                code: `import java.util.*;
class Graph_creation_and_BFS{
    static List<List<Integer>> list=new ArrayList<>();
    static void graph(int x,int y){
        list.get(x).add(y);
        list.get(y).add(x);
    }
    static void bfs(int s){
        boolean []visited=new boolean[list.size()];
        Queue<Integer> node=new LinkedList<>();
        for(int i=0;i<list.size();i++) visited[i]=false;
        node.add(s);
        visited[s]=true;
        while(!node.isEmpty()){
            int p=node.poll();
	        System.out.print(p+" ");
	        for(int v:list.get(p)){
	            if(!visited[v]){
	                visited[v]=true;
	                node.add(v);
	            }
	        }
        }
    }
    public static void main(String[] args) {
         Scanner in=new Scanner(System.in);
         int n=in.nextInt();
         for(int i=0;i<n;i++) list.add(new ArrayList<Integer>());
         for(int i=0;i<n;i++) graph(in.nextInt(),in.nextInt());
         bfs(0);
    }
}`
            },
            
            

        ]
    },
        
    {
        title: 'BlockChain Linked List',
        content: 'BlockChain replication',
        codeSnippets: [
            {
                language: 'JAVA',
                title: 'Linked List',
                code: `
import java.util.*;


class Helper{
    int generateHash(){
        return (int)(Math.random()*1000);
    }
    int generateNonce(){
        return (int)(Math.random()*100);
    }
}

class Node extends Helper{
    int data;
    Node next;
    int nonce=generateNonce();
    int hash=generateHash();
    int prevhash=0;
    Node(int data,int a){
    this.nonce=nonce;
    this.hash=hash;
    this.prevhash=a;
    this.data=data;
    this.next=null;
    }
    Node (int data){
         this.data=data;
         this.hash=hash;
         this.prevhash=-1;
    this.next=null;
    }
}

class Main {
    static Node head=null,tail=null;
    static int prevhash=0;
    static void add(int a){
        if(head==null){
        Node temp=new Node(a);
           head=temp;
           tail=temp;
           prevhash=temp.hash;
        }
        else{
            Node temp=new Node(a,prevhash);
            tail.next=temp;
            tail=temp;
            prevhash=temp.hash;
            
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter numbers to added in block");
        // for(int i=0;i<5;i++){
        //     int n=sc.nextInt();
            add(1);
            add(2);
            add(3);
            add(4);
            add(5);
        //     System.out.println("added");
        // }
        
        Node t=head;
     while(t != null){
    System.out.println("+------------------+");
    System.out.printf("| Data:  %-6d      |%n", t.data);
    System.out.printf("| Hash:  %-6d      |%n", t.hash);
    System.out.printf("| Nonce: %-6d      |%n", t.nonce);
    System.out.printf("| PrevHash: %-6d      |%n", t.prevhash);
    System.out.println("+------------------+\n");
    
    t = t.next;
}



        
        
    }
}`
            },
            
            

        ]
    },
        
    {
        title: 'Maximum Product SubArray',
        content: 'iven an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].',
        codeSnippets: [
            {
                language: 'Java',
                title: 'Maximum Product SubArray',
                code: ` 
    int maxProduct(int[] arr) {
        int max=Integer.MIN_VALUE;
        int n=arr.length; 
        int left=1,right=1;
        for(int i=0;i<n;i++){
            if(left==0) left=1;
            if(right==0) right=1;
            left*=arr[i];
            right*=arr[n-i-1];
            max=Math.max(left,Math.max(right,max));
        }
        return max;
    }`
            },
            
            

        ]
    },
	 {
        title: 'Maximum Circular SubArray Sum ',
        content: `Steps:
Find maxNormal using normal Kadane’s Algorithm.

Compute totalSum of the array.

Find minSubarraySum by applying Kadane’s on the negative of the array.

Compute circularMaxSum = totalSum - minSubarraySum.

Return the maximum of (maxNormal, circularMaxSum).`,
        codeSnippets: [
            {
                language: 'Java',
                title: 'Circular SubArray',
                code: `
class Solution {

    static int kadane(int[] arr){
        int curSum=0,max=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            curSum+=arr[i];
            max=Math.max(max,curSum);
            if(curSum<0) curSum=0;
            
        }
        return max;
    }
    public int circularSubarraySum(int arr[]) {
        int n=arr.length,total=0;
        int normalSum=kadane(arr);
        if(normalSum<0) return normalSum;
        for(int i=0;i<n;i++){
            total+=arr[i];
            arr[i]=-arr[i];
        }
        int minSum=kadane(arr);
        int totalSum=minSum+total;
        return Math.max(normalSum,totalSum);
        
       
        
    }
}`
            },
            
            

        ]
    },
	 {
        title: '',
        content: '',
        codeSnippets: [
            {
                language: '',
                title: '',
                code: ``
            },
            
            

        ]
    },

    
];

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

function createCodeBlock(codeSnippet) {
    const title = codeSnippet.title ? `<h3 class="code-title">${codeSnippet.title}</h3>` : '';
    const escapedCode = codeSnippet.code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    return `
        <div class="code-block ${codeSnippet.language}">
            ${title}
            <div class="code-header">
                <span class="language-badge">${codeSnippet.language}</span>
                <button class="copy-button" onclick="copyCode(this)">Copy</button>
            </div>
            <pre class="line-numbers"><code class="language-${codeSnippet.language}">${escapedCode}</code></pre>
        </div>
    `;
}

function renderBlogEntry(entry) {
    const codeBlocks = entry.codeSnippets.map(snippet => createCodeBlock(snippet)).join('');

    return `
        <article class="blog-entry">
            <h2>${entry.title}</h2>
            <p>${entry.content}</p>
            ${codeBlocks}
        </article>
    `;
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('pre code');
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 1500);
}
