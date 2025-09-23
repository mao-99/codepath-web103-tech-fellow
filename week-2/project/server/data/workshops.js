const workshopData = [
    {
        id: 0,
        title: "Two Sum",
        related_concepts: ['Array', 'Hash Table'],
        leetcode_link: "https://leetcode.com/problems/two-sum/description/",
        solution_sheet_link: "https://example.com/js-solutions",
        video_link: "https://example.com/js-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplejs"
    },
    {
        id: 1,
        title: "Valid Parentheses",
        related_concepts: ['String', 'Stack'],
        leetcode_link: "https://leetcode.com/problems/valid-parentheses/description/",
        solution_sheet_link: "https://example.com/css-solutions",
        video_link: "https://example.com/css-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecss"
    },
    {
        id: 2,
        title: "Merge Two Sorted Lists",
        related_concepts: ['Linked List', 'Recursion'],
        leetcode_link: "https://leetcode.com/problems/merge-two-sorted-lists/description/",
        solution_sheet_link: "https://example.com/react-solutions",
        video_link: "https://example.com/react-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplereact"
    },
    {
        id: 3,
        title: "Best Time to Buy and Sell Stock",
        related_concepts: ['Array', 'Dynamic Programming'],
        leetcode_link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
        solution_sheet_link: "https://example.com/nodejs-solutions",
        video_link: "https://example.com/nodejs-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplenode"
    },
    {
        id: 4,
        title: "Valid Palindrome",
        related_concepts: ['Two Pointers', 'String'],
        leetcode_link: "https://leetcode.com/problems/valid-palindrome/description/",
        solution_sheet_link: "https://example.com/db-solutions",
        video_link: "https://example.com/db-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/exampledb"
    },
    {
        id: 5,
        title: "Invert Binary Tree",
        related_concepts: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
        leetcode_link: "https://leetcode.com/problems/invert-binary-tree/description/",
        solution_sheet_link: "https://example.com/ml-solutions",
        video_link: "https://example.com/ml-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/exampleml"
    },
    {
        id: 6,
        title: "Valid Anagram",
        related_concepts: ['Hash Table', 'String', 'Sorting'],
        leetcode_link: "https://leetcode.com/problems/valid-anagram/",
        solution_sheet_link: "https://example.com/security-solutions",
        video_link: "https://example.com/security-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplesecurity"
    },
    {
        id: 7,
        title: "Binary Search",
        related_concepts: ['Array', 'Binary Search'],
        leetcode_link: "https://leetcode.com/problems/binary-search/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 8,
        title: "Flood Fill",
        related_concepts: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
        leetcode_link: "https://leetcode.com/problems/flood-fill/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 9,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        related_concepts: ['Tree', 'Depth-First Search', 'Binary Search Tree', 'Binary Tree'],
        leetcode_link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Medium",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 10,
        title: "Balanced Binary Tree",
        related_concepts: ['Tree', 'Depth-First Search', 'Binary Tree'],
        leetcode_link: "https://leetcode.com/problems/balanced-binary-tree/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 11,
        title: "Linked List Cycle",
        related_concepts: ['Hash Table', 'Linked List', 'Two Pointers'],
        leetcode_link: "https://leetcode.com/problems/linked-list-cycle/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 12,
        title: "Implement Queue using Stacks",
        related_concepts: ['Stack', 'Design', 'Queue'],
        leetcode_link: "https://leetcode.com/problems/implement-queue-using-stacks/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 13,
        title: "First Bad Version",
        related_concepts: ['Binary Search', 'Interactive'],
        leetcode_link: "https://leetcode.com/problems/first-bad-version/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 14,
        title: "Ransom Note",
        related_concepts: ['Hash Table', 'String', 'Counting'],
        leetcode_link: "https://leetcode.com/problems/ransom-note/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
    {
        id: 15,
        title: "Climbing Stairs",
        related_concepts: ['Math', 'Dynamic Programming', 'Memoization'],
        leetcode_link: "https://leetcode.com/problems/climbing-stairs/description/",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    },
];

export default workshopData

/*
Schema:
id: 0,Each problem has: {
difficulty: "Easy",title, related_concepts, problem_link, rating, solution_sheet_link, video_link, 
discord_server_link}

Overview: 
id: 0,    
title - This is the problem name
    related_concepts - This is a array of related computer science topics and data structures
    leetcode_link - This is a link to the leetcode/codesignal/hackerrank question.
    rating - An easy, medium, or hard rating of the problem
    solution_link - This is a link to the solution sheet on github. The solution sheet includes a c++, python, javascript, and java solution as well as the algorithm overview and summary
    video_link - This is a link to a video workshop that explains the algorithm approach and a demonstration of how it works
    difficulty: "Easy",
    discord_server_link - This is a link to the discord server
*/