🧑‍💻 Usage Guidelines
1. Choose an Emoji by Either clicking on the 'Generate Emoji' Search Button, Typing a Character Name or CodePoint in the 'Single Search Box' if you know them, type in an Emoji Group or SubGroup in the 'Emoji Group Search' if you know them, or if you don't know them then you can look through the entire Emoji list by clicking the 'Show All Emojis' Button and it would Fetch an Emoji or a list of Emojis from an Emoji API source. If no emoji is found, an error message will appear.

2. Once you see an Emoji you like: Highlight, Copy, and Paste any Emoji you want to use on any code editor or application that accepts Emoji Icons. 

3. Or if you want to know the 'Emoji Unicode CodePoint' value and be able to use it, then Highlight, Copy, and Paste any Emoji into the 'Emoji CodePoint Finder', and it will convert the 'Emoji Character Icon' into the 'Unicode CodePoint' value, which you can Highlight, Copy, and Paste for your own use in your code editor, *Please note: the 'Unicode CodePoint' pattern thats being converted can only be used in 'HTML' or 'React' code editors, there are other patterns with CodePoints but they are not being used here. 
 
✅ Technologies Used
React JS (with Vite for fast development)
async/await function (for making API requests)
[https://emoji-api.com] (for real-time emoji data request)
CSS (for basic styling)
(meta charset="UTF-8") in the head section of your html page to be able to render any emoji.
 

✅ Features Implemented
Random Emoji Generator By clicking a button.
Third-Party API Integration: Uses an async/await function to fetch data from an EmojiAPI.

(5) EmojiApp Components: 

1. for Searching an Emoji by Name or CodePoint and it will display the closest emoji by your input , 
2. for Searching an Emoji for Group or Category and clicking on the 'Filter' button,
3. for converting an Emoji to a 'Unicode CodePoint' by copying and pasting the emoji in the 'Paste an Emoji' box and clicking on the 'Find Code' button.
4. for being able to look through all emojis by clicking on the 'Show All Emojis' button, and 
5. for being able to search through random emojis by clicking on the 'Generate Emoji' button.  
 

📂 File Structure (optional)
src/
 components/
    CodeFinder.jsx
    EmojiGroup.jsx
    EmojiSearch.jsx
    RandomSearch.jsx
    ShowAll.jsx
pages/
   └── none;
EmojiApp.jsx
main.jsx

🔁 Future Plans
* Add better and more useful 'Unicode CodePoint Converters' for all uses.
* Implement the ability to be able to automatically copy an emoji by clicking on it.
* Implement the ability to be able to drag and drop any emoji into the 'Paste an Emoji' input box and get the 'Unicode Code Point' value or other values. 