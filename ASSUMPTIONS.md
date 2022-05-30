# Main assumptions done while solving this task

1. There is a minimum limit for the size of the container and the children so we avoid negative numbers or very small sizes that could impact the performance.
2. Squares can flow so when once square is eliminated, other will take its position.
3. Messages for the user are displayed as alert messages for simplicity reasons.
4. Once the number of squares to be displayed is calculated, the fact that other squares are being removed from the DOM is not enabling the squares that couldn't fit to be added to the DOM.
5. The code style is based on the existing code in order to keep the consistency.
6. I understand that when a child disappears it means the element is removed from the DOM.
