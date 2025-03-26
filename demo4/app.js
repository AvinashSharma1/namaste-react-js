/**
 * Example 1
 * <div id="parent">
 *      <div id="child">
 *              <h1>Hello World! Namaste React!</h1>
 *      </div>
 * </div>
 * 
 * Example 2
 * <div id="parent">
 *     <div id="child">
    *      <h1>Hello World! Namaste React!</h1>
    *      <h1>React is awesome!</h1>    
 *     </div>
 * </div>
 * 
 * Example 
 * <div id="parent">
 *     <div id="child1">
    *      <h1>Hello World! Namaste React!</h1>
    *      <h1>React is awesome!</h1>    
 *     </div>
 *     <div id="child2">
    *      <h1>Hello World! Namaste React!</h1>
    *      <h1>React is awesome!</h1>    
 *     </div>
 * </div>
 * 
 */

const example_1_prefix = "example_1";
const example_2_prefix = "example_2";
const example_3_prefix = "example_3";

const example_1_parent = React.createElement(
    'div', 
    {id: example_1_prefix + "_parent"},
    React.createElement(
        'div',
        {id: example_1_prefix + "_child"},
        React.createElement('h1', null, 'Hello World! Namaste React!')
    )
);

const example_2_parent = React.createElement(
    'div', 
    {id: example_2_prefix + "_parent"},
    React.createElement(
        'div',
        {id: example_2_prefix + "_child"},
        [
            React.createElement('h1', null, 'Hello World! Namaste React!'), 
            React.createElement('h1', null, 'React Awesome!')
        ]
    )
);


const example_3_parent = React.createElement(
    'div', 
    {id: example_3_prefix + "_parent"},
    [
        React.createElement(
            'div',
            {id: example_3_prefix + "_child1"},
            [
                React.createElement('h1', null, 'Hello World! Namaste React!'), 
                React.createElement('h1', null, 'React Awesome!')
            ]
        ),
        React.createElement(
            'div',
            {id: example_3_prefix + "_child2"},
            [
                React.createElement('h1', null, 'Hello World! Namaste React!'), 
                React.createElement('h1', null, 'React Awesome!')
            ]
        )
    ]
);

console.log(parent);

//const heading = React.createElement('h1', {id:"heading",xyz:"abc"}, 'Hello World! Namaste React!');
const root = ReactDOM.createRoot(document.getElementById('root'));


//root.render(example_1_parent);
//root.render(example_2_parent);

root.render(example_3_parent);