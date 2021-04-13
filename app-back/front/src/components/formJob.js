//El proyecto no funciona correctamente por un problema con el módulo jade al instalarlo y no lo pude arreglar
import UseSignUpForm from "./jobHooks";

function formJob() {
    const { handleSubmit, handleInputChange } = UseSignUpForm();
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="job">Job</label>
            <input
              type="job"
              id="job"
              name="job"
              onChange={handleInputChange}
              autoComplete="password"
            />
          </div>
  
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="company"
              id="company"
              name="company"
              onChange={handleInputChange}
              autoComplete="password"
            />
          </div>
  
          <div>
            <label htmlFor="payment">Payment</label>
            <input
              type="payment"
              id="payment"
              name="payment"
              onChange={handleInputChange}
              autoComplete="password"
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              type="city"
              id="city"
              name="city"
              onChange={handleInputChange}
              autoComplete="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default formJob;