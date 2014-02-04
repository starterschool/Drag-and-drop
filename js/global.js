// Execute the following code when the page is loaded
$(function () {
    // Use a "clone" helper so the original element stays in place as we drag.
    $( ".catalog li" ).draggable({
        helper: "clone"
    });

    $( ".cart" ).droppable({
        activeClass: "droppable",
        hoverClass: "hover",
        tolerance: "touch",
        drop: function( event, ui ) {
            var listObj = $(this).find('ul');
            listObj.append(ui.draggable.clone());
        }
    });
});
