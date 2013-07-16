/*
 *A javascript framework simple enough even for zombies.
 */

var x_x = function ( victim ) { // Use this function to target html elements (victims) by id, class, or tag name.

        /*create the getelementsbyclassname() method for the document
          for use with x_x() if it doesn't already exist (older browsers).*/
        if (document.getElementsByClassName == undefined) {
                document.getElementsByClassName = function(className) {
                        var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
                        var allElements = document.getElementsByTagName("*");
                        var results = [];

                        var element;
                        for (var i = 0; (element = allElements[i]) != null; i++) {
                                var elementClass = element.className;
                                if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
                                        results.push(element);
                        }

                        return results;
                }
        }

        if ( victim.substr(0, 1) == '#' ) {
                return document.getElementById( victim.substr(1) );
        }
        else if ( victim.substr(0, 1) == '.' ) {
                return document.getElementsByClassName( victim.substr(1) );
        }
        else if ( victim.substr(0, 1).match('[a-z]+') || victim.substr(0) == '*' ) {
                return document.getElementsByTagName( victim.substr(1) );
        }

};

// Zombies were not created equal:
var x_X = X_x = X_X = x_ = X_ = _x = _X = x = X = x_x;

