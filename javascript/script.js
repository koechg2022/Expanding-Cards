

const panels = document.querySelectorAll('.panel'); // Get all the panels and put them in a node list.

panels.forEach((this_node) => {

    
    // add an event lister to each
    this_node.addEventListener('click', () => {
        console.log(`Working on node ${this_node}`);
        panels.forEach((other) => {
            other.classList.remove('active');
        });


        // add a class of active to the node panel (node) that was clicked on
        this_node.classList.add('active');

    });
});