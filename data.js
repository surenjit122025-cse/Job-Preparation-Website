// ====== JOB DATA ======
const JOBS_DATA = [
    { id: 1, title: "Software Development Engineer II", company: "Google", location: "Bangalore, India", type: "Full-time", experience: "Mid", salary: 35, salaryText: "₹35-45 LPA", tags: ["React", "Node.js", "Cloud"], posted: "2 days ago", logo: "G", color: "#4285f4", remote: false, urgent: false, description: "Build and maintain scalable web applications powering Google Search infrastructure.", requirements: ["3+ years experience with React/Angular", "Strong CS fundamentals", "Experience with distributed systems", "Excellent problem-solving skills"], responsibilities: ["Design and implement new features", "Code reviews and mentoring", "Performance optimization", "Cross-team collaboration"] },
    { id: 2, title: "Frontend Engineer", company: "Microsoft", location: "Hyderabad, India", type: "Full-time", experience: "Junior", salary: 22, salaryText: "₹22-30 LPA", tags: ["TypeScript", "React", "Azure"], posted: "1 day ago", logo: "M", color: "#00a4ef", remote: false, urgent: true, description: "Join the Microsoft Teams frontend team to build collaborative experiences.", requirements: ["2+ years React/TypeScript", "Understanding of web performance", "Experience with testing frameworks", "Knowledge of accessibility standards"], responsibilities: ["Build responsive UI components", "Write unit and integration tests", "Collaborate with designers", "Optimize frontend performance"] },
    { id: 3, title: "SDE Intern", company: "Amazon", location: "Remote", type: "Internship", experience: "Fresher", salary: 8, salaryText: "₹80K/month", tags: ["Java", "DSA", "AWS"], posted: "5 hours ago", logo: "A", color: "#ff9900", remote: true, urgent: true, description: "6-month internship working on Amazon's retail platform microservices.", requirements: ["Currently pursuing B.Tech/M.Tech", "Strong DSA skills", "Proficiency in Java/C++", "Good communication skills"], responsibilities: ["Develop microservices", "Write clean, testable code", "Participate in design discussions", "Learn from senior engineers"] },
    { id: 4, title: "Backend Developer", company: "Flipkart", location: "Bangalore, India", type: "Full-time", experience: "Mid", salary: 28, salaryText: "₹28-38 LPA", tags: ["Java", "Spring Boot", "Kafka"], posted: "3 days ago", logo: "F", color: "#2874f0", remote: false, urgent: false, description: "Build high-throughput backend services for Flipkart's e-commerce platform.", requirements: ["3+ years Java/Spring Boot", "Experience with message queues", "Database design expertise", "Knowledge of microservices patterns"], responsibilities: ["Design scalable APIs", "Implement event-driven architectures", "Database optimization", "Production support and monitoring"] },
    { id: 5, title: "Full Stack Developer", company: "Adobe", location: "Noida, India", type: "Full-time", experience: "Junior", salary: 20, salaryText: "₹20-28 LPA", tags: ["React", "Node.js", "MongoDB"], posted: "1 week ago", logo: "Ad", color: "#ff0000", remote: false, urgent: false, description: "Work on Adobe Creative Cloud web applications.", requirements: ["2+ years full-stack experience", "React and Node.js proficiency", "NoSQL database experience", "API design skills"], responsibilities: ["End-to-end feature development", "API design and implementation", "Performance optimization", "Technical documentation"] },
    { id: 6, title: "ML Engineer", company: "Google", location: "Remote", type: "Full-time", experience: "Senior", salary: 45, salaryText: "₹45-60 LPA", tags: ["Python", "TensorFlow", "ML"], posted: "4 days ago", logo: "G", color: "#4285f4", remote: true, urgent: false, description: "Develop and deploy machine learning models for Google Assistant.", requirements: ["5+ years ML experience", "Expert in Python/TensorFlow", "Published research preferred", "Experience with NLP"], responsibilities: ["Design ML pipelines", "Model training and evaluation", "A/B testing", "Research and innovation"] },
    { id: 7, title: "DevOps Engineer", company: "Microsoft", location: "Pune, India", type: "Full-time", experience: "Mid", salary: 30, salaryText: "₹30-40 LPA", tags: ["Kubernetes", "CI/CD", "Azure"], posted: "6 days ago", logo: "M", color: "#00a4ef", remote: false, urgent: false, description: "Build and maintain CI/CD pipelines for Azure DevOps.", requirements: ["3+ years DevOps experience", "Kubernetes expertise", "CI/CD pipeline design", "Infrastructure as Code"], responsibilities: ["Automate deployments", "Monitor system health", "Infrastructure management", "Security compliance"] },
    { id: 8, title: "Data Analyst", company: "Flipkart", location: "Bangalore, India", type: "Full-time", experience: "Fresher", salary: 12, salaryText: "₹12-18 LPA", tags: ["SQL", "Python", "Tableau"], posted: "2 days ago", logo: "F", color: "#2874f0", remote: false, urgent: false, description: "Analyze business data to drive decision-making for Flipkart's marketplace.", requirements: ["Strong SQL skills", "Python for data analysis", "Visualization tools", "Statistical knowledge"], responsibilities: ["Build dashboards", "Generate insights", "A/B test analysis", "Stakeholder presentations"] },
    { id: 9, title: "iOS Developer", company: "Apple", location: "Hyderabad, India", type: "Full-time", experience: "Mid", salary: 32, salaryText: "₹32-42 LPA", tags: ["Swift", "SwiftUI", "Xcode"], posted: "1 day ago", logo: "🍎", color: "#555555", remote: false, urgent: false, description: "Build premium iOS experiences for Apple's services ecosystem.", requirements: ["3+ years iOS development", "Swift and SwiftUI mastery", "App Store deployment", "Performance profiling"], responsibilities: ["Design native iOS features", "Optimize app performance", "Code reviews", "Collaborate with design team"] },
    { id: 10, title: "Cloud Architect", company: "Amazon", location: "Remote", type: "Contract", experience: "Senior", salary: 50, salaryText: "₹50-70 LPA", tags: ["AWS", "Terraform", "Architecture"], posted: "3 days ago", logo: "A", color: "#ff9900", remote: true, urgent: false, description: "Design cloud-native architectures for enterprise AWS customers.", requirements: ["7+ years cloud experience", "AWS certified", "Architecture design", "Cost optimization"], responsibilities: ["Design cloud solutions", "Customer workshops", "Architecture reviews", "Technical leadership"] },
    { id: 11, title: "React Native Developer", company: "Razorpay", location: "Bangalore, India", type: "Full-time", experience: "Junior", salary: 18, salaryText: "₹18-25 LPA", tags: ["React Native", "TypeScript", "Fintech"], posted: "5 days ago", logo: "R", color: "#0066ff", remote: false, urgent: false, description: "Build mobile payment experiences for millions of users.", requirements: ["2+ years React Native", "TypeScript proficiency", "Mobile CI/CD", "Payment systems knowledge"], responsibilities: ["Build mobile features", "Cross-platform development", "Performance optimization", "E2E testing"] },
    { id: 12, title: "Security Engineer", company: "Google", location: "Bangalore, India", type: "Full-time", experience: "Senior", salary: 42, salaryText: "₹42-55 LPA", tags: ["Security", "Python", "Cloud"], posted: "1 week ago", logo: "G", color: "#4285f4", remote: false, urgent: false, description: "Protect Google's infrastructure from security threats.", requirements: ["5+ years security experience", "Penetration testing", "Cloud security", "Security certifications"], responsibilities: ["Vulnerability assessments", "Security architecture", "Incident response", "Policy development"] },
];
// ====== COMPANY PREPARATION DATA ======
const PREP_DATA = [
    {
        id: "google", name: "Google", type: "product", logo: "G", color: "#4285f4", tagline: "Product-Based | FAANG", tags: ["Coding", "System Design", "Behavioral"], stats: { rounds: "4-6", difficulty: "Hard", avgSalary: "₹30-60 LPA", timeline: "4-6 weeks" },
        examPattern: { online: ["2 coding problems (Medium-Hard)", "45-60 minutes", "Languages: C++, Java, Python"], onsite: ["2-3 DSA rounds", "1 System Design round", "1 Googleyness & Leadership round", "Each round: 45 minutes"] },
        syllabus: ["Arrays & Strings", "Graphs & Trees", "Dynamic Programming", "System Design", "Object-Oriented Design", "Behavioral Questions", "Concurrency & Threading"],
        eligibility: ["B.Tech/M.Tech from recognized university", "Strong problem-solving skills", "No active backlogs (for freshers)", "Relevant work experience for lateral"],
        tips: ["Master graph algorithms and DP", "Practice on LeetCode Hard problems", "Study Google's engineering culture", "Prepare STAR format behavioral answers", "Focus on code readability and testing"]
    },
    {
        id: "microsoft", name: "Microsoft", type: "product", logo: "M", color: "#00a4ef", tagline: "Product-Based | FAANG", tags: ["Coding", "Design", "Culture Fit"], stats: { rounds: "4-5", difficulty: "Medium-Hard", avgSalary: "₹25-50 LPA", timeline: "3-5 weeks" },
        examPattern: { online: ["3 coding problems", "60-75 minutes", "Focus on DSA and problem solving"], onsite: ["2 DSA rounds", "1 System Design round", "1 Hiring Manager round", "Each round: 45-60 minutes"] },
        syllabus: ["Arrays, Linked Lists, Stacks & Queues", "Trees & Graphs", "Dynamic Programming", "System Design Basics", "OOP Concepts", "SQL & Databases"],
        eligibility: ["B.Tech/M.Tech in CS/IT/ECE", "CGPA 7.0+ (for campus)", "Strong fundamentals in CS", "Good communication skills"],
        tips: ["Focus on clean, bug-free code", "Practice explaining your approach", "Study design patterns", "Understand Microsoft's products", "Be ready to discuss past projects"]
    },
    {
        id: "amazon", name: "Amazon", type: "product", logo: "A", color: "#ff9900", tagline: "Product-Based | FAANG", tags: ["Leadership Principles", "Coding", "System Design"], stats: { rounds: "4-5", difficulty: "Medium-Hard", avgSalary: "₹28-55 LPA", timeline: "2-4 weeks" },
        examPattern: { online: ["2 coding problems + work simulation", "90 minutes", "Focus on efficiency and edge cases"], onsite: ["2 DSA rounds", "1 System Design round (for SDE-II+)", "1 Bar Raiser round", "Leadership Principles in every round"] },
        syllabus: ["Arrays & Hash Maps", "Trees, Graphs & BFS/DFS", "Dynamic Programming", "Greedy Algorithms", "System Design", "Amazon Leadership Principles"],
        eligibility: ["B.Tech/M.Tech from recognized university", "Strong coding skills", "Understanding of data structures", "Alignment with Leadership Principles"],
        tips: ["Memorize and practice all 16 Leadership Principles", "Prepare STAR stories for each LP", "Focus on optimal solutions", "Practice system design for scale", "Study Amazon's customer obsession culture"]
    },
    {
        id: "flipkart", name: "Flipkart", type: "product", logo: "F", color: "#2874f0", tagline: "Product-Based | E-Commerce", tags: ["Coding", "Machine Coding", "Design"], stats: { rounds: "3-5", difficulty: "Medium-Hard", avgSalary: "₹22-45 LPA", timeline: "2-3 weeks" },
        examPattern: { online: ["2-3 coding problems", "60-90 minutes", "Focus on efficiency"], onsite: ["1-2 DSA rounds", "1 Machine Coding round", "1 System Design round", "1 Hiring Manager round"] },
        syllabus: ["Data Structures", "Algorithms", "Machine Coding / LLD", "High Level Design", "Problem Solving", "CS Fundamentals"],
        eligibility: ["B.Tech/M.Tech in CS/IT", "Good problem-solving skills", "Knowledge of at least one programming language", "Understanding of OOP"],
        tips: ["Practice machine coding rounds", "Study low-level design patterns", "Focus on writing modular code", "Understand e-commerce systems", "Practice time management in coding rounds"]
    },
    {
        id: "tcs", name: "TCS", type: "service", logo: "T", color: "#0066b3", tagline: "Service-Based | IT Services", tags: ["TCS NQT", "Coding", "Verbal"], stats: { rounds: "2-3", difficulty: "Easy-Medium", avgSalary: "₹3.5-7 LPA", timeline: "1-3 weeks" },
        examPattern: { online: ["TCS NQT: Verbal, Quantitative, Reasoning, Coding", "180 minutes total", "Ninja & Digital profiles available"], onsite: ["Technical Interview", "Managerial Interview", "HR Interview"] },
        syllabus: ["Verbal Ability & Reading Comprehension", "Quantitative Aptitude", "Logical Reasoning", "Programming Logic", "Basic Coding (C/Java/Python)", "CS Fundamentals"],
        eligibility: ["B.Tech/B.E/M.Tech/MCA", "60% throughout academics", "No active backlogs", "Gap of max 2 years"],
        tips: ["Practice TCS NQT mock tests", "Focus on coding in one language", "Revise aptitude formulas", "Prepare for HR questions", "Understand TCS's work culture"]
    },
    {
        id: "infosys", name: "Infosys", type: "service", logo: "i", color: "#007cc3", tagline: "Service-Based | IT Services", tags: ["InfyTQ", "Coding", "Aptitude"], stats: { rounds: "2-3", difficulty: "Easy-Medium", avgSalary: "₹3.6-8 LPA", timeline: "1-3 weeks" },
        examPattern: { online: ["Online Aptitude Test", "Coding Test (2-3 problems)", "Specialist roles have additional rounds"], onsite: ["Technical Interview", "HR Interview", "Power Programmer: additional coding round"] },
        syllabus: ["Aptitude & Logical Reasoning", "Programming Concepts", "Database (SQL)", "Networking Basics", "OOP Concepts", "Coding (Java/Python/C++)"],
        eligibility: ["B.Tech/B.E/M.Tech/MCA/M.Sc", "60%+ in 10th, 12th, and Graduation", "No active backlogs", "Maximum 1 year gap"],
        tips: ["Practice on InfyTQ platform", "Focus on Java and Python", "Study DBMS and SQL", "Prepare HR questions well", "Consider Power Programmer role for better package"]
    },
    {
        id: "razorpay", name: "Razorpay", type: "startup", logo: "R", color: "#0066ff", tagline: "Startup | Fintech", tags: ["Coding", "System Design", "Culture"], stats: { rounds: "3-4", difficulty: "Medium-Hard", avgSalary: "₹18-40 LPA", timeline: "1-2 weeks" },
        examPattern: { online: ["HackerRank coding test", "2-3 problems", "45-60 minutes"], onsite: ["1-2 DSA rounds", "1 System Design round", "1 Culture fit round"] },
        syllabus: ["Data Structures & Algorithms", "System Design", "Low Level Design", "Payment Systems", "API Design", "Database Design"],
        eligibility: ["B.Tech/M.Tech in CS/IT", "Experience with fintech preferred", "Strong coding skills", "Understanding of payment systems is a plus"],
        tips: ["Understand payment gateway systems", "Practice API design questions", "Focus on reliability and scalability", "Study Razorpay's products", "Be ready for fast-paced culture questions"]
    },
    {
        id: "isro", name: "ISRO", type: "govt", logo: "🚀", color: "#1a237e", tagline: "Government | Space Research", tags: ["GATE", "Technical", "Interview"], stats: { rounds: "3", difficulty: "Medium", avgSalary: "₹8-15 LPA + Benefits", timeline: "3-6 months" },
        examPattern: { online: ["ISRO Centralized Recruitment (Written Test)", "Objective type MCQs", "Based on B.Tech syllabus"], onsite: ["Technical Interview", "Skill Test", "Document Verification"] },
        syllabus: ["Engineering Mathematics", "Core CS Subjects (for CS branch)", "Electronics/Mechanical (branch specific)", "General Aptitude", "Current Affairs in Space Technology"],
        eligibility: ["B.Tech/B.E in relevant branch", "65%+ or 6.84 CGPA", "Indian Nationality", "Age limit as per notification"],
        tips: ["Prepare through GATE syllabus", "Study previous year ISRO papers", "Focus on core engineering subjects", "Stay updated with ISRO missions", "Physical fitness may be required"]
    },
];
// ====== DSA TOPICS DATA ======
const DSA_TOPICS = [
    {
        id: "arrays", name: "Arrays & Strings", icon: "fas fa-th", color: "#3b82f6", totalProblems: 40, description: "Foundation of DSA",
        problems: [
            { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/", pattern: "Hash Map" },
            { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", pattern: "Sliding Window" },
            { name: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/", pattern: "Hash Set" },
            { name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Prefix Sum" },
            { name: "Maximum Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/", pattern: "Kadane's" },
            { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/", pattern: "Two Pointers" },
            { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers" },
            { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Sliding Window" },
            { name: "Trapping Rain Water", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers" },
            { name: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Sliding Window" },
        ]
    },
    {
        id: "linked-list", name: "Linked Lists", icon: "fas fa-link", color: "#8b5cf6", totalProblems: 25, description: "Pointers & References",
        problems: [
            { name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/", pattern: "Iterative" },
            { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/", pattern: "Two Pointers" },
            { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/", pattern: "Fast & Slow" },
            { name: "Remove Nth Node From End", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", pattern: "Two Pointers" },
            { name: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/", pattern: "Fast & Slow" },
            { name: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/", pattern: "Math" },
            { name: "Copy List with Random Pointer", difficulty: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", pattern: "Hash Map" },
            { name: "Merge K Sorted Lists", difficulty: "Hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Heap" },
        ]
    },
    {
        id: "stack-queue", name: "Stacks & Queues", icon: "fas fa-layer-group", color: "#10b981", totalProblems: 22, description: "LIFO & FIFO patterns",
        problems: [
            { name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/", pattern: "Stack" },
            { name: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/", pattern: "Stack" },
            { name: "Daily Temperatures", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/", pattern: "Monotonic Stack" },
            { name: "Next Greater Element I", difficulty: "Easy", link: "https://leetcode.com/problems/next-greater-element-i/", pattern: "Monotonic Stack" },
            { name: "Implement Queue using Stacks", difficulty: "Easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/", pattern: "Stack" },
            { name: "Sliding Window Maximum", difficulty: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Monotonic Deque" },
            { name: "Largest Rectangle in Histogram", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Monotonic Stack" },
        ]
    },
    {
        id: "trees", name: "Binary Trees & BST", icon: "fas fa-sitemap", color: "#f59e0b", totalProblems: 35, description: "Hierarchical Data",
        problems: [
            { name: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", pattern: "DFS" },
            { name: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/", pattern: "DFS" },
            { name: "Same Tree", difficulty: "Easy", link: "https://leetcode.com/problems/same-tree/", pattern: "DFS" },
            { name: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "BFS" },
            { name: "Validate BST", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "DFS" },
            { name: "Kth Smallest Element in BST", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", pattern: "Inorder" },
            { name: "Lowest Common Ancestor", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", pattern: "DFS" },
            { name: "Binary Tree Max Path Sum", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", pattern: "DFS" },
            { name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", pattern: "BFS/DFS" },
        ]
    },
    {
        id: "graphs", name: "Graphs", icon: "fas fa-project-diagram", color: "#ec4899", totalProblems: 30, description: "Networks & Connectivity",
        problems: [
            { name: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/", pattern: "BFS/DFS" },
            { name: "Clone Graph", difficulty: "Medium", link: "https://leetcode.com/problems/clone-graph/", pattern: "DFS" },
            { name: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/", pattern: "Topological Sort" },
            { name: "Pacific Atlantic Water Flow", difficulty: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "DFS" },
            { name: "Graph Valid Tree", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/", pattern: "Union Find" },
            { name: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/", pattern: "BFS" },
            { name: "Alien Dictionary", difficulty: "Hard", link: "https://leetcode.com/problems/alien-dictionary/", pattern: "Topological Sort" },
            { name: "Dijkstra's Shortest Path", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/", pattern: "Dijkstra" },
        ]
    },
    {
        id: "dp", name: "Dynamic Programming", icon: "fas fa-brain", color: "#ef4444", totalProblems: 40, description: "Optimization & Memoization",
        problems: [
            { name: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/", pattern: "1D DP" },
            { name: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/", pattern: "1D DP" },
            { name: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/", pattern: "Unbounded Knapsack" },
            { name: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/", pattern: "1D DP" },
            { name: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/", pattern: "2D DP" },
            { name: "Word Break", difficulty: "Medium", link: "https://leetcode.com/problems/word-break/", pattern: "1D DP" },
            { name: "0/1 Knapsack", difficulty: "Medium", link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/", pattern: "2D DP" },
            { name: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/", pattern: "2D DP" },
            { name: "Edit Distance", difficulty: "Hard", link: "https://leetcode.com/problems/edit-distance/", pattern: "2D DP" },
            { name: "Burst Balloons", difficulty: "Hard", link: "https://leetcode.com/problems/burst-balloons/", pattern: "Interval DP" },
        ]
    },
    {
        id: "heap", name: "Heaps & Priority Queues", icon: "fas fa-sort-amount-up", color: "#14b8a6", totalProblems: 18, description: "Priority-based access",
        problems: [
            { name: "Kth Largest Element", difficulty: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Heap" },
            { name: "Top K Frequent Elements", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Heap" },
            { name: "Find Median from Data Stream", difficulty: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/", pattern: "Two Heaps" },
            { name: "Task Scheduler", difficulty: "Medium", link: "https://leetcode.com/problems/task-scheduler/", pattern: "Greedy/Heap" },
            { name: "Reorganize String", difficulty: "Medium", link: "https://leetcode.com/problems/reorganize-string/", pattern: "Heap" },
            { name: "K Closest Points to Origin", difficulty: "Medium", link: "https://leetcode.com/problems/k-closest-points-to-origin/", pattern: "Heap" },
        ]
    },
    {
        id: "backtracking", name: "Backtracking & Recursion", icon: "fas fa-undo", color: "#f97316", totalProblems: 20, description: "Exhaustive Search",
        problems: [
            { name: "Subsets", difficulty: "Medium", link: "https://leetcode.com/problems/subsets/", pattern: "Backtracking" },
            { name: "Permutations", difficulty: "Medium", link: "https://leetcode.com/problems/permutations/", pattern: "Backtracking" },
            { name: "Combination Sum", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/", pattern: "Backtracking" },
            { name: "Letter Combinations of Phone Number", difficulty: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", pattern: "Backtracking" },
            { name: "Word Search", difficulty: "Medium", link: "https://leetcode.com/problems/word-search/", pattern: "Backtracking" },
            { name: "N-Queens", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/", pattern: "Backtracking" },
            { name: "Sudoku Solver", difficulty: "Hard", link: "https://leetcode.com/problems/sudoku-solver/", pattern: "Backtracking" },
        ]
    },
    {
        id: "binary-search", name: "Binary Search", icon: "fas fa-search", color: "#6366f1", totalProblems: 18, description: "Divide & Conquer",
        problems: [
            { name: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/", pattern: "Classic" },
            { name: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Modified BS" },
            { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", pattern: "Modified BS" },
            { name: "Search a 2D Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/", pattern: "Modified BS" },
            { name: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/", pattern: "BS on Answer" },
            { name: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search" },
        ]
    },
    {
        id: "greedy", name: "Greedy Algorithms", icon: "fas fa-hand-holding-usd", color: "#84cc16", totalProblems: 15, description: "Local Optimal Choices",
        problems: [
            { name: "Jump Game", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game/", pattern: "Greedy" },
            { name: "Jump Game II", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game-ii/", pattern: "Greedy" },
            { name: "Gas Station", difficulty: "Medium", link: "https://leetcode.com/problems/gas-station/", pattern: "Greedy" },
            { name: "Activity Selection", difficulty: "Easy", link: "https://practice.geeksforgeeks.org/problems/activity-selection/", pattern: "Greedy" },
            { name: "Fractional Knapsack", difficulty: "Medium", link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack/", pattern: "Greedy" },
            { name: "Minimum Platforms", difficulty: "Medium", link: "https://practice.geeksforgeeks.org/problems/minimum-platforms/", pattern: "Greedy" },
        ]
    },
    {
        id: "trie", name: "Tries & Advanced", icon: "fas fa-spell-check", color: "#a855f7", totalProblems: 12, description: "String & Bit Operations",
        problems: [
            { name: "Implement Trie", difficulty: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", pattern: "Trie" },
            { name: "Word Search II", difficulty: "Hard", link: "https://leetcode.com/problems/word-search-ii/", pattern: "Trie + Backtracking" },
            { name: "Design Add and Search Words", difficulty: "Medium", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", pattern: "Trie" },
            { name: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/", pattern: "Bit Manipulation" },
            { name: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/", pattern: "Bit Manipulation" },
            { name: "Maximum XOR of Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", pattern: "Trie/Bit" },
        ]
    },
];
