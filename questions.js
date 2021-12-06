var c_questions = [
    {
        numb: 1,
        question: "Which of the following is not a valid C variable name?",
        answer: "int $main",
        options: [
            "int number",
            "float rate",
            "int variable_count",
            "int $main"
            ]
    },
    {
        numb: 2,
        question: "All keywords in C are in ____________",
        answer: "LowerCase letters",
        options: [
            "LowerCase letters",
            "UpperCase letters",
            "CamelCase letters",
            "None of the mentioned"
        ]
    },
    {
        numb: 3,
        question: "Which of the following is true for variable names in C?",
        answer: "It is not an error to declare a variable to be one of the keywords(like goto, static)",
        options: [
            "They can contain alphanumeric characters as well as special characters",
            "It is not an error to declare a variable to be one of the keywords(like goto, static)",
            "Variable names cannot start with a digit",
            "Variable can be of any length"
        ]
    },
    {
        numb: 4,
        question: "Which is a valid C expression?",
        answer: "int my_num = 100000;",
        options: [
            "int my_num = 100,000;",
            "int my_num = 100000;",
            "Pint my num = 1000;",
            "int $my_num = 10000;"
        ]
    },
    {
        numb: 5,
        question: "Which of the following cannot be a variable name in C?",
        answer: "volatile",
        options: [
            "volatile",
            "true",
            "friend",
            "export"
        ]
    },
    {
        numb: 6,
        question: "What is a short int in C programming?",
        answer: "Short is the qualifier and int is the basic data type",
        options: [
            "The basic data type of C",
            "Qualifier",
            "Short is the qualifier and int is the basic data type",
            "All of the mentioned"
        ]
    },
    {
        numb: 7,
        question: "Which of the following declarations is not supported by C?",
        answer: "String str;",
        options: [
            "String str;",
            "char *str;",
            "float str = 3e2;",
            "Both String str; & float str = 3e2;"
        ]
    },
    {
        numb: 8,
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        answer: "const",
        options: [
            "immutable",
            "mutable",
            "const",
            "volatile"
        ]
    },
    {
        numb: 9,
        question: " What is the result of logical or relational expression in C?",
        answer: "0 or 1",
        options: [
            "True or False",
            "0 or 1",
            "0 if an expression is false and any positive number if an expression is true",
            "None of the mentioned"
        ]
    },
    {
        numb: 10,
        question: "Which of the following typecasting is accepted by C?",
        answer: "Widening & Narrowing conversions",
        options: [
            "Widening conversions",
            "Narrowing conversions",
            "Widening & Narrowing conversions",
            "None of the mentioned"
        ]
    }
]
var py_questions = [
    {
        numb: 1,
        question: "Who developed Python Programming Language?",
        answer: "Guido van Rossum",
        options: [
            "Wick van Rossum",
            "Rasmus Lerdorf",
            "Guido van Rossum",
            "Niene Stom"
            ]
    },
    {
        numb: 2,
        question: "Which type of Programming does Python support?",
        answer: "all of the mentioned",
        options: [
            "object-oriented programming",
            "structured programming",
            "functional programming",
            "all of the mentioned"
        ]
    },
    {
        numb: 3,
        question: "Is Python case sensitive when dealing with identifiers?",
        answer: "no",
        options: [
            "no",
            "yes",
            "machine dependent",
            "none of the mentioned"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is the correct extension of the Python file?",
        answer: ".py",
        options: [
            ".python",
            ".pl",
            ".py",
            ".p"
        ]
    },
    {
        numb: 5,
        question: "All keywords in Python are in _________",
        answer: "None of the mentioned",
        options: [
            "Capitalized",
            "lower case",
            "UPPER CASE",
            "None of the mentioned"
        ]
    },
    {
        numb: 6,
        question: "What will be the value of the following Python expression?"+
        "4 + 3 % 5",
        answer: "7",
        options: [
            "7",
            "2",
            "4",
            "1"
        ]
    },
    {
        numb: 7,
        question: "Which of the following is used to define a block of code in Python language?",
        answer: "Indentation",
        options: [
            "Indentation",
            "Key",
            "Brackets",
            "All of the mentioned"
        ]
    },
    {
        numb: 8,
        question: "Which keyword is used for function in Python language?",
        answer: "Def",
        options: [
            "Function",
            "Def",
            "Fun",
            "Define"
        ]
    },
    {
        numb: 9,
        question: "Which of the following character is used to give single-line comments in Python?",
        answer: "!",
        options: [
            "//",
            "#",
            "!",
            "/*"
        ]
    },
    {
        numb: 10,
        question: "What will be the output of the following Python code?"+
        "i = 1"+
        "while True:"+
        "    if i%3 == 0:"+
        "        break"+
        "    print(i)"+ 
        "    i + = 1",
        answer: "error",
        options: [
            "1 2 3",
            "error",
            "1 2",
            "none of the mentioned"
        ]
    }
]
var ds_questions = [
    {
      numb: 1,
      question: "Process of inserting an element in stack is called ____________",
      answer: "Push",
      options: [
        "Creat",
        "Push",
        "Evaluation",
        "Pop"]
    },
    {
      numb: 2,
      question: "Process of removing an element from stack is called __________",
      answer: "Pop",
      options: [
          "Creat",
          "Push",
          "Evaluation",
          "Pop"]
    },
    {
      numb: 3,
      question: "In a stack, if a user tries to remove an element from an empty stack it is called _________",
      answer: "Underflow",
      options: [
          "Underflow",
          "Empty collection",
          "Overflow",
          "Garbage Collection"]
    },
    {
      numb: 4,
      question: "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
      answer: "Overflow",
      options: [
          "Overflow",
          "Crash",
          "Underflow",
          "User flow"]
    },
    {
      numb: 5,
      question: "Entries in a stack are “ordered”. What is the meaning of this statement?",
      answer: "There is a Sequential entry that is one by one",
      options: [
          "A collection of stacks is sortable",
          "Stack entries may be compared with the ‘<‘ operation",
          "The entries are stored in a linked list",
          "There is a Sequential entry that is one by one"]
    },
    {
      numb: 6,
      question: "Which of the following is not the application of stack?",
      answer: "Data Transfer between two asynchronous process",
      options: [
          "A parentheses balancing program",
          "Tracking of local variables at run time",
          "Compiler Syntax Analyzer",
          "Data Transfer between two asynchronous process"]
    },
    {
      numb: 7,
      question: "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(()))?",
      answer: "3",
      options: [
          "1",
          "2",
          "3",
          "4 or more"]
    },
    {
      numb: 8,
      question: "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. Suppose that you run the algorithm on a sequence that contains 2 left parentheses and 3 right parentheses (in some order). The maximum number of parentheses that appear on the stack AT ANY ONE TIME during the computation?",
      answer: "2",
      options: [
          "1",
          "2",
          "3",
          "4 or more"]
    },
    {
      numb: 9,
      question: "What is the value of the postfix expression 6 3 2 4 + – *?",
      answer: "-18",
      options: [
          "1",
          "40",
          "74",
          "-18"]
    },
    {
      numb: 10,
      question: "Here is an infix expression: 4 + 3*(6*3-12). Suppose that we are using the usual stack algorithm to convert the expression from infix to postfix notation. The maximum number of symbols that will appear on the stack AT ONE TIME during the conversion of this expression?",
      answer: "4",
      options: [
          "1",
          "2",
          "3",
          "4"]
    },
]
var dbms_questions = [
    {
        numb: 1,
        question: "What is a database?",
        answer: "Organized collection of data or information that can be accessed, updated, and managed",
        options: [
            "Organized collection of information that cannot be accessed, updated, and managed",
            "Collection of data or information without organizing",
            "Organized collection of data or information that can be accessed, updated, and managed",
            "Organized collection of data that cannot be updated"
        ]
    },
    {
        numb: 2,
        question: "What is DBMS?",
        answer: "DBMS stores, modifies and retrieves data",
        options: [
            "DBMS is a collection of queries",
            "DBMS is a high-level language",
            "DBMS is a programming language",
            "DBMS stores, modifies and retrieves data"
        ]
    },
    {
        numb: 3,
        question: "Which type of data can be stored in the database?",
        answer: "All of the above",
        options: [
            "Image oriented data",
            "Text, files containing data",
            "Data in the form of audio or video",
            "All of the above"
        ]
    },
    {
        numb: 4,
        question: " In which of the following formats data is stored in the database management system?",
        answer: "Table",
        options: [
            "Table",
            "Graph",
            "Text",
            "Image"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is not a type of database?",
        answer: "Decentralized",
        options: [
            "Distributed",
            "Decentralized",
            "Hierarchical",
            "Decentralized"
        ]
    },
    {
        numb: 6,
        question: "Which of the following is not an example of DBMS?",
        answer: "",
        options: [
            "Google",
            "IBM DB2",
            "Microsoft Acess",
            "MySQL"
        ]
    },
    {
        numb: 7,
        question: "Which of the following is a feature of DBMS?",
        answer: "Single-user Access only",
        options: [
            "High Level of Security",
            "Minimum Duplication and Redundancy of Data",
            "Single-user Access only",
            "Support ACID Property"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is a feature of the database?",
        answer: "User-interface provided",
        options: [
            "Lack of Authentication",
            "No-backup for the data stored",
            "Store data in multiple locations",
            "User-interface provided"
        ]
    },
    {
        numb: 9,
        question: "Which of the following is not a function of the database?",
        answer: "Analysing code",
        options: [
            "Manipulating data",
            "Managing stored data",
            "Security for stored data",
            "Analysing code"
        ]
    },
    {
        numb: 10,
        question: "Which of the following is known as a set of entities of the same type that share same properties, or attributes?",
        answer: "Entity set",
        options: [
            "Entity set",
            "Entity Relation model",
            "Relation set",
            "Tuples"
        ]
    }
]
var html_questions = [
    {
        numb: 1,
        question: "All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags.",
        answer: "tag name",
        options: [
            "attribute name",
            "tag name",
            "class name",
            "none of the mentioned"
        ]
    },
    {
        numb: 2,
        question: "The __________ element represents a span of text that is isolated from its surroundings for the purposes of bidirectional text formatting.",
        answer: "bdi",
        options: [
            "b",
            "bdi",
            "bdo",
            "base"
        ]
    },
    {
        numb: 3,
        question: "The interactive element audio with the attribute controls must not appear as a descendant of which element?",
        answer: "both a and button",
        options: [
            "a",
            "button",
            "audio",
            "both a and button"
        ]
    },
    {
        numb: 4,
        question: " A ____________ element must have a start tag but must not have an end tag.",
        answer: "command",
        options: [
            "details",
            "command",
            "code",
            "both details and command"
        ]
    },
    {
        numb: 5,
        question: "Which type attribute of input element sets the element’s value to a string representing a number?",
        answer: "range",
        options: [
            "range",
            "email",
            "file",
            "date"
        ]
    },
    {
        numb: 6,
        question: "Which of the following type attributes of input element defines control for entering a telephone number?",
        answer: "tel",
        options: [
            "mob",
            "tel",
            "mobile",
            "telephone"
        ]
    },
    {
        numb: 7,
        question: "Which element represents a control for generating a public-private key pair?",
        answer: "keygen",
        options: [
            "ins",
            "keygen",
            "key",
            "command"
        ]
    },
    {
        numb: 8,
        question: "Which element represents marked or highlighted text for reference purposes?",
        answer: "mark",
        options: [
            "highlight",
            "mark",
            "strong",
            "blink"
        ]
    },
    {
        numb: 9,
        question: "Which element(s) represents a section of a document that links to other documents?",
        answer: "nav",
        options: [
            "navigation",
            "anchor tag",
            "nav",
            "option"
        ]
    },
    {
        numb: 10,
        question: "Which of the following element marks the ruby text component of a ruby annotation?",
        answer: "rt",
        options: [
            "ruby",
            "rubytxt",
            "r",
            "rt"
        ]
    }
]
var js_questions = [
    {
        numb: 1,
        question: "Which of the following statements defines JavaScript correctly?",
        answer: "It’s a scripting language used to make the website interactive",
        options: [
            "It’s a scripting language used to make the website interactive",
            "It’s an assembly language used to make the website interactive",
            "It’s compiled language used to make the website interactive",
            "None of the above"
        ]
    },
    {
        numb: 2,
        question: "JavaScript is a ____________ language.",
        answer: "Object-Based",
        options: [
            "Assembly-language",
            "Object-Based",
            "problem-Oriented",
            "High-level"
        ]
    },
    {
        numb: 3,
        question: "Among the given statements, which statement defines closures in JavaScript?",
        answer: "It’s a function that is enclosed with references to its lexical environment",
        options: [
            "It’s a function that is enclosed with references to its inner function scope",
            "It’s a function that is enclosed with the object to its inner function scope",
            "None of the above",
            "It’s a function that is enclosed with references to its lexical environment"
        ]
    },
    {
        numb: 4,
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answer: "It is an ordered list of values",
        options: [
            "It is an ordered list of objects",
            "It is an ordered list of string",
            "It is an ordered list of values",
            "It is an ordered list of functions"
        ]
    },
    {
        numb: 5,
        question: "Will the following JavaScript code work?",
        answer: "Yes, perfectly",
        options: [
            "Exception will be thrown",
            "Memory leak",
            "Yes, perfectly",
            "Error"
        ]
    },
    {
        numb: 6,
        question: "Which of the following is not javascript data types?",
        answer: "All of the mentioned",
        options: [
            "Null type",
            "Number type",
            "Undefined type",
            "All of the mentioned"
        ]
    },
    {
        numb: 7,
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        answer: "A URL that uses the special javascript:protocol",
        options: [
            "A URL that uses the special javascript:protocol",
            "A URL that uses the special javascript:code",
            "A URL that uses the special javascript:encoding",
            "A URL that uses the special javascript:stack"
        ]
    },
    {
        numb: 8,
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answer: "Position",
        options: [
            "Window",
            "Position",
            "Standard",
            "Location"
        ]
    },
    {
        numb: 9,
        question: "What does JavaScript do when there is an indefinite or an infinite value during an arithmetic computation?",
        answer: "Displays “Infinity”",
        options: [
            "Prints an overflow error",
            "Prints an exception error",
            "Prints the value as such",
            "Displays “Infinity”"
        ]
    },
    {
        numb: 10,
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answer: "Function/Method",
        options: [
            "Preprocessor",
            "Function/Method",
            "Triggering Event",
            "RMI"
        ]
    }
]
var os_questions = [
    {
        numb: 1,
        question: "What is an operating system?",
        answer: "all of the mentioned",
        options: [
          "interface between the hardware and application programs",
          "collection of programs that manages hardware resources",
          "system service provider to the application programs",
          "all of the mentioned"
        ]
      },
      {
        numb: 2,
        question: "What is the main function of the command interpreter?",
        answer: "to get and execute the next user-specified command",
        options: [
            "to provide the interface between the API and application program",
            "to handle the files in the operating system",
            "to get and execute the next user-specified command",
            "none of the mentioned"
        ]
    },
    {
        numb: 3,
        question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        answer: "All of the mentioned",
        options: [
            "Priority",
            "Round Robin",
            "Shortest Job First",
            "All of the mentioned"
        ]
    },
    {
        numb: 4,
        question: "To access the services of the operating system, the interface is provided by the ___________",
        answer: "System calls",
        options: [
            "Library",
            "System calls",
            "Assembly instructions",
            "API"
        ]
    },
    {
        numb: 5,
        question: "CPU scheduling is the basis of ___________",
        answer: "multiprogramming operating systems",
        options: [
            "multiprogramming operating systems",
            "larger memory sized systems",
            "multiprocessor systems",
            "none of the mentioned"
        ]
    },
    {
        numb: 6,
        question: "Which one of the following is not true",
        answer: "kernel is made of various modules which can not be loaded in running operating system",
        options: [
            "kernel remains in the memory during the entire computer session",
            "kernel is made of various modules which can not be loaded in running operating system",
            "kernel is the first part of the operating system to load into memory during booting",
            "kernel is the program that constitutes the central core of the operating system"
        ]
    },
    {
        numb: 7,
        question: "Which one of the following errors will be handle by the operating system?",
        answer: "all of the mentioned",
        options: [
            "lack of paper in printer",
            "connection failure in the network",
            "power failure",
            "all of the mentioned"
        ]
    },
    {
        numb: 8,
        question: "Where is the operating system placed in the memory?",
        answer: "either low or high memory (depending on the location of interrupt vector)",
        options: [
            "either low or high memory (depending on the location of interrupt vector)",
            "in the low memory",
            "in the high memory",
            "none of the mentioned"
        ]
    },
    {
        numb: 9,
        question: "If a process fails, most operating system write the error information to a ______",
        answer: "log file",
        options: [
            "new file",
            "another running process",
            "log file",
            "none of the mentioned"
        ]
    },
    {
        numb: 10,
        question: "Which one of the following is not a real time operating system?",
        answer: "Palm OS",
        options: [
            "RT Linux",
            "Palm OS",
            "QNX",
            "VxWorks"
        ]
    }
]
var daa_questions = [
    {
        numb: 1,
        question: "Which of the following is/are property/properties of a dynamic programming problem?",
        answer: "Both optimal substructure and overlapping subproblems",
        options: [
            "Optimal substructure",
            "Overlapping subproblems",
            "Greedy approach",
            "Both optimal substructure and overlapping subproblems"
        ]
    },
    {
        numb: 2,
        question: "If an optimal solution can be created for a problem by constructing optimal solutions for its subproblems, the problem possesses ____________ property.",
        answer: "Optimal substructure",
        options: [
            "Overlapping subproblems",
            "Optimal substructure",
            "Memoization",
            "Greedy"
        ]
    },
    {
        numb: 3,
        question: "If a problem can be broken into subproblems which are reused several times, the problem possesses ____________ property.",
        answer: "Overlapping subproblems",
        options: [
            "Overlapping subproblems",
            "Optimal substructure",
            "Memoization",
            "Greedy"
        ]
    },
    {
        numb: 4,
        question: "If a problem can be solved by combining optimal solutions to non-overlapping problems, the strategy is called _____________?",
        answer: "Divide and conquer",
        options: [
            "Dynamic programming",
            "Greedy",
            "Divide and conquer",
            "Recursion"
        ]
    },
    {
        numb: 5,
        question: "In dynamic programming, the technique of storing the previously calculated values is called ___________?",
        answer: "Memoization",
        options: [
            "Saving value property",
            "Storing value property",
            "Memoization",
            "Mapping"
        ]
    },
    {
        numb: 6,
        question: "When a top-down approach of dynamic programming is applied to a problem, it usually _____________?",
        answer: "Decreases the time complexity and increases the space complexity",
        options: [
            "Decreases both, the time complexity and the space complexity",
            "Decreases the time complexity and increases the space complexity",
            "Increases the time complexity and decreases the space complexity",
            "Increases both, the time complexity and the space complexity"
        ]
    },
    {
        numb: 7,
        question: "Which of the following problems is NOT solved using dynamic programming?",
        answer: "Fractional knapsack problem",
        options: [
            "0/1 knapsack problem",
            "Matrix chain multiplication problem",
            "Edit distance problem",
            "Fractional knapsack problem"
        ]
    },
    {
        numb: 8,
        question: "Which of the following problems should be solved using dynamic programming?",
        answer: "Longest common subsequence",
        options: [
            "Mergesort",
            "Binary search",
            "Longest common subsequence",
            "Quicksort"
        ]
    },
    {
        numb: 9,
        question: "In n-queen problem, how many values of n does not provide an optimal solution?",
        answer: "2",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 10,
        question: "Of the following given options, which one of the following is a correct option that provides an optimal solution for 4-queens problem?",
        answer: "(3,1,4,2)",
        options: [
            "(3,1,4,2)",
            "(2,3,1,4)",
            "(4,3,2,1)",
            "(4,2,3,1)"
        ]
    }
]
var java_questions = [
    {
        numb: 1,
        question: "Who invented Java Programming?",
        answer: "James Gosling",
        options: [
            "Guido van Rossum",
            "James Gosling",
            "Dennis Ritchie",
            "Bjarne Stroustrup"
            ]
    },
    {
        numb: 2,
        question: "Which statement is true about Java?",
        answer: "Java is a platform independent programming language",
        options: [
            " Java is a sequence-dependent programming language",
            "Java is a code dependent programming language",
            "Java is a platform-dependent programming language",
            "Java is a platform independent programming language"
        ]
    },
    {
        numb: 3,
        question: "Which component is used to compile, debug and execute the java programs?",
        answer: "JDK",
        options: [
            "JRE",
            "JIT",
            "JDK",
            "JVM"
        ]
    },
    {
        numb: 4,
        question: "Which one of the following is not a Java feature?",
        answer: "Use of pointers",
        options: [
            "Object-oriented",
            "Use of pointers",
            "Portable",
            "Dynamic and Extensible"
        ]
    },
    {
        numb: 5,
        question: "Which of these cannot be used for a variable name in Java?",
        answer: "keyword",
        options: [
            "identifier&Keyword",
            "identifier",
            "keyword",
            "none of the mentioned"
        ]
    },
    {
        numb: 6,
        question: "What is the extension of java code files?",
        answer: ".java",
        options: [
            ".js",
            ".txt",
            ".class",
            ".java"
        ]
    },
    {
        numb: 7,
        question: "What is not the use of “this” keyword in Java?",
        answer: "Passing itself to the method of the same class",
        options: [
            "Referring to the instance variable when a local variable has the same name",
            "Passing itself to the method of the same class",
            "Passing itself to another method",
            "Calling another constructor in constructor chaining"
        ]
    },
    {
        numb: 8,
        question: "Calling another constructor in constructor chaining?",
        answer: "JAVA_HOME",
        options: [
            "MAVEN_HOME",
            "CLASSPATH",
            "JAVA",
            "JAVA_HOME"
        ]
    },
    {
        numb: 9,
        question: " Which of the following is a type of polymorphism in Java Programming?",
        answer: "Compile time polymorphism",
        options: [
            "Multiple polymorphism",
            "Compile time polymorphism",
            "Multilevel polymorphism",
            "Execution time polymorphism"
        ]
    },
    {
        numb: 10,
        question: "Which of the following is not an OOPS concept in Java??",
        answer: "Compilation",
        options: [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Encapsulation"
        ]
    }
]