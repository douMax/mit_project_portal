/* eslint-disable jsx-a11y/anchor-is-valid */

function Atish() {
  return (
<div class="left">
    <div class="small-box">
      <div class="big-title">MIT Project Portal</div>
      <div class="tabs">
        <ul>
          <li><a>MIT Student</a></li>
          <li><a>MIT Staff</a></li>
          <li><a>Industry Client</a></li>
        </ul>
      </div>
      <div >
        <h1 class="small-title">Sign In as MIT Student</h1>
        <p>Please login using your MIT AMS credentials.</p>
        <br/>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input has-background-light" type="User Name" placeholder="Login ID"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field ">
          <p class="control has-icons-left">
            <input class="input has-background-light" type="password" placeholder="Password"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-pulled-left">
          <p class="control">
            <button class="button is-info" routerLink='/projects'>
              Sign In
            </button>
          </p>
        </div>
      </div>
      <div>
        <h1 class="small-title">Sign In as MIT Academic Staff</h1>
        <p>Please login using your MIT AMS credentials.</p>
        <br/>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input has-background-light" type="User Name" placeholder="Login ID"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field ">
          <p class="control has-icons-left">
            <input class="input has-background-light" type="password" placeholder="Password"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-pulled-left">
          <p class="control">
            <button class="button is-info" routerLink='/projects'>
              Sign In
            </button>
          </p>
        </div>
      </div>
      <div>
        <h1 class="small-title">Sign In as Industry Client</h1>
        <p>If you already have an account, please sign in.</p>
        <br/>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input has-background-light" type="User Name" placeholder="Email Address"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field ">
          <p class="control has-icons-left">
            <input class="input has-background-light" type="password" placeholder="Password"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-pulled-left">
          <p class="control">
            <button class="button is-info" routerLink='/projects'>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
</div>);
}

export default Atish;
