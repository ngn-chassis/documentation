# Major issue with base class approach for webcomponents:
Base class must extend HTMLElement. If a component needs to extend
a different HTML element, such as an HTMLSelectElement, this will
not be possible. This is not an issue currently as this behavior is not yet supported in browsers.
