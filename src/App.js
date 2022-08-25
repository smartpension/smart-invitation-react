import './App.css';

function App() {
  return (
    <div className='page-wrapper bg-gra-03 p-t-45 p-b-50'>
      <div className='wrapper wrapper--w790'>
        <div className='card card-5'>
          <div className='card-heading'>
            <h2 className='title'>Send me an invitation</h2>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-row m-b-55'>
                <div className='name'>Name</div>
                <div className='value'>
                  <div className='row row-space'>
                    <div className='col-2'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          name='first_name'
                          id='first-name-input'
                        />
                        <label className='label--desc' htmlFor='first-name-input'>first name</label>
                      </div>
                    </div>
                    <div className='col-2'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          name='last_name'
                          id='last-name-input'
                        />
                        <label className='label--desc' htmlFor='last-name-input'>last name</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <div className='name'>Email</div>
                <div className='value'>
                  <div className='input-group'>
                    <input
                      className='input--style-5'
                      type='email'
                      name='email'
                      aria-label='email'
                    />
                  </div>
                </div>
              </div>
              <div className='form-row m-b-55'>
                <div className='name'>Phone</div>
                <div className='value'>
                  <div className='row row-refine'>
                    <div className='col-3'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          name='area_code'
                          id='area-code-input'
                        />
                        <label className='label--desc' htmlFor='area-code-input'>Area Code</label>
                      </div>
                    </div>
                    <div className='col-9'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          name='phone'
                          id='phone-input'
                        />
                        <label className='label--desc' htmlFor='phone-input'>Phone Number</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <div className='name'>Company</div>
                <div className='value'>
                  <div className='input-group'>
                    <div className='input--style-5 input-select-wrapper'>
                      <select
                        className='input-select'
                        name='subject'
                        tabIndex='-1'
                        aria-hidden='true'
                        aria-label='select your comapany'
                      >
                        <option disabled='disabled'>Choose your
                          company</option>
                        <option>Company 1</option>
                        <option>Company 2</option>
                        <option>Company 3</option>
                        <option>Company 4</option>
                        <option>Company 5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row p-t-20'>
                <label className='label label--block'>Are you a speaker?</label>
                <div className='p-t-15'>
                  <label className='radio-container m-r-55'>
                    Yes
                    <input type='radio' name='exist' />
                    <span className='checkmark'></span>
                  </label>
                  <label className='radio-container'>
                    No
                    <input type='radio' name='exist' />
                    <span className='checkmark'></span>
                  </label>
                </div>
              </div>
              <div className='form-row'>
                <label className='radio-container m-r-55'>
                  <input type='checkbox' name='exist' />
                  <span className='checkbox'></span>
                  I agree to the <a href='#'>terms of service</a>
                </label>
              </div>
              <div>
                <button
                  className='btn btn--radius-2 btn--red'
                  type='button'
                >
                  Send invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
