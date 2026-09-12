DevStack
Description
Dev Stack is a simple web app where developers can explore different technologies (frameworks, languages, databases, tools) and build their own "ideal stack" by adding items to a list. Users can browse technology cards, add or remove them from their stack, and see a live-updating summary of everything they've selected.

Technologies Used
1.React
2.TypeScript
3.Tailwind CSS
4.React Icons
5.React Toastify
6.Vite


Features
1.Browse Technologies – A grid of cards showing different technologies with their name, description, category, difficulty level, and rating.
2.Add to Stack – Clicking "Add to Stack" instantly adds that technology to the "Your Stack" panel, with a toast notification confirming the action.
3.Manage Your Stack – Users can remove individual technologies from their stack or clear the entire stack at once, and the stack count updates live.

React Questions:

1.What is JSX, and why is it used in React?
Ans:JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to make it easier to create and understand the UI.
2.What is the difference between props and state?
Ans:Props are used to send data from a parent component to a child component. Props are read-only.
State is data managed inside a component. When state changes, React updates the UI.

3.What does the useState hook do, and where did you use it in this project?

Ans:useState is used to create and manage changing data inside a React component.
In this project, I used useState to manage things like the selected category/filter and the mobile menu state.

4.What does the useEffect hook do, and why did you need it to load the JSON data?

ANS:useEffect lets us run some code after the component renders.
I used useEffect to fetch the technology data from the data.json file when the application loads.

5.Why does every item in a .map() list need a unique key prop?
Ans:React needs a unique key to identify each item in a list. It helps React understand which item has changed, been added, or removed and update the UI efficiently.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans:Conditional rendering means showing different UI depending on a condition.

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // show the list of stack items
)}

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans:A parent passes data down to a child by giving it as a prop, like <TechnologyCard tech={tech} isAdded={isAdded} />. For a child to send something back up to the parent, the parent passes down a function as a prop (for example onAddToStack), and the child calls that function when something happens (like a button click), passing along any data the parent needs.