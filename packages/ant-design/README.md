Problems:

- Sidebar default Collapsing Button is not an actual button
- Menu Items can not be configured to be <a /> or <button />
- Tooltips of collapsed menu items do not open

Thought's:

- Breadcrumbs can take href's and then render as <a />, but you have to override the onClick method with e.preventDefault to actually suppress the navigation and use whatever router you can.
  I am not sure if I dislike or like it, but it's definitely a approach to make this component router agnostic
