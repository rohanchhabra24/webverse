export default function Form() {
    return (
      <form className="form">
        <p className="title">Registers</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Firstnames</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Lastnames</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="email" className="input" />
            <span>Email</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="password" className="input" />
            <span>Password</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="password" className="input" />
            <span>Confirm password</span>
          </label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
        <p className="sianin">
          Already have an account? <a href="#*">Sign in</a>
        </p>
        </form>
    );
  }