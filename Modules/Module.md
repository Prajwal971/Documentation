__Modules__ are small units of independent, reusable code that is desired to be used as the building blocks . _modules in other lanuages act as class._
A module can be exported using the keyword __module.exports__
and can be imported using the keyword __require(module_path or module_filename)__

1st we need to do to get access to module features is export them. This is done using the export statement.

When we import the features into the script i.e. import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';

when we apply modules to our html it looks like:-<script type="module" src="main.mjs"></script>