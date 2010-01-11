var E = Ext.lib.Event;

/**
 * Gets the value of the style on the given element.
 *
 * @param   {HTMLElement}   el          The element
 * @param   {String}        style       The name of the style
 * @return  {mixed}                     The value of the given style
 * @private
 */
function getStyle(el, style) {
    return Ext.get(el).getStyle(style);
}

/**
 * Removes an element from the DOM.
 *
 * @param   {HTMLElement}   el          The element to remove
 * @private
 */
function remove(el) {
    Ext.get(el).remove();
}

/**
 * Appends an HTML fragment to the given element.
 *
 * @param   {HTMLElement}   el          The element to append to
 * @param   {String}        html        The HTML fragment to use
 * @private
 */
function appendHTML(el, html) {
    Ext.DomHelper.append(el, html);
}

/**
 * Gets the target of the given event. The event object passed will be
 * the same object that is passed to listeners registered with
 * addEvent().
 *
 * @param   {Event}     e       The event object
 * @return  {HTMLElement}       The event's target element
 * @private
 */
function getTarget(e) {
    return E.getTarget(e);
}

/**
 * Gets the page X/Y coordinates of the mouse event in an [x, y] array.
 * The page coordinates should be relative to the document, and not the
 * viewport. The event object provided here will be the same object that
 * is passed to listeners registered with addEvent().
 *
 * @param   {Event}     e       The event object
 * @return  {Array}             The page X/Y coordinates
 * @private
 */
function getPageXY(e) {
    return [E.getPageX(e), E.getPageY(e)];
}

/**
 * Prevents the event's default behavior. The event object passed will
 * be the same object that is passed to listeners registered with
 * addEvent().
 *
 * @param   {Event}     e       The event object
 * @private
 */
function preventDefault(e) {
    E.preventDefault(e);
}

/**
 * Gets the key code of the given event object (keydown). The event
 * object here will be the same object that is passed to listeners
 * registered with addEvent().
 *
 * @param   {Event}     e       The event object
 * @return  {Number}            The key code of the event
 * @private
 */
function keyCode(e) {
    return E.getCharCode(e);
}

/**
 * Adds an event handler to the given element. The handler should be called
 * in the scope of the element with the event object as its only argument.
 *
 * @param   {HTMLElement}   el          The element to listen to
 * @param   {String}        type        The type of the event to add
 * @param   {Function}      handler     The event handler function
 * @private
 */
function addEvent(el, type, handler) {
    E.addListener(el, name, handler);
}

/**
 * Removes an event handler from the given element.
 *
 * @param   {HTMLElement}   el          The DOM element to stop listening to
 * @param   {String}        type        The type of the event to remove
 * @param   {Function}      handler     The event handler function
 * @private
 */
function removeEvent(el, type, handler) {
    E.removeListener(el, name, handler);
}
