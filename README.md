MetroTabs - plugin for jQuery
=============

Tabs plugin for jQuery like Metro UI.

Usage:
-------

    <div id="tabs">
        <ul>
            <li><a href="#tabs-1">Nunc tincidunt</a></li>
            <li><a href="#tabs-2">Proin dolor</a></li>
            <li><a href="#tabs-3">Aenean lacinia</a></li>
        </ul>
        <div id="tabs-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="tabs-2">
            <p>Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</p>
        </div>
        <div id="tabs-3">
            <p>Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</p>
        </div>
    </div>
    <script type="text/javascript">
        $('#tabs').metroTabs();
    </script>

Options:
-------

* controller (string : 'ul') -- controller element selector
* contents (string : 'div') -- contents element selector
* controllerClass (string : '') -- class name to add controller

Method:
-------

* prev() -- go to previous content
* next() -- go to next content