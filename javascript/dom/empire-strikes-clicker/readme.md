Try this >> https://jsd12week07.vercel.app/ | Idle / Clicker Game (Star wars fan-made game)
This is my Mini project #2
{ Empire Strikes Clicker! }
A Star Wars-themed web browser Clicker game built to practice and reinforce fundamental Front-end web development skills. This project heavily focuses on dynamic { DOM Manipulation } using JavaScript, game state management, and crafting responsive UIs with { Tailwind CSS }.

🎯 { What I Learned & Practiced }

1. { HTML5 }
   Semantic & Structure: Structuring the page layout using Flexbox and Grid, dividing the interface into three primary sections (Left: Click Area, Center: Poster, Right: Store).
   Accessibility & Meta Tags: Configuring the viewport meta tag to fully support mobile screens and prevent unintended user zooming (user-scalable=no) for a native-app feel.
2. { CSS & Tailwind CSS }
   Utility-First CSS: Rapidly building the layout (flex, grid), managing spacing (p-4, mb-6), and formatting typography directly within the HTML using { Tailwind CSS }.
   Responsive Design: Applying breakpoints (md:) to seamlessly shift the layout from a vertical mobile view (Flex Column) to a 3-column desktop view (Grid).
   Advanced CSS Features:
   clip-path: Rendering complex geometric shapes (like the TIE Fighter, AT-AT, and Star Destroyer) entirely with CSS, removing the need for external image assets.
   mix-blend-overlay: Crafting seamless atmospheric light and shadow effects over the planet button.
   radial-gradient: Generating a deep, radial gradient background to simulate the vastness of space.
   Dynamic CSS Animation: Using JavaScript to dynamically generate @keyframes for the planetary orbit speeds and injecting them directly into a <style> tag on load.
3. { JavaScript & DOM Manipulation }
   JavaScript is the core engine of this project. It handles all game logic and dynamic DOM updates:

DOM Element Selection (getElementById): Referencing UI elements to read values or update the display dynamically, such as { score-display }, { power-display }, and { store-container }.

Dynamic DOM Creation & Injection (createElement, appendChild):

Floating Text System: Spawning a <div> element showing the current click power (+1) at the exact { X, Y } mouse coordinates upon clicking the planet. Using setTimeout to safely remove() the element from the DOM after the animation completes to prevent memory leaks.
Orbit System: Reading values from the { orbitConfig } object to generate <div> representations of purchased units. Calculating random deployment angles and appending (appendChild) them into the { orbit-container }.
DOM Updating & Class Toggling (textContent, classList):

Building an updateUI() function that serves as a single source of truth to refresh the score and the availability status of all store buttons.
Utilizing classList.add() and classList.remove() to visually toggle item price colors (red for insufficient funds, white when affordable) and managing the disabled attribute on <button> elements.
Event Handling (addEventListener):

Capturing click events to trigger game logic on the central planet and store items.
Intercepting touchmove and touchend events using event.preventDefault() to completely disable default mobile browser zooming behaviors (pinch-to-zoom and double-tap zoom), ensuring a smooth, uninterrupted clicker experience.
Timing Functions & Game Loop:

setInterval(): Establishing the core game loop for the Auto Clicker, adding the { autoRate } to the total score every 1 second (1000ms).
setTimeout(): Delaying the execution of garbage-collecting the floating text elements.
requestAnimationFrame(): Ensuring the browser renders the floating text animations (drifting upwards and fading out) as smoothly as possible.
Data Structure & State Management:

Utilizing JavaScript Objects ({ shop }, { orbitConfig }) to centralize game configuration and unit states (costs, click power, auto-rate, orbit speed). This structure keeps the logic clean and makes future game balancing highly scalable. 4. { State Management & Data Structure }
The core concepts behind building this Clicker game are fundamental to real-world Web Application development.

Centralized State: Utilizing variables like score, clickPower, and autoRate as the "Single Source of Truth" for the application. This is a crucial stepping stone before moving on to complex state management in frameworks like React (e.g., using useState or the Context API).
Object-Oriented Data: Designing the store inventory using a JavaScript Object ({ shop }) simulates handling JSON payloads. This approach is directly applicable to building shopping carts, rendering product lists from a database, or managing mock data for an E-commerce UI before connecting to a real API. 5. { Logic Separation & Component Thinking }
Even though this is built with Vanilla JS, the codebase is structured with scalability in mind.

Reusable Functions: Decoupling logic into distinct functions like updateUI(), buyItem(), and spawnOrbitUnit() makes the code highly readable, easier to debug, and reusable. This mindset is the foundation of the Component-based architecture used in modern Front-end frameworks.
Dynamic Rendering: Generating UI elements on the fly based on underlying data (Data-Driven UI) instead of hardcoding everything in HTML. This is an essential skill for fetching data from a Back-end (like Node.js/Express) and rendering it dynamically on the client side. 6. { Performance & Memory Management }
Resource optimization is what separates a basic project from a production-ready application.

Garbage Collection Awareness: Implementing setTimeout to actively .remove() the floating text elements from the DOM after their animation finishes prevents Memory Leaks. This practice is critical in Single Page Applications (SPAs) where users might leave a tab open for extended periods.
Optimized Animations: Utilizing requestAnimationFrame for tasks requiring high framerates (60fps) and offloading continuous background animations to CSS. This prevents main-thread blocking and keeps the JavaScript engine free to handle game logic. 7. { UX & Micro-Interactions }
Paying attention to small details significantly elevates the perceived quality of an application.

State Feedback: Writing conditional logic to dynamically toggle the disabled state of buttons and change text colors based on the user's current score. This logic is identical to building Form Validations or handling a "Checkout" button that remains inactive until all required fields are filled.
Mobile-First Interaction: Actively managing touch events and overriding default browser behaviors to deliver a Native App experience within a web browser. This is highly applicable when building responsive Web Apps designed primarily for mobile or tablet users.
