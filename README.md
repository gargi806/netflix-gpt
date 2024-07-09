# features

- Login/signup
  - signup form/ sign in
  - redirect to browse page
- Browse(after authentication)
  - Header
  - main movie
    - trailer in background
    - title & description
  - movie suggestions
- netflix gpt

  - search bar
  - suggestions

  ## first we will start by building login screen :

  - in login screen we need three things header and bg-img and form .
  - to get the bg-img u can simply go to netflix website and right click on the img , copy img address .
  - to get netflix logo u inspect it ,go to img in console , refresh find logo there , right click , copy img link.
  - once we start building the form , we encounter one problem where the form goes below the bg-img , but it should ideally come on the top of the img, so we make the form position as relative(isse form img k upr aagya aur uski position ab hm change kr skte hain using top, bottom etc) and bg-img div as absolute.
  - After building the sign in form ,we also need to build sign up form. to do that we use state.
    if we need to build large forms we should use external libraries like formik.
  -
