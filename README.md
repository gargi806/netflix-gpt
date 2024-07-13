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
  - then we added form validation using regex.
  - for authentication we use firebase.
  - we are using email/password authentication for our app, we should be able to sign up /login ang go to the browse page , to do that we use api given by firebase.
  - to store all the info related to the users we use redux store
    -then we built sign out.
    - u want to see the sign out button only on the browse page so use location hook.

## uf i need the user icon

<img
          className="w-16 h-16 rounded-lg border border-white m-2"
          alt="user-icon"
          src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        ></img>
