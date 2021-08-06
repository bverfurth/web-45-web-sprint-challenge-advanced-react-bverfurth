# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

-The differences between a stateful & functional component, to start, a sateful component will render data onto the screen. Whereas a functional component is meant to handle a task or display a UI.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

-A "componentWillMount" function is called when a component is first rendered. A "componentWillUpdate" function will re-render the function based on a specific set of paramaters.

3. Define stateful logic.

-Stateful Logic is any code that is storing or using state, and updating the current state with different states / values.

4. What are the three step of creating a successful test? What is done in each phase?

-Arrange: Rendering the component, you stage where the inputs are set and sets up test cases.

-Act: Setting up your consts & userEvents / whatever the behavior of the target is supposed to be.

-Assert: What is supposed to happen / using expect messages to check if specific elements have rendered correclty.
