* === done

Chassis should support the addition of postcss plugins

Add @variation support to components

WEB COMPONENTS
Add <chassis-slider min max increment stepped>

Add ARIA roles for accessibility

Add @chassis apply block margin/padding
and @chassis apply nested-block margin/padding;
and @chassis apply h1-6 margin/line-height/font-size;

Instead of a separate chassis-multiple-select component,
just combine chassis-select[multiple] with chassis-tagbin.

For svg icons inside select menus, ie arrow icon, add config property to build.


? Currently, the font-size is limited by the max UI width. Max width maybe should
not have an effect on the typography queries. OR, there should be an option
to enable/disable that behavior.

it may make sense to add min/max font-size config options.

-------------

* replace ".width-constraint" with ".constraint" and add ".width" and ".height" modifiers.

-------------

Add config option to log all custom properties and their values to the console
on build

-------------

Add <progress> component

-------------

* Add "invalid" state to inputs

------------

* Add "buffer" to media queries:

@chassis viewport-width < medium buffer(+-200px) {
  ...
}

Can do "+" for "medium + 200px",
"-" for "medium - 200px",
or "+-" or "" for both

or

@chassis viewport-width < medium buffer(200px,200px) {
  ...
}

First item is negative buffer, second is positive

-----------

* Add "truncate" helper class that applies ellipsis
* Revise: Truncate modifier truncates, new "ellipsis" modifier adds ellipsis

--------------

WIP: Math Functions:
-Support nested functions and vars

----------------------

* Add mult() and rotate() functions to chassis apply mixin
What was rotate() supposed to do again?
Probably flip values, ie move margin-right value to margin-left, etc.

-----------------------

* Add vars:
--inline-block-margin-x
--inline-block-margin-y
--inline-block-padding-x
--inline-block-padding-y

^ this will allow the values to be used for properties other than margin or padding (ie borders or shadows)

--------------------

* class namespacing needs to handle class names added to the html tag. For example, right now,

<html class="project">

will be namespaced ".chassis .project". It needs to be ".chassis.project"

-----------------------

consider adding a config option for namespace class. Instead of using "chassis" and forcing the
dev to add that class to the html tag, maybe make it customizable

------------------

buttons
* remove side margin. let user decide which side to put it on using @chassis apply

New Features
--------------------
*- Add eval() function for math preprocessing
- Add vars for things like "button-box-model" so that display properties can be
  reset automatically


chassis-select
* Add focus
- "label" attribute should override innerHTML as this is
  the default <select> behavior
* Missing HTMLSelectElement methods:
  * - .add()
  * - .item()
  * - .namedItem()
  * - .remove()
* Complete arrow key functions

* Spec Sheets still don't fully support nesting
* Theme doesn't support mixins

* Spec sheet states can't have more than one selector. ie:

component {
  @state disabled {
    $(selector)[disabled] {
      opacity: .382;
    }

    $(selector)[disabled="false"] {
      opacity: 1;
    }
  }
}

If a theme or extension calls for this:

extension {
  @chassis extend component {
    @state disabled {
      background: red;
    }
  }
}

...where does the background: red decl go?

Possible solution: Always add extension decls to the first rule in
each state. That should theoretically work in all cases.

Or, if possible, loop through each ruleset inside the state, check for spaces in
the selector, and if there are none, add the rule to each.
