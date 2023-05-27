export const questions = [
  {
    id: 1,
    question: "What is the output of the following Java code?",
    code: `public class <span class="class">HelloWorld</span> {
  
  public static void <span class="function">main</span>(<span class="class">String</span><span class="blue">[]</span> <span class="magenta">args</span>) {
    int <span class="magenta">x</span> <span class="operator">=</span> <span class="magenta">5</span><span class="white">;</span>
    int <span class="magenta">y</span> <span class="operator">=</span> <span class="magenta">2</span><span class="white">;</span>
    
    <span class="red">System</span><span class="white">.</span><span class="magenta">out</span><span class="white">.</span><span class="function">println</span>(<span class="magenta">x</span> + <span class="magenta">y</span>);
  }
}`,
    options: ["7", "10", "52", "25"],
    answer: "7",
  },
  {
    id: 2,
    question: 'What is the correct way to declare a variable of type "int" in Java?',
    code: `int <span class="magenta">x</span><span class="white">;</span>`,
    options: ["int x;", "x = 5;", "int x = 5;", "var x = 5;"],
    answer: "int x = 5;",
  },
  {
    id: 3,
    question: "Which keyword is used to define a class in Java?",
    code: "",
    options: ["class", "java", "public", "void"],
    answer: "class",
  },
  {
    id: 4,
    question: 'What is the output of the following Java code?\n\npublic class HelloWorld {\n  public static void main(String[] args) {\n    String message = "Hello, World!";\n    System.out.println(message);\n  }\n}',
    code: '<span class="red">String</span> <span class="magenta">message</span> <span class="operator">=</span> <span class="orange">"Hello, World!"</span><span class="white">;</span>\n<span class="red">System</span><span class="white">.</span><span class="magenta">out</span><span class="white">.</span><span class="function">println</span>(<span class="magenta">message</span>)<span class="white">;</span>',
    options: ["Hello, World!", "message", "Hello", "World"],
    answer: "Hello, World!",
  },
  {
    id: 5,
    question: "Which operator is used to compare two values for equality in Java?",
    code: "",
    options: ["==", "=", "!=", "==="],
    answer: "==",
  },
  {
    id: 6,
    question: "What is the correct way to initialize an array in Java?",
    code: "",
    options: ["int[] numbers = {1, 2, 3};", "int numbers[] = {1, 2, 3};", "int numbers[] = new int[3];", "int[] numbers = new int[3];"],
    answer: "int[] numbers = {1, 2, 3};",
  },
  {
    id: 7,
    question: "Which keyword is used to indicate that a method does not return a value in Java?",
    code: "",
    options: ["void", "return", "null", "none"],
    answer: "void",
  },
  {
    id: 8,
    question: "What is the correct syntax to create an object of a class in Java?",
    code: "",
    options: ["ClassName object = new ClassName();", "object = new ClassName();", "ClassName = new object();", "object = ClassName();"],
    answer: "ClassName object = new ClassName();",
  },
  {
    id: 9,
    question: "What is the output of the following Java code?\n\npublic class HelloWorld {\n  public static void main(String[] args) {\n    int x = 5;\n    x += 3;\n    System.out.println(x);\n  }\n}",
    code: "",
    options: ["5", "8", "3", "53"],
    answer: "8",
  },
  {
    id: 10,
    question: "Which data type is used to represent a single character in Java?",
    code: "",
    options: ["char", "String", "int", "boolean"],
    answer: "char",
  },
  {
    id: 11,
    question: "What is the correct way to write a comment in Java?",
    code: "",
    options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
    answer: "// This is a comment",
  },
  {
    id: 12,
    question: "What is the output of the following Java code?\n\npublic class HelloWorld {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = x++;\n    System.out.println(y);\n  }\n}",
    code: "",
    options: ["10", "11", "9", "0"],
    answer: "10",
  },
  {
    id: 13,
    question: "Which keyword is used to exit a loop in Java?",
    code: "",
    options: ["break", "continue", "return", "exit"],
    answer: "break",
  },
  {
    id: 14,
    question: "What is the correct way to check if two strings are equal in Java?",
    code: "",
    options: ["str1 == str2", "str1.equals(str2)", "str1 = str2", "str1.compare(str2)"],
    answer: "str1.equals(str2)",
  },
  {
    id: 15,
    question: "Which operator is used to perform logical AND in Java?",
    code: "",
    options: ["&&", "||", "!", "&"],
    answer: "&&",
  },
  {
    id: 16,
    question: "What is the correct way to handle exceptions in Java?",
    code: "",
    options: ["try-catch", "if-else", "switch-case", "for-loop"],
    answer: "try-catch",
  },
  {
    id: 17,
    question: "What is the output of the following Java code?\n\npublic class HelloWorld {\n  public static void main(String[] args) {\n    boolean result = (5 > 3) ? true : false;\n    System.out.println(result);\n  }\n}",
    code: "",
    options: ["true", "false", "5 > 3", "result"],
    answer: "true",
  },
  {
    id: 18,
    question: "Which keyword is used to inherit a class in Java?",
    code: "",
    options: ["extends", "implements", "inherits", "super"],
    answer: "extends",
  },
  {
    id: 19,
    question: "What is the correct way to write a for loop in Java?",
    code: "",
    options: ["for (int i = 0; i < 10; i++)", "for (int i = 10; i > 0; i--)", "for (int i = 0; i <= 10; i++)", "for (int i = 0; i < 10; i--)"],
    answer: "for (int i = 0; i < 10; i++)",
  },
  {
    id: 20,
    question: "What is the output of the following Java code?\n\npublic class HelloWorld {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = 20;\n    int z = (x > y) ? x : y;\n    System.out.println(z);\n  }\n}",
    code: "",
    options: ["10", "20", "30", "0"],
    answer: "20",
  },
];
