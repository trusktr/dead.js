/*
 *A javascript framework simple enough even for zombies.
 */
function x_x ( victim ) { // to target elements in the page by id, class, or tag name

        if ( victim.substr(0, 1) == '#' ) {
                return document.getElementById( victim.substr(1) );
        }
        else if ( victim.substr(0, 1) == '.' ) {
                return document.getElementsByClassName( victim.substr(1) );
        }
        else if ( victim.substr(0, 1).match('[a-z]+') || victim.substr(0) == '*' ) {
                return document.getElementsByTagName( victim.substr(1) );
        }
}
