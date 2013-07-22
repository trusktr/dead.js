dead.js
=======

A javascript framework simple enough even for zombies.

This was the result of some extra free time during class. It's just for fun.


== Usage ==

Use this to select elements on the page easily.

After including this on your page, you can select elements by class or id by
doing `x_x(".class-name")` or `x_x("#id-name")`, a la jQuery. The result is an
array of dom elements. `x_X('.blah')` will return an array containing all the
dom elements on the page that have a class of "blah". `x_X('.blah')[4]` will
give you specifically the 5th element with class equal to "blah".
