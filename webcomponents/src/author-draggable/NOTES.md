"min-drop-radius" {{CSS value}} attr will cancel any drop events if they occur within a certain radius from the drag start point

"max-drop-radius" {{CSS value}} will cancel any drop events that occur outside a certain radius from the drag start point.

'tether' {bool} will prevent the user from dragging the item further than the max-distance. This attr could also be called something like "fence" or "leash" or "prevent-oob"

'free' {bool} prevent ghost from appearing, and leave dragged element exactly where it is left when dropped

'constrain' options:
- x
- y
- up
- right
- down
- left

These can be combined and will only allow dragging in the specified directions.
