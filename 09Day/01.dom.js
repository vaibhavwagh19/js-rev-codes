// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, making it possible to manipulate the content, structure, and style of a website using JavaScript.
/*
                               window
                                  |
                              document
                                  |
                                 HTML
                            /           \
                       head                body
                 /      \                    | 
            title       Meta                div -- attributes
             |            |               /     \ 
        text node       attribute       h1        p
                                      /   \      /
                            attribute     text node      


*/



/*
1. Basics of the DOM
->What is the DOM?
->DOM structure (tree representation of HTML/->XML documents).
->Nodes and node types (Element, Text, Attribute, Comment).
2. Accessing Elements
->getElementById()
->getElementsByClassName()
->getElementsByTagName()
->querySelector() and querySelectorAll()
3. Traversing the DOM
->Parent, child, and sibling relationships.
->Properties like parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling.
4. Manipulating Elements
->Changing content with innerHTML, textContent, and innerText.
->Changing attributes with setAttribute(), getAttribute(), removeAttribute().
->Modifying styles using the style property.
5. Creating and Deleting Nodes
->Creating elements: document.createElement().
->Adding elements: appendChild(), insertBefore().
->Removing elements: removeChild().
->Cloning elements: cloneNode().
6. Events and Event Handling
->Understanding events (e.g., click, ->mouseover, keydown).
Adding event listeners: addEventListener().
->Removing event listeners: removeEventListener().
->Event object and its properties (target, type, currentTarget).
7. Forms and Inputs
->Accessing form elements.
->Validating form inputs using DOM.
->Handling form events (submit, change, input).
8. Working with Styles
->Changing styles dynamically (element.style.property).
->Adding or removing classes: classList.add(), classList.remove(), classList.toggle().
*/